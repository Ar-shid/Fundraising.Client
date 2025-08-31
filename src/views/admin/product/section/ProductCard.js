import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../../../api/Product/Porduct";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductCard = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await getAllProducts(token);

        console.log("Get Products", res);

        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false); // stop shimmer
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {loading
        ? Array(8) // 👈 show 4 shimmer cards
            .fill()
            .map((_, idx) => (
              <div
                className="cus-xl-3 col-lg-3 col-md-11 col-12 mb-30 px-10"
                key={idx}
              >
                <div className="card campaign-card product product--grid">
                  <div className="h-100">
                    <Skeleton height={200} /> {/* image skeleton */}
                    <div className="card-body px-20 pb-25 pt-20">
                      <Skeleton width={`80%`} height={20} />
                      <Skeleton width={`60%`} height={20} />
                      <Skeleton width={`40%`} height={20} />
                      <div className="d-flex mt-20">
                        <Skeleton width={100} height={35} className="mr-2" />
                        <Skeleton width={50} height={35} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        : product.map((product) => (
            <div
              className="cus-xl-3 col-lg-3 col-md-11 col-12 mb-30 px-10"
              key={product.id}
            >
              <div className="card campaign-card product-card product product--grid">
                <div className="h-100">
                  <div className="product-item">
                    <div className="product-item__image">
                      <Link to="">
                        <img
                          className="card-img-top img-fluid"
                          src={
                            product.imagePaths
                              ? `http://192.169.177.4${product.imagePaths}` // ✅ base URL + relative path
                              : "./img/group.png"
                          }
                        />
                      </Link>
                    </div>
                    <div className="card-body px-20 pb-25 pt-20">
                      <div className="product-item__body text-capitalize">
                        <Link to="">
                          <h6 className="card-title">
                            ${product.regularPrice}
                          </h6>
                          <h6 className="card-desc">{product.name}</h6>
                        </Link>
                        <div className="product-item__button d-flex mt-20 flex-wrap">
                          <button className="btn btn-update">
                            Edit Product
                          </button>
                        </div>
                        <div className="d-flex product-desc-price align-items-center mb-10 flex-wrap">
                          <div>
                            <span>Orders</span>
                            <h4>100</h4>
                          </div>

                          <div>
                            <span>Total Sale</span>
                            <h4>$150,234</h4>
                          </div>
                          <div>
                            <span>Bulk</span>
                            <h4>Purchase</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};
export default ProductCard;
