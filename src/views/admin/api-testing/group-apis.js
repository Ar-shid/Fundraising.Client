import React, { useState } from "react";
import {
  getAllGroups,
  createGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
} from "../../../api/Group/Group";
import "./style.css";

const GroupAPIsPage = ({ token }) => {
  const [groupForm, setGroupForm] = useState({
    Id: "",
    Name: "",
    Description: "",
    LogoPath: "",
    Status: 1,
    isApproved: true,
    isDraft: false,
    CreatedDate: new Date().toISOString(),
    CreatedByName: "",
    UpdatedDate: new Date().toISOString(),
    UpdatedByName: "",
    UploadImage: "",
    GroupMembers: [],
  });

  const [getGroupForm, setGetGroupForm] = useState({
    id: "",
  });

  const [responses, setResponses] = useState({});

  // Handle form submissions
  const handleCreateGroup = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append all group fields to FormData
      Object.keys(groupForm).forEach((key) => {
        if (key === "UploadImage" && groupForm[key] instanceof File) {
          // Handle UploadImage as file
          formData.append(key, groupForm[key]);
        } else if (key === "GroupMembers" && Array.isArray(groupForm[key])) {
          // Handle GroupMembers array
          const members = groupForm[key].join(",");
          formData.append(key, members);
        } else if (Array.isArray(groupForm[key])) {
          // Handle other array fields by converting to JSON string
          formData.append(key, JSON.stringify(groupForm[key]));
        } else {
          formData.append(key, groupForm[key]);
        }
      });

      const response = await createGroup(formData, token);
      setResponses((prev) => ({
        ...prev,
        createGroup: { success: true, data: response.data },
      }));
    } catch (error) {
      setResponses((prev) => ({
        ...prev,
        createGroup: { success: false, error: error.message },
      }));
    }
  };

  const handleGetAllGroups = async (e) => {
    e.preventDefault();
    try {
      const response = await getAllGroups(token);
      setResponses((prev) => ({
        ...prev,
        getAllGroups: { success: true, data: response.data },
      }));
    } catch (error) {
      setResponses((prev) => ({
        ...prev,
        getAllGroups: { success: false, error: error.message },
      }));
    }
  };

  const handleGetGroupById = async (e) => {
    e.preventDefault();
    try {
      const response = await getGroupById(getGroupForm.id, token);
      setResponses((prev) => ({
        ...prev,
        getGroupById: { success: true, data: response.data },
      }));
    } catch (error) {
      setResponses((prev) => ({
        ...prev,
        getGroupById: { success: false, error: error.message },
      }));
    }
  };

  const handleUpdateGroup = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append all group fields to FormData
      Object.keys(groupForm).forEach((key) => {
        if (key === "UploadImage" && groupForm[key] instanceof File) {
          // Handle UploadImage as file
          formData.append(key, groupForm[key]);
        } else if (key === "GroupMembers" && Array.isArray(groupForm[key])) {
          // Handle GroupMembers array
          const members = groupForm[key].join(",");
          formData.append(key, members);
        } else if (Array.isArray(groupForm[key])) {
          // Handle other array fields by converting to JSON string
          formData.append(key, JSON.stringify(groupForm[key]));
        } else {
          formData.append(key, groupForm[key]);
        }
      });

      const response = await updateGroup(getGroupForm.id, formData, token);
      setResponses((prev) => ({
        ...prev,
        updateGroup: { success: true, data: response.data },
      }));
    } catch (error) {
      setResponses((prev) => ({
        ...prev,
        updateGroup: { success: false, error: error.message },
      }));
    }
  };

  const handleDeleteGroup = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteGroup(getGroupForm.id, token);
      setResponses((prev) => ({
        ...prev,
        deleteGroup: { success: true, data: response.data },
      }));
    } catch (error) {
      setResponses((prev) => ({
        ...prev,
        deleteGroup: { success: false, error: error.message },
      }));
    }
  };

  // Helper function to render form field
  const renderField = (
    label,
    value,
    onChange,
    type = "text",
    required = false,
    placeholder = ""
  ) => (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );

  // Helper function to render array field
  const renderArrayField = (
    label,
    value,
    onChange,
    placeholder = "Enter comma-separated values"
  ) => (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        value={Array.isArray(value) ? value.join(", ") : value}
        onChange={(e) =>
          onChange(
            e.target.value
              .split(",")
              .map((item) => item.trim())
              .filter((item) => item)
          )
        }
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );

  return (
    <div className="api-testing-page">
      <div className="container">
        <div className="header">
          <h1>👥 Group APIs Testing</h1>
          <div className="token-info">
            <span>Token: {token.substring(0, 20)}...</span>
          </div>
        </div>

        <div className="forms-grid">
          {/* GET All Groups */}
          <div className="form-section">
            <h2>GET /api/group</h2>
            <p className="api-description">Get all groups</p>
            <form onSubmit={handleGetAllGroups}>
              <button type="submit" className="btn btn-primary">
                Get All Groups
              </button>
            </form>
            {responses.getAllGroups && (
              <div
                className={`response ${
                  responses.getAllGroups.success ? "success" : "error"
                }`}
              >
                {responses.getAllGroups.success
                  ? "Success!"
                  : `Error: ${responses.getAllGroups.error}`}
                {responses.getAllGroups.data && (
                  <pre className="response-data">
                    {JSON.stringify(responses.getAllGroups.data, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>

          {/* GET Group by ID */}
          <div className="form-section">
            <h2>GET /api/group/{"{id}"}</h2>
            <p className="api-description">Get group by ID</p>
            <form onSubmit={handleGetGroupById}>
              {renderField(
                "Group ID",
                getGroupForm.id,
                (e) =>
                  setGetGroupForm((prev) => ({ ...prev, id: e.target.value })),
                "text",
                true
              )}
              <button type="submit" className="btn btn-primary">
                Get Group by ID
              </button>
            </form>
            {responses.getGroupById && (
              <div
                className={`response ${
                  responses.getGroupById.success ? "success" : "error"
                }`}
              >
                {responses.getGroupById.success
                  ? "Success!"
                  : `Error: ${responses.getGroupById.error}`}
                {responses.getGroupById.data && (
                  <pre className="response-data">
                    {JSON.stringify(responses.getGroupById.data, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>

          {/* POST Create Group */}
          <div className="form-section">
            <h2>POST /api/group</h2>
            <p className="api-description">Create new group</p>
            <form onSubmit={handleCreateGroup}>
              {renderField("ID", groupForm.Id, (e) =>
                setGroupForm((prev) => ({ ...prev, Id: e.target.value }))
              )}
              {renderField(
                "Name",
                groupForm.Name,
                (e) =>
                  setGroupForm((prev) => ({ ...prev, Name: e.target.value })),
                "text",
                true
              )}

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={groupForm.Description}
                  onChange={(e) =>
                    setGroupForm((prev) => ({
                      ...prev,
                      Description: e.target.value,
                    }))
                  }
                  className="form-control"
                  rows="3"
                />
              </div>

              {renderField("Logo Path", groupForm.LogoPath, (e) =>
                setGroupForm((prev) => ({ ...prev, LogoPath: e.target.value }))
              )}
              {renderField(
                "Status",
                groupForm.Status,
                (e) =>
                  setGroupForm((prev) => ({
                    ...prev,
                    Status: parseInt(e.target.value),
                  })),
                "number"
              )}

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={groupForm.isApproved}
                    onChange={(e) =>
                      setGroupForm((prev) => ({
                        ...prev,
                        isApproved: e.target.checked,
                      }))
                    }
                  />
                  Is Approved
                </label>
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={groupForm.isDraft}
                    onChange={(e) =>
                      setGroupForm((prev) => ({
                        ...prev,
                        isDraft: e.target.checked,
                      }))
                    }
                  />
                  Is Draft
                </label>
              </div>

              {renderField(
                "Created By Name",
                groupForm.CreatedByName,
                (e) =>
                  setGroupForm((prev) => ({
                    ...prev,
                    CreatedByName: e.target.value,
                  })),
                "text",
                true
              )}
              {renderField(
                "Updated By Name",
                groupForm.UpdatedByName,
                (e) =>
                  setGroupForm((prev) => ({
                    ...prev,
                    UpdatedByName: e.target.value,
                  })),
                "text",
                true
              )}

              <div className="form-group">
                <label>Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setGroupForm((prev) => ({ ...prev, UploadImage: file }));
                    }
                  }}
                  className="form-control"
                />
                <small className="form-text">Select an image file</small>
              </div>

              {renderArrayField(
                "Group Members",
                groupForm.GroupMembers,
                (value) =>
                  setGroupForm((prev) => ({ ...prev, GroupMembers: value }))
              )}

              <button type="submit" className="btn btn-primary">
                Create Group
              </button>
            </form>
            {responses.createGroup && (
              <div
                className={`response ${
                  responses.createGroup.success ? "success" : "error"
                }`}
              >
                {responses.createGroup.success
                  ? "Success!"
                  : `Error: ${responses.createGroup.error}`}
                {responses.createGroup.data && (
                  <pre className="response-data">
                    {JSON.stringify(responses.createGroup.data, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>

          {/* PUT Update Group */}
          <div className="form-section">
            <h2>PUT /api/group/{"{id}"}</h2>
            <p className="api-description">Update group by ID</p>
            <form onSubmit={handleUpdateGroup}>
              {renderField(
                "Group ID",
                getGroupForm.id,
                (e) =>
                  setGetGroupForm((prev) => ({ ...prev, id: e.target.value })),
                "text",
                true
              )}
              {renderField(
                "Name",
                groupForm.Name,
                (e) =>
                  setGroupForm((prev) => ({ ...prev, Name: e.target.value })),
                "text",
                true
              )}

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={groupForm.Description}
                  onChange={(e) =>
                    setGroupForm((prev) => ({
                      ...prev,
                      Description: e.target.value,
                    }))
                  }
                  className="form-control"
                  rows="3"
                />
              </div>

              {renderField("Logo Path", groupForm.LogoPath, (e) =>
                setGroupForm((prev) => ({ ...prev, LogoPath: e.target.value }))
              )}
              {renderField(
                "Status",
                groupForm.Status,
                (e) =>
                  setGroupForm((prev) => ({
                    ...prev,
                    Status: parseInt(e.target.value),
                  })),
                "number"
              )}

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={groupForm.isApproved}
                    onChange={(e) =>
                      setGroupForm((prev) => ({
                        ...prev,
                        isApproved: e.target.checked,
                      }))
                    }
                  />
                  Is Approved
                </label>
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={groupForm.isDraft}
                    onChange={(e) =>
                      setGroupForm((prev) => ({
                        ...prev,
                        isDraft: e.target.checked,
                      }))
                    }
                  />
                  Is Draft
                </label>
              </div>

              {renderField(
                "Created By Name",
                groupForm.CreatedByName,
                (e) =>
                  setGroupForm((prev) => ({
                    ...prev,
                    CreatedByName: e.target.value,
                  })),
                "text",
                true
              )}
              {renderField(
                "Updated By Name",
                groupForm.UpdatedByName,
                (e) =>
                  setGroupForm((prev) => ({
                    ...prev,
                    UpdatedByName: e.target.value,
                  })),
                "text",
                true
              )}

              <div className="form-group">
                <label>Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setGroupForm((prev) => ({ ...prev, UploadImage: file }));
                    }
                  }}
                  className="form-control"
                />
                <small className="form-text">Select an image file</small>
              </div>

              {renderArrayField(
                "Group Members",
                groupForm.GroupMembers,
                (value) =>
                  setGroupForm((prev) => ({ ...prev, GroupMembers: value }))
              )}

              <button type="submit" className="btn btn-primary">
                Update Group
              </button>
            </form>
            {responses.updateGroup && (
              <div
                className={`response ${
                  responses.updateGroup.success ? "success" : "error"
                }`}
              >
                {responses.updateGroup.success
                  ? "Success!"
                  : `Error: ${responses.updateGroup.error}`}
                {responses.updateGroup.data && (
                  <pre className="response-data">
                    {JSON.stringify(responses.updateGroup.data, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>

          {/* DELETE Group */}
          <div className="form-section">
            <h2>DELETE /api/group/{"{id}"}</h2>
            <p className="api-description">Delete group by ID</p>
            <form onSubmit={handleDeleteGroup}>
              {renderField(
                "Group ID",
                getGroupForm.id,
                (e) =>
                  setGetGroupForm((prev) => ({ ...prev, id: e.target.value })),
                "text",
                true
              )}
              <button type="submit" className="btn btn-danger">
                Delete Group
              </button>
            </form>
            {responses.deleteGroup && (
              <div
                className={`response ${
                  responses.deleteGroup.success ? "success" : "error"
                }`}
              >
                {responses.deleteGroup.success
                  ? "Success!"
                  : `Error: ${responses.deleteGroup.error}`}
                {responses.deleteGroup.data && (
                  <pre className="response-data">
                    {JSON.stringify(responses.deleteGroup.data, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupAPIsPage;
