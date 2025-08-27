import React, { useState } from 'react';
import { getAllCampaigns, createCampaign, getCampaignById, updateCampaign, deleteCampaign } from '../../../api/Campaign/Campaign';
import './style.css';

const CampaignAPIsPage = ({ token }) => {
  const [campaignForm, setCampaignForm] = useState({
    Id: 0,
    Name: 'Test Campaign',
    Description: 'This is a test campaign description',
    RequiredAmount: '1000',
    RaisedAmount: '0',
    StartDate: new Date().toISOString(),
    EndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    Status: true,
    IsCompaignDeleted: false,
    isCompaignLaunch: true,
    IsApproved: true,
    AssignedToId: '43aad053-7716-4bb5-ad0b-91ef2f9bf452',
    AssignedToName: 'Test User',
    CreatedDate: new Date().toISOString(),
    CreatedByName: 'Test User',
    UpdatedDate: new Date().toISOString(),
    UpdatedByName: 'Test User',
    UploadImages: [],
    ImagePaths: 'test-image-1.jpg',
    ProductIds: '0',
    GroupIds: '0',
    OrganizerIds: '0',
    CompaignProducts: JSON.stringify([{"id":"string","name":"string"}]),
    CompaignGroups: JSON.stringify([{"id":"string","name":"string"}]),
    CompaignOrganizers: JSON.stringify([{"id":"string","name":"string"}])
  });

  const [getCampaignForm, setGetCampaignForm] = useState({
    id: ''
  });

  const [responses, setResponses] = useState({});

  // Handle form submissions
  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append all campaign fields to FormData
      Object.keys(campaignForm).forEach((key) => {
        if (key === "UploadImages" && Array.isArray(campaignForm[key])) {
          // Handle multiple image files
          campaignForm[key].forEach((file) => {
            formData.append("UploadImages", file);
          });
        } else if (key === "ImagePaths" && typeof campaignForm[key] === 'string') {
          // Handle ImagePaths as comma-separated string
          const paths = campaignForm[key].split(',').map(path => path.trim()).filter(path => path);
          paths.forEach(path => {
            formData.append("ImagePaths", path);
          });
        } else if (key === "ProductIds" && typeof campaignForm[key] === 'string') {
          // Handle ProductIds as comma-separated string
          const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
          ids.forEach(id => {
            formData.append("ProductIds", parseInt(id));
          });
        } else if (key === "GroupIds" && typeof campaignForm[key] === 'string') {
          // Handle GroupIds as comma-separated string
          const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
          ids.forEach(id => {
            formData.append("GroupIds", parseInt(id));
          });
        } else if (key === "OrganizerIds" && typeof campaignForm[key] === 'string') {
          // Handle OrganizerIds as comma-separated string
          const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
          ids.forEach(id => {
            formData.append("OrganizerIds", id);
          });
        } else if (Array.isArray(campaignForm[key])) {
          // Handle array fields by converting to JSON string
          formData.append(key, JSON.stringify(campaignForm[key]));
        } else {
          formData.append(key, campaignForm[key]);
        }
      });

      // Add the required complex fields that the backend expects
      if (campaignForm.GroupIds) {
        const groupIds = campaignForm.GroupIds.split(',').map(id => id.trim()).filter(id => id);
        // formData.append("CompaignGroups", JSON.stringify(groupIds));
        // formData.append("CompaignGroups", 1);
      }
      
      if (campaignForm.ProductIds) {
        const productIds = campaignForm.ProductIds.split(',').map(id => id.trim()).filter(id => id);
        // formData.append("CompaignProducts", JSON.stringify(productIds));
        // formData.append("CompaignProducts", 1);
      }
      
      if (campaignForm.OrganizerIds) {
        const organizerIds = campaignForm.OrganizerIds.split(',').map(id => id.trim()).filter(id => id);
        // formData.append("CompaignOrganizers", JSON.stringify(organizerIds));
        // formData.append("CompaignOrganizers", 1);
      }

      // Debug: Log what's being sent
      console.log('FormData contents:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await createCampaign(formData, token);
      setResponses(prev => ({ ...prev, createCampaign: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, createCampaign: { success: false, error: error.message } }));
    }
  };

  const handleGetAllCampaigns = async (e) => {
    e.preventDefault();
    try {
      const response = await getAllCampaigns(token);
      setResponses(prev => ({ ...prev, getAllCampaigns: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, getAllCampaigns: { success: false, error: error.message } }));
    }
  };

  const handleGetCampaignById = async (e) => {
    e.preventDefault();
    try {
      const response = await getCampaignById(getCampaignForm.id, token);
      setResponses(prev => ({ ...prev, getCampaignById: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, getCampaignById: { success: false, error: error.message } }));
    }
  };

  const handleUpdateCampaign = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append all campaign fields to FormData
      Object.keys(campaignForm).forEach((key) => {
        if (key === "UploadImages" && Array.isArray(campaignForm[key])) {
          // Handle multiple image files
          campaignForm[key].forEach((file) => {
            formData.append("UploadImages", file);
          });
        } else if (key === "ImagePaths" && typeof campaignForm[key] === 'string') {
          // Handle ImagePaths as comma-separated string
          const paths = campaignForm[key].split(',').map(path => path.trim()).filter(path => path);
          paths.forEach(path => {
            formData.append("ImagePaths", path);
          });
        } else if (key === "ProductIds" && typeof campaignForm[key] === 'string') {
          // Handle ProductIds as comma-separated string
          const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
          ids.forEach(id => {
            formData.append("ProductIds", parseInt(id));
          });
        } else if (key === "GroupIds" && typeof campaignForm[key] === 'string') {
          // Handle GroupIds as comma-separated string
          const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
          ids.forEach(id => {
            formData.append("GroupIds", parseInt(id));
          });
        } else if (key === "OrganizerIds" && typeof campaignForm[key] === 'string') {
          // Handle OrganizerIds as comma-separated string
          const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
          ids.forEach(id => {
            formData.append("OrganizerIds", id);
          });
        } else if (Array.isArray(campaignForm[key])) {
          // Handle array fields by converting to JSON string
          formData.append(key, JSON.stringify(campaignForm[key]));
        } else {
          formData.append(key, campaignForm[key]);
        }
      });

      // Add the required complex fields that the backend expects
      if (campaignForm.GroupIds) {
        const groupIds = campaignForm.GroupIds.split(',').map(id => id.trim()).filter(id => id);
        formData.append("CompaignGroups", JSON.stringify(groupIds));
      }
      
      if (campaignForm.ProductIds) {
        const productIds = campaignForm.ProductIds.split(',').map(id => id.trim()).filter(id => id);
        formData.append("CompaignProducts", JSON.stringify(productIds));
      }
      
      if (campaignForm.OrganizerIds) {
        const organizerIds = campaignForm.OrganizerIds.split(',').map(id => id.trim()).filter(id => id);
        formData.append("CompaignOrganizers", JSON.stringify(organizerIds));
      }

      const response = await updateCampaign(getCampaignForm.id, formData, token);
      setResponses(prev => ({ ...prev, updateCampaign: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, updateCampaign: { success: false, error: error.message } }));
    }
  };

  const handleDeleteCampaign = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteCampaign(getCampaignForm.id, token);
      setResponses(prev => ({ ...prev, deleteCampaign: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, deleteCampaign: { success: false, error: error.message } }));
    }
  };

  // Helper function to render form field
  const renderField = (label, value, onChange, type = 'text', required = false, placeholder = '') => (
    <div className="form-group">
      <label>{label} {required && '*'}</label>
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

  return (
    <div className="api-testing-page">
      <div className="container">
        <div className="header">
          <h1>🎯 Campaign APIs Testing</h1>
          <div className="token-info">
            <span>Token: {token.substring(0, 20)}...</span>
            <button onClick={() => window.history.back()} className="btn btn-secondary">Back to Dashboard</button>
          </div>
        </div>

        <div className="forms-grid">
          {/* GET All Campaigns */}
          <div className="form-section">
            <h2>GET /api/Compaign</h2>
            <p className="api-description">Get all campaigns</p>
            <form onSubmit={handleGetAllCampaigns}>
              <button type="submit" className="btn btn-primary">Get All Campaigns</button>
            </form>
            {responses.getAllCampaigns && (
              <div className={`response ${responses.getAllCampaigns.success ? 'success' : 'error'}`}>
                {responses.getAllCampaigns.success ? 'Success!' : `Error: ${responses.getAllCampaigns.error}`}
                {responses.getAllCampaigns.data && (
                  <pre className="response-data">{JSON.stringify(responses.getAllCampaigns.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* GET Campaign by ID */}
          <div className="form-section">
            <h2>GET /api/Compaig/{'{id}'}</h2>
            <p className="api-description">Get campaign by ID</p>
            <form onSubmit={handleGetCampaignById}>
              {renderField('Campaign ID', getCampaignForm.id, (e) => setGetCampaignForm(prev => ({ ...prev, id: e.target.value })), 'text', true)}
              <button type="submit" className="btn btn-primary">Get Campaign by ID</button>
            </form>
            {responses.getCampaignById && (
              <div className={`response ${responses.getCampaignById.success ? 'success' : 'error'}`}>
                {responses.getCampaignById.success ? 'Success!' : `Error: ${responses.getCampaignById.error}`}
                {responses.getCampaignById.data && (
                  <pre className="response-data">{JSON.stringify(responses.getCampaignById.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Create Campaign */}
          <div className="form-section">
            <h2>POST /api/Compaign</h2>
            <p className="api-description">Create new campaign with FormData support</p>
            <form onSubmit={handleCreateCampaign} encType="multipart/form-data">
              {renderField('ID', campaignForm.Id, (e) => setCampaignForm(prev => ({ ...prev, Id: e.target.value })))}
              {renderField('Name', campaignForm.Name, (e) => setCampaignForm(prev => ({ ...prev, Name: e.target.value })), 'text', true)}
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={campaignForm.Description}
                  onChange={(e) => setCampaignForm(prev => ({ ...prev, Description: e.target.value }))}
                  className="form-control"
                  rows="3"
                />
              </div>
              
              {renderField('Required Amount', campaignForm.RequiredAmount, (e) => setCampaignForm(prev => ({ ...prev, RequiredAmount: parseFloat(e.target.value) })), 'number')}
              {renderField('Raised Amount', campaignForm.RaisedAmount, (e) => setCampaignForm(prev => ({ ...prev, RaisedAmount: parseFloat(e.target.value) })), 'number')}
              {renderField('Start Date', campaignForm.StartDate, (e) => setCampaignForm(prev => ({ ...prev, StartDate: e.target.value })), 'datetime-local')}
              {renderField('End Date', campaignForm.EndDate, (e) => setCampaignForm(prev => ({ ...prev, EndDate: e.target.value })), 'datetime-local')}
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={campaignForm.Status}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, Status: e.target.checked }))}
                  />
                  Status
                </label>
              </div>
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={campaignForm.IsCompaignDeleted}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, IsCompaignDeleted: e.target.checked }))}
                  />
                  Is Campaign Deleted
                </label>
              </div>
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={campaignForm.isCompaignLaunch}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, isCompaignLaunch: e.target.checked }))}
                  />
                  Is Campaign Launch
                </label>
              </div>
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={campaignForm.IsApproved}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, IsApproved: e.target.checked }))}
                  />
                  Is Approved
                </label>
              </div>
              
              {renderField('Assigned To ID', campaignForm.AssignedToId, (e) => setCampaignForm(prev => ({ ...prev, AssignedToId: e.target.value })))}
              {renderField('Assigned To Name', campaignForm.AssignedToName, (e) => setCampaignForm(prev => ({ ...prev, AssignedToName: e.target.value })))}
              {renderField('Created By Name', campaignForm.CreatedByName, (e) => setCampaignForm(prev => ({ ...prev, CreatedByName: e.target.value })), 'text', true)}
              {renderField('Updated By Name', campaignForm.UpdatedByName, (e) => setCampaignForm(prev => ({ ...prev, UpdatedByName: e.target.value })), 'text', true)}
              
              <div className="form-group">
                <label>Upload Images</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setCampaignForm(prev => ({ ...prev, UploadImages: files }));
                  }}
                  className="form-control"
                />
                <small className="form-text">Select multiple image files</small>
              </div>
              
              {renderField('Image Paths', campaignForm.ImagePaths, (e) => setCampaignForm(prev => ({ ...prev, ImagePaths: e.target.value })), 'text', true, 'Enter comma-separated image paths')}
              {renderField('Product IDs', campaignForm.ProductIds, (e) => setCampaignForm(prev => ({ ...prev, ProductIds: e.target.value })), 'text', true, 'Enter comma-separated product IDs')}
              {renderField('Group IDs', campaignForm.GroupIds, (e) => setCampaignForm(prev => ({ ...prev, GroupIds: e.target.value })), 'text', true, 'Enter comma-separated group IDs')}
              {renderField('Organizer IDs', campaignForm.OrganizerIds, (e) => setCampaignForm(prev => ({ ...prev, OrganizerIds: e.target.value })), 'text', true, 'Enter comma-separated organizer IDs')}
              
              <button type="submit" className="btn btn-primary">Create Campaign</button>
              
              {/* Debug button to test FormData creation */}
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => {
                  const formData = new FormData();
                  Object.keys(campaignForm).forEach((key) => {
                    if (key === "UploadImages" && Array.isArray(campaignForm[key])) {
                      campaignForm[key].forEach((file) => {
                        formData.append("UploadImages", file);
                      });
                    } else if (key === "ImagePaths" && typeof campaignForm[key] === 'string') {
                      const paths = campaignForm[key].split(',').map(path => path.trim()).filter(path => path);
                      paths.forEach(path => {
                        formData.append("ImagePaths", path);
                      });
                    } else if (key === "ProductIds" && typeof campaignForm[key] === 'string') {
                      const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
                      ids.forEach(id => {
                        formData.append("ProductIds", parseInt(id));
                      });
                    } else if (key === "GroupIds" && typeof campaignForm[key] === 'string') {
                      const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
                      ids.forEach(id => {
                        formData.append("GroupIds", parseInt(id));
                      });
                    } else if (key === "OrganizerIds" && typeof campaignForm[key] === 'string') {
                      const ids = campaignForm[key].split(',').map(id => id.trim()).filter(id => id);
                      ids.forEach(id => {
                        formData.append("OrganizerIds", id);
                      });
                    } else if (Array.isArray(campaignForm[key])) {
                      formData.append(key, JSON.stringify(campaignForm[key]));
                    } else {
                      formData.append(key, campaignForm[key]);
                    }
                  });

                  if (campaignForm.GroupIds) {
                    const groupIds = campaignForm.GroupIds.split(',').map(id => id.trim()).filter(id => id);
                    formData.append("CompaignGroups", JSON.stringify(groupIds));
                  }
                  
                  if (campaignForm.ProductIds) {
                    const productIds = campaignForm.ProductIds.split(',').map(id => id.trim()).filter(id => id);
                    formData.append("CompaignProducts", JSON.stringify(productIds));
                  }
                  
                  if (campaignForm.OrganizerIds) {
                    const organizerIds = campaignForm.OrganizerIds.split(',').map(id => id.trim()).filter(id => id);
                    formData.append("CompaignOrganizers", JSON.stringify(organizerIds));
                  }

                  console.log('Manual FormData test:');
                  for (let [key, value] of formData.entries()) {
                    console.log(`${key}:`, value);
                  }
                }}
              >
                Test FormData Creation
              </button>
            </form>
            {responses.createCampaign && (
              <div className={`response ${responses.createCampaign.success ? 'success' : 'error'}`}>
                {responses.createCampaign.success ? 'Success!' : `Error: ${responses.createCampaign.error}`}
                {responses.createCampaign.data && (
                  <pre className="response-data">{JSON.stringify(responses.createCampaign.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* PUT Update Campaign */}
          <div className="form-section">
            <h2>PUT /api/Compaig/{'{id}'}</h2>
            <p className="api-description">Update campaign by ID with FormData support</p>
            <form onSubmit={handleUpdateCampaign} encType="multipart/form-data">
              {renderField('Campaign ID', getCampaignForm.id, (e) => setGetCampaignForm(prev => ({ ...prev, id: e.target.value })), 'text', true)}
              {renderField('Name', campaignForm.Name, (e) => setCampaignForm(prev => ({ ...prev, Name: e.target.value })), 'text', true)}
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={campaignForm.Description}
                  onChange={(e) => setCampaignForm(prev => ({ ...prev, Description: e.target.value }))}
                  className="form-control"
                  rows="3"
                />
              </div>
              
              {renderField('Required Amount', campaignForm.RequiredAmount, (e) => setCampaignForm(prev => ({ ...prev, RequiredAmount: parseFloat(e.target.value) })), 'number')}
              {renderField('Raised Amount', campaignForm.RaisedAmount, (e) => setCampaignForm(prev => ({ ...prev, RaisedAmount: parseFloat(e.target.value) })), 'number')}
              {renderField('Start Date', campaignForm.StartDate, (e) => setCampaignForm(prev => ({ ...prev, StartDate: e.target.value })), 'datetime-local')}
              {renderField('End Date', campaignForm.EndDate, (e) => setCampaignForm(prev => ({ ...prev, EndDate: e.target.value })), 'datetime-local')}
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={campaignForm.Status}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, Status: e.target.checked }))}
                  />
                  Status
                </label>
              </div>
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={campaignForm.IsCompaignDeleted}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, IsCompaignDeleted: e.target.checked }))}
                  />
                  Is Campaign Deleted
                </label>
              </div>
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={campaignForm.isCompaignLaunch}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, isCompaignLaunch: e.target.checked }))}
                  />
                  Is Campaign Launch
                </label>
              </div>
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={campaignForm.IsApproved}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, IsApproved: e.target.checked }))}
                  />
                  Is Approved
                </label>
              </div>
              
              {renderField('Assigned To ID', campaignForm.AssignedToId, (e) => setCampaignForm(prev => ({ ...prev, AssignedToId: e.target.value })))}
              {renderField('Assigned To Name', campaignForm.AssignedToName, (e) => setCampaignForm(prev => ({ ...prev, AssignedToName: e.target.value })))}
              {renderField('Created By Name', campaignForm.CreatedByName, (e) => setCampaignForm(prev => ({ ...prev, CreatedByName: e.target.value })), 'text', true)}
              {renderField('Updated By Name', campaignForm.UpdatedByName, (e) => setCampaignForm(prev => ({ ...prev, UpdatedByName: e.target.value })), 'text', true)}
              
              <div className="form-group">
                <label>Upload Images</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setCampaignForm(prev => ({ ...prev, UploadImages: files }));
                  }}
                  className="form-control"
                />
                <small className="form-text">Select multiple image files</small>
              </div>
              
              {renderField('Image Paths', campaignForm.ImagePaths, (e) => setCampaignForm(prev => ({ ...prev, ImagePaths: e.target.value })), 'text', true, 'Enter comma-separated image paths')}
              {renderField('Product IDs', campaignForm.ProductIds, (e) => setCampaignForm(prev => ({ ...prev, ProductIds: e.target.value })), 'text', true, 'Enter comma-separated product IDs')}
              {renderField('Group IDs', campaignForm.GroupIds, (e) => setCampaignForm(prev => ({ ...prev, GroupIds: e.target.value })), 'text', true, 'Enter comma-separated group IDs')}
              {renderField('Organizer IDs', campaignForm.OrganizerIds, (e) => setCampaignForm(prev => ({ ...prev, OrganizerIds: e.target.value })), 'text', true, 'Enter comma-separated organizer IDs')}
              
              <button type="submit" className="btn btn-primary">Update Campaign</button>
            </form>
            {responses.updateCampaign && (
              <div className={`response ${responses.updateCampaign.success ? 'success' : 'error'}`}>
                {responses.updateCampaign.success ? 'Success!' : `Error: ${responses.updateCampaign.error}`}
                {responses.updateCampaign.data && (
                  <pre className="response-data">{JSON.stringify(responses.updateCampaign.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* DELETE Campaign */}
          <div className="form-section">
            <h2>DELETE /api/Compaig/{'{id}'}</h2>
            <p className="api-description">Delete campaign by ID</p>
            <form onSubmit={handleDeleteCampaign}>
              {renderField('Campaign ID', getCampaignForm.id, (e) => setGetCampaignForm(prev => ({ ...prev, id: e.target.value })), 'text', true)}
              <button type="submit" className="btn btn-danger">Delete Campaign</button>
            </form>
            {responses.deleteCampaign && (
              <div className={`response ${responses.deleteCampaign.success ? 'success' : 'error'}`}>
                {responses.deleteCampaign.success ? 'Success!' : `Error: ${responses.deleteCampaign.error}`}
                {responses.deleteCampaign.data && (
                  <pre className="response-data">{JSON.stringify(responses.deleteCampaign.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignAPIsPage; 