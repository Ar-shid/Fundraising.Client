import AdminHeader from "../../layout/AdminHeader";
import { Link } from "react-router-dom";
import Select from "react-select";

const AddProduct = ({ token }) => {
  return (
    <>
      <AdminHeader />
      <main className="main-content">
        <div className="contents p-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="breadcrumb-main">
                  <h1 className="text-capitalize breadcrumb-title">
                    Create a Product
                  </h1>
                </div>
                <div className="card card-default card-md mb-4">
                  <div className="card-body">
                    <ul className="atbd-breadcrumb nav">
                      <li className="atbd-breadcrumb__item">
                        <Link to="/admin-home">Home</Link>
                        <span className="breadcrumb__seperator">/</span>
                      </li>
                      <li className="atbd-breadcrumb__item">
                        <Link to="/admin-product">Product List</Link>
                        <span className="breadcrumb__seperator">/</span>
                      </li>
                      <li className="atbd-breadcrumb__item">
                        <Link to="">Add Product</Link>
                        <span className="breadcrumb__seperator"></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card card-Vertical card-default campaign-form card-md mb-4">
                  <div className="card-header">
                    <h5>Group Information</h5>
                  </div>
                  <div className="card-body p-5">
                    <div className="Vertical-form">
                      <form action="#">
                        <div className="form-group">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="color-dark fs-14 fw-500 align-center"
                          >
                            Group Name*
                          </label>
                          <input
                            type="text"
                            className="form-control ih-medium ip-gray radius-xs b-light px-15"
                            name="Name"
                            placeholder="Group Title here"
                          />
                        </div>
                        <div className="form-group form-element-textarea mb-20">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 align-center"
                          >
                            Group Description *
                          </label>
                          <textarea
                            className="form-control"
                            placeholder="About Group "
                            rows={5}
                            name="Description"
                          />
                        </div>
                        {/* <div className="form-group form-element-textarea mb-20">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 align-center"
                          >
                            Group Logo *
                          </label>

                          <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                          >
                            {({
                              imageList,
                              onImageUpload,
                              onImageUpdate,
                              onImageRemove,
                              isDragging,
                              dragProps,
                            }) => (
                              // write your building UI
                              <>
                                <div className="upload__image-wrapper">
                                  <h4
                                    style={
                                      isDragging ? { color: "red" } : undefined
                                    }
                                    onClick={onImageUpload}
                                    {...dragProps}
                                  >
                                    <svg
                                      width="24"
                                      height="20"
                                      viewBox="0 0 24 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M23.1628 4.59996L20.7878 16.05C20.7128 16.4 20.4128 16.65 20.0628 16.65C20.0128 16.65 19.9628 16.65 19.9128 16.625C19.5128 16.55 19.2378 16.15 19.3378 15.75L21.5628 5.04997L7.23779 2.15001L6.88779 3.74998C6.78779 4.14998 6.38779 4.39999 5.98779 4.32499C5.58779 4.22499 5.33779 3.82497 5.41279 3.42497L5.93779 1.09996C6.03779 0.699957 6.41279 0.450006 6.81279 0.525006L22.6128 3.72496C22.8128 3.77496 22.9878 3.87497 23.0878 4.04997C23.1628 4.19997 23.2128 4.39996 23.1628 4.59996ZM18.4878 18.25C18.4878 18.8 18.0378 19.25 17.4878 19.25H1.23779C0.687793 19.25 0.237793 18.8 0.237793 18.25V5.99998C0.237793 5.44998 0.687793 4.99998 1.23779 4.99998H17.4878C18.0378 4.99998 18.4878 5.44998 18.4878 5.99998V18.25ZM2.23779 6.99998V13.175L6.46279 9.74998C6.78779 9.47498 7.31279 9.47501 7.63779 9.77501L12.3878 13.975L14.3628 12.275C14.6878 12 15.0628 12 15.3878 12.275L16.2128 13.125V6.99998H2.23779ZM16.2378 17.25V15.425L14.8378 14.1L12.9378 15.8C12.6128 16.075 12.1378 16.075 11.8128 15.8L6.98779 11.575L2.23779 15.45V17.25H16.2378ZM12.0878 11.075C12.9378 11.075 13.6128 10.4 13.6128 9.54997C13.6128 8.69997 12.9128 8.02501 12.0878 8.02501C11.2378 8.02501 10.5628 8.69997 10.5628 9.54997C10.5628 10.4 11.2378 11.075 12.0878 11.075Z"
                                        fill="#D1D0D0"
                                      />
                                    </svg>
                                    &nbsp;Drag and drop image , or &nbsp;
                                    <span>browse</span>
                                  </h4>
                                </div>
                                <div className="image-list">
                                  {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                      <img
                                        src={image["data_url"]}
                                        alt=""
                                        width="100"
                                      />
                                      <div className="image-item__btn-wrapper">
                                        <span
                                          onClick={() => onImageUpdate(index)}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-edit"
                                          >
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                          </svg>
                                        </span>
                                        <span
                                          onClick={() => onImageRemove(index)}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-trash-2"
                                          >
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line
                                              x1="10"
                                              y1="11"
                                              x2="10"
                                              y2="17"
                                            ></line>
                                            <line
                                              x1="14"
                                              y1="11"
                                              x2="14"
                                              y2="17"
                                            ></line>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                          </ImageUploading>
                        </div> */}
                        <div className="form-group">
                          <label className="color-dark fs-14 fw-500 align-center">
                            Select Products to Fundraising with
                          </label>
                          <Select isMulti className="mb-3" />

                          <p>Selected: </p>
                        </div>

                        <div className="layout-button mt-5 text-end">
                          <button
                            type="button"
                            className="btn secondry-btn btn-default btn-squared border-normal bg-normal px-20 me-3"
                          >
                            Save Draft
                          </button>
                          <button
                            type="button"
                            className="btn primary-btn btn-default btn-squared px-30"
                          >
                            Send for Approval
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AddProduct;
