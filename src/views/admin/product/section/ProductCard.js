import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../../../api/Product/Porduct";
const ProductCard = () => {
  const [product, setProducts] = useState([]);

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
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {product.map((product) => (
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
                      <h6 className="card-title">${product.regularPrice}</h6>
                      <h6 className="card-desc">{product.name}</h6>
                    </Link>
                    <div className="product-item__button d-flex mt-20 flex-wrap">
                      <button className="btn btn-update">Edit Product</button>
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
