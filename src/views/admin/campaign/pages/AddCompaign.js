import AdminHeader from "../../layout/AdminHeader";
import { Link } from "react-router-dom";
import React from "react";
import ImageUploading from "react-images-uploading";
import { createCampaign } from "../../../../api/Campaign/Campaign";
import { getOrganizers } from "../../../../api/Auth/Auth";
import { getAllGroups } from "../../../../api/Group/Group";
import { getAllProducts } from "../../../../api/Product/Porduct";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";

import { useState, useEffect } from "react";
const AddCompaign = ({ token }) => {
  const [organizer, setOrganizer] = useState([]);
  const [organizerOptions, setorganizerOptions] = useState([]);
  const [group, setGroup] = useState([]);
  const [groupOptions, setgroupOptions] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showErrorsInToast = (errors) => {
    if (Array.isArray(errors)) {
      // Case: password policy (array of objects with description)
      errors.forEach((err) => {
        toast.error(err.description || err.message || JSON.stringify(err));
      });
    } else if (typeof errors === "object" && errors !== null) {
      // Case: validation errors object
      Object.values(errors).forEach((errorArray) => {
        if (Array.isArray(errorArray)) {
          errorArray.forEach((msg) => toast.error(msg));
        }
      });
    } else {
      // Fallback (string or unexpected)
      toast.error(errors?.toString() || "Something went wrong!");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    requiredAmount: "",
    raisedAmount: "",
    assignedToId: null,
    assignedToName: "",
    CreatedByName: "",
    startDate: "",
    endDate: "",
    UploadImages: [],
    OrganizerIds: [],
    GroupIds: [],
    ProductIds: [],
  });
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  // Get Organizer ID in DropDOwn

  const handleorganizerChange = (selected) => {
    setorganizerOptions(selected);

    const OrganizerIds = selected.map((opt) => opt.value); // ✅ keep GUID as string

    setFormData((prev) => ({
      ...prev,
      OrganizerIds,
    }));
  };

  useEffect(() => {
    const fetchOrganizer = async () => {
      const token = localStorage.getItem("token"); // direct localStorage se
      if (!token) return;
      try {
        const res = await getOrganizers(token);
        // map API data to react-select format
        const formatted = res.data.map((p) => ({
          value: p.id,
          label: p.name,
        }));
        setOrganizer(formatted);
        console.log("sca", formatted);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchOrganizer();
  }, [token]);

  // Get Organizer ID in DropDOwn Complete

  // Get Group ID in DropDOwn

  const handlegroupChange = (selected) => {
    setgroupOptions(selected);

    const GroupIds = selected.map((opt) => Number(opt.value));

    setFormData((prev) => ({
      ...prev,
      GroupIds,
    }));
  };

  useEffect(() => {
    const fetchGroup = async () => {
      const token = localStorage.getItem("token"); // direct localStorage se
      if (!token) return;
      try {
        const res = await getAllGroups(token);
        // map API data to react-select format
        const formatted = res.data.map((p) => ({
          value: p.id,
          label: p.name,
        }));
        setGroup(formatted);
        console.log("sca", formatted);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchGroup();
  }, [token]);

  // Get Group ID in DropDOwn Complete

  // Get Product ID in DropDOwn

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);

    const ProductIds = selected.map((opt) => Number(opt.value));

    setFormData((prev) => ({
      ...prev,
      ProductIds,
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token"); // direct localStorage se
      if (!token) return;
      try {
        const res = await getAllProducts(token);
        // map API data to react-select format
        const formatted = res.data.map((p) => ({
          value: p.id,
          label: p.name,
        }));
        setProducts(formatted);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [token]);

  // Get Product ID in DropDOwn Complete

  // Load organizer data from localStorage on component mount Need to Delete
  useEffect(() => {
    const organizerId = localStorage.getItem("organizerId");
    const organizerName = localStorage.getItem("organizerName");

    if (organizerId && organizerName) {
      setFormData((prev) => ({
        ...prev,
        assignedToId: organizerId,
        assignedToName: organizerName,
      }));
      console.log("Organizer loaded from localStorage:", {
        organizerId,
        organizerName,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const CampaignPost = async (e) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    e.preventDefault();
    setIsLoading(true);
    const formDataToSend = new FormData();

    // ✅ Basic fields
    formDataToSend.append("Id", 0);
    formDataToSend.append("Name", formData.name || "");
    formDataToSend.append("Description", formData.description || "");
    formDataToSend.append(
      "RequiredAmount",
      parseFloat(formData.requiredAmount) || 0
    );
    formDataToSend.append(
      "RaisedAmount",
      parseFloat(formData.raisedAmount) || 0
    );
    formDataToSend.append(
      "StartDate",
      formData.startDate || new Date().toISOString()
    );
    formDataToSend.append(
      "EndDate",
      formData.endDate || new Date().toISOString()
    );

    formDataToSend.append("Status", true);
    formDataToSend.append("IsCompaignDeleted", false);
    formDataToSend.append("IsCompaignLaunch", true);
    formDataToSend.append("IsApproved", false);

    formDataToSend.append("AssignedToId", formData.assignedToId || "");
    formDataToSend.append("AssignedToName", formData.assignedToName || "Admin");
    formDataToSend.append("CreatedByName", formData.assignedToName || "Admin");

    // ✅ File array (UploadImages)
    images.forEach((img) => {
      if (img.file) {
        formDataToSend.append("UploadImages", img.file);
      }
    });

    // ✅ Append ProductIds
    if (formData.ProductIds && formData.ProductIds.length > 0) {
      formData.ProductIds.forEach((id) => {
        formDataToSend.append("ProductIds", id);
      });
    }

    // ✅ Append GroupIds
    if (formData.GroupIds && formData.GroupIds.length > 0) {
      formData.GroupIds.forEach((id) => {
        formDataToSend.append("GroupIds", id);
      });
    }

    // ✅ Append OrganizerIds
    if (formData.OrganizerIds && formData.OrganizerIds.length > 0) {
      formData.OrganizerIds.forEach((id) => {
        formDataToSend.append("OrganizerIds", id);
      });
    }

    // ✅ Complex objects (must be appended as stringified JSON, one per array element)
    // formDataToSend.append(
    //   "CompaignProducts",
    //   JSON.stringify({ id: 0, name: "string" })
    // );
    // formDataToSend.append(
    //   "CompaignGroups",
    //   JSON.stringify({ id: 0, name: "string" })
    // );
    // formDataToSend.append(
    //   "CompaignOrganizers",
    //   JSON.stringify({ id: "string", name: "string" })
    // );

    // formDataToSend.append("ProductIds", []);
    // formDataToSend.append("GroupIds", []);
    // formDataToSend.append("OrganizerIds", []);

    try {
      const response = await createCampaign(formDataToSend, token);
      console.log("Campaign BIlal", response);
    } catch (error) {
      console.error("Error saving campaign:", error);
      const backendErrors = error.response?.data;
      if (backendErrors?.errors) {
        showErrorsInToast(backendErrors.errors);
      } else {
        showErrorsInToast(backendErrors);
      }
    } finally {
      setIsLoading(false);
      // Stop loading in all cases
    }
  };

  return (
    <>
      <ToastContainer />

      <AdminHeader />
      <main className="main-content">
        <div className="contents p-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="breadcrumb-main">
                  <h1 className="text-capitalize breadcrumb-title">
                    Add Your Campaign
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
                        <Link to="/admin-campaign">Campaign List</Link>
                        <span className="breadcrumb__seperator">/</span>
                      </li>
                      <li className="atbd-breadcrumb__item">
                        <Link to="">Add Campaign</Link>
                        <span className="breadcrumb__seperator"></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card card-Vertical card-default campaign-form card-md mb-4">
                  <div className="card-header">
                    <h5>Campaign Information</h5>
                  </div>
                  <div className="card-body p-5">
                    <div className="Vertical-form">
                      <form action="#">
                        <div className="form-group">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="color-dark fs-14 fw-500 align-center"
                          >
                            Campaign Title *
                          </label>
                          <input
                            type="text"
                            className="form-control ih-medium ip-gray radius-xs b-light px-15"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Campaign Title here"
                          />
                        </div>
                        <div className="form-group form-element-textarea mb-20">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 align-center"
                          >
                            Campaign Description *
                          </label>
                          <textarea
                            className="form-control"
                            placeholder="About Campaign "
                            rows={5}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group form-element-textarea mb-20">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 align-center"
                          >
                            Upload Images *
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
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="color-dark fs-14 fw-500 align-center"
                          >
                            Fundraising Amount*
                          </label>
                          <input
                            type="text"
                            className="form-control ih-medium ip-gray radius-xs b-light px-15"
                            id=""
                            placeholder="Desired Amount $"
                            name="raisedAmount"
                            value={formData.raisedAmount}
                            onChange={handleChange}
                          />
                          <ul className="list-inline">
                            <li>$10,000</li>
                            <li>$50,000</li>
                            <li>$100,000</li>
                            <li>$200,000</li>
                            <li>$500,000</li>
                            <li>Custom</li>
                          </ul>
                        </div>
                        <h3 className="my-5" style={{ fontWeight: "bold" }}>
                          Organizer / Group{" "}
                        </h3>
                        <div className="row">
                          <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                              <label className="color-dark fs-14 fw-500 align-center">
                                Assigned Organizer
                              </label>
                              <Select
                                isMulti
                                options={organizer}
                                value={organizerOptions}
                                onChange={handleorganizerChange}
                                className="mb-3"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                              <label className="color-dark fs-14 fw-500 align-center">
                                Select Group
                              </label>
                              <Select
                                isMulti
                                options={group}
                                value={groupOptions}
                                onChange={handlegroupChange}
                                className="mb-3"
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="my-3" style={{ fontWeight: "bold" }}>
                          Fundraising Products & Duration
                        </h3>
                        <div className="row">
                          <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                              <label className="color-dark fs-14 fw-500 align-center">
                                Select Products to Fundraising with
                              </label>
                              <Select
                                isMulti
                                options={products}
                                value={selectedOptions}
                                onChange={handleSelectChange}
                                className="mb-3"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-12">
                            <div className="row">
                              <div className="col-lg-6 col-sm-12">
                                <div className="form-group">
                                  <label className="color-dark fs-14 fw-500 align-center">
                                    Start Date
                                  </label>
                                  <input
                                    id="startDate"
                                    type="date"
                                    className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-sm-12">
                                <div className="form-group">
                                  <label className="color-dark fs-14 fw-500 align-center">
                                    End Date
                                  </label>
                                  <input
                                    id="endDate"
                                    type="date"
                                    className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="layout-button mt-5 text-end">
                          <button
                            type="button"
                            className="btn secondry-btn btn-default btn-squared border-normal bg-normal px-20 me-3"
                          >
                            Save Draft
                          </button>
                          <button
                            onClick={CampaignPost}
                            type="button"
                            className="btn primary-btn btn-default btn-squared px-30"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <span>
                                <span className="spinner"></span> Saving
                                Campaign ....
                              </span>
                            ) : (
                              " Launch Campaign"
                            )}
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
export default AddCompaign;
