import React, { useState } from 'react';
import { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../../../api/Product/Porduct';
import './style.css';

const ProductAPIsPage = ({ token }) => {
  const [productForm, setProductForm] = useState({
    Id: '',
    Name: '',
    Description: '',
    Status: 1,
    RegularPrice: '',
    ProfitMargin: '',
    PurchaseQuantity: '',
    SaleQuantity: '',
    IsSinglePurchase: false,
    ApprovalStatus: 1,
    IsDeleted: false,
    CreatedDate: new Date().toISOString(),
    CreatedByName: '',
    UpdatedDate: new Date().toISOString(),
    UpdatedByName: '',
    UploadImages: [],
    ImagePaths: '',
    CategoryIds: 1,
    CategoryDetails: []
  });

  const [getProductForm, setGetProductForm] = useState({
    id: ''
  });

  const [responses, setResponses] = useState({});

  // Handle form submissions
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append all product fields to FormData
      Object.keys(productForm).forEach((key) => {
        if (key === "UploadImages" && Array.isArray(productForm[key])) {
          // Handle multiple image files
          productForm[key].forEach((file) => {
            formData.append("UploadImages", file);
          });
        } else if (key === "ImagePaths" && typeof productForm[key] === 'string') {
          // Handle ImagePaths as comma-separated string
          const paths = productForm[key].split(',').map(path => path.trim()).filter(path => path);
          paths.forEach(path => {
            formData.append("ImagePaths", path);
          });
        } else if (key === "CategoryIds" && typeof productForm[key] === 'string') {
          // Handle CategoryIds as comma-separated string
          const ids = productForm[key].split(',').map(id => id.trim()).filter(id => id);
          ids.forEach(id => {
            formData.append("CategoryIds", parseInt(id));
          });
        } else if (Array.isArray(productForm[key])) {
          // Handle other array fields by converting to JSON string
          formData.append(key, JSON.stringify(productForm[key]));
        } else {
          formData.append(key, productForm[key]);
        }
      });

      const response = await createProduct(formData, token);
      setResponses(prev => ({ ...prev, createProduct: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, createProduct: { success: false, error: error.message } }));
    }
  };

  const handleGetAllProducts = async (e) => {
    e.preventDefault();
    try {
      const response = await getAllProducts(token);
      setResponses(prev => ({ ...prev, getAllProducts: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, getAllProducts: { success: false, error: error.message } }));
    }
  };

  const handleGetProductById = async (e) => {
    e.preventDefault();
    try {
      const response = await getProductById(getProductForm.id, token);
      setResponses(prev => ({ ...prev, getProductById: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, getProductById: { success: false, error: error.message } }));
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append all product fields to FormData
      Object.keys(productForm).forEach((key) => {
        if (key === "UploadImages" && Array.isArray(productForm[key])) {
          // Handle multiple image files
          productForm[key].forEach((file) => {
            formData.append("UploadImages", file);
          });
        } else if (key === "ImagePaths" && typeof productForm[key] === 'string') {
          // Handle ImagePaths as comma-separated string
          const paths = productForm[key].split(',').map(path => path.trim()).filter(path => path);
          paths.forEach(path => {
            formData.append("ImagePaths", path);
          });
        } else if (key === "CategoryIds" && typeof productForm[key] === 'string') {
          // Handle CategoryIds as comma-separated string
          const ids = productForm[key].split(',').map(id => id.trim()).filter(id => id);
          ids.forEach(id => {
            formData.append("CategoryIds", parseInt(id));
          });
        } else if (Array.isArray(productForm[key])) {
          // Handle other array fields by converting to JSON string
          formData.append(key, JSON.stringify(productForm[key]));
        } else {
          formData.append(key, productForm[key]);
        }
      });

      const response = await updateProduct(getProductForm.id, formData, token);
      setResponses(prev => ({ ...prev, updateProduct: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, updateProduct: { success: false, error: error.message } }));
    }
  };

  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteProduct(getProductForm.id, token);
      setResponses(prev => ({ ...prev, deleteProduct: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, deleteProduct: { success: false, error: error.message } }));
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
          <h1>📦 Product APIs Testing</h1>
          <div className="token-info">
            <span>Token: {token.substring(0, 20)}...</span>
            <button onClick={() => window.history.back()} className="btn btn-secondary">Back to Dashboard</button>
          </div>
        </div>

        <div className="forms-grid">
          {/* GET All Products */}
          <div className="form-section">
            <h2>GET /api/Product</h2>
            <p className="api-description">Get all products</p>
            <form onSubmit={handleGetAllProducts}>
              <button type="submit" className="btn btn-primary">Get All Products</button>
            </form>
            {responses.getAllProducts && (
              <div className={`response ${responses.getAllProducts.success ? 'success' : 'error'}`}>
                {responses.getAllProducts.success ? 'Success!' : `Error: ${responses.getAllProducts.error}`}
                {responses.getAllProducts.data && (
                  <pre className="response-data">{JSON.stringify(responses.getAllProducts.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* GET Product by ID */}
          <div className="form-section">
            <h2>GET /api/Product/{'{id}'}</h2>
            <p className="api-description">Get product by ID</p>
            <form onSubmit={handleGetProductById}>
              {renderField('Product ID', getProductForm.id, (e) => setGetProductForm(prev => ({ ...prev, id: e.target.value })), 'text', true)}
              <button type="submit" className="btn btn-primary">Get Product by ID</button>
            </form>
            {responses.getProductById && (
              <div className={`response ${responses.getProductById.success ? 'success' : 'error'}`}>
                {responses.getProductById.success ? 'Success!' : `Error: ${responses.getProductById.error}`}
                {responses.getProductById.data && (
                  <pre className="response-data">{JSON.stringify(responses.getProductById.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Create Product */}
          <div className="form-section">
            <h2>POST /api/Product</h2>
            <p className="api-description">Create new product with FormData support</p>
            <form onSubmit={handleCreateProduct}>
              {renderField('ID', productForm.Id, (e) => setProductForm(prev => ({ ...prev, Id: e.target.value })))}
              {renderField('Name', productForm.Name, (e) => setProductForm(prev => ({ ...prev, Name: e.target.value })), 'text', true)}
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={productForm.Description}
                  onChange={(e) => setProductForm(prev => ({ ...prev, Description: e.target.value }))}
                  className="form-control"
                  rows="3"
                />
              </div>
              
              {renderField('Status', productForm.Status, (e) => setProductForm(prev => ({ ...prev, Status: parseInt(e.target.value) })), 'number')}
              {renderField('Regular Price', productForm.RegularPrice, (e) => setProductForm(prev => ({ ...prev, RegularPrice: parseFloat(e.target.value) })), 'number')}
              {renderField('Profit Margin', productForm.ProfitMargin, (e) => setProductForm(prev => ({ ...prev, ProfitMargin: parseFloat(e.target.value) })), 'number')}
              {renderField('Purchase Quantity', productForm.PurchaseQuantity, (e) => setProductForm(prev => ({ ...prev, PurchaseQuantity: parseInt(e.target.value) })), 'number')}
              {renderField('Sale Quantity', productForm.SaleQuantity, (e) => setProductForm(prev => ({ ...prev, SaleQuantity: parseInt(e.target.value) })), 'number')}
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={productForm.IsSinglePurchase}
                    onChange={(e) => setProductForm(prev => ({ ...prev, IsSinglePurchase: e.target.checked }))}
                  />
                  Is Single Purchase
                </label>
              </div>
              
              {renderField('Approval Status', productForm.ApprovalStatus, (e) => setProductForm(prev => ({ ...prev, ApprovalStatus: parseInt(e.target.value) })), 'number')}
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={productForm.IsDeleted}
                    onChange={(e) => setProductForm(prev => ({ ...prev, IsDeleted: e.target.checked }))}
                  />
                  Is Deleted
                </label>
              </div>
              
              {renderField('Created By Name', productForm.CreatedByName, (e) => setProductForm(prev => ({ ...prev, CreatedByName: e.target.value })), 'text')}
              {renderField('Updated By Name', productForm.UpdatedByName, (e) => setProductForm(prev => ({ ...prev, UpdatedByName: e.target.value })), 'text')}
              
              <div className="form-group">
                <label>Upload Images</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setProductForm(prev => ({ ...prev, UploadImages: files }));
                  }}
                  className="form-control"
                />
                <small className="form-text">Select multiple image files</small>
              </div>
              
              {renderField('Image Paths', productForm.ImagePaths, (e) => setProductForm(prev => ({ ...prev, ImagePaths: e.target.value })), 'text', false, 'Enter comma-separated image paths')}
              {renderField('Category IDs', productForm.CategoryIds, (e) => setProductForm(prev => ({ ...prev, CategoryIds: e.target.value })), 'text', false, 'Enter comma-separated category IDs')}
              
              <button type="submit" className="btn btn-primary">Create Product</button>
            </form>
            {responses.createProduct && (
              <div className={`response ${responses.createProduct.success ? 'success' : 'error'}`}>
                {responses.createProduct.success ? 'Success!' : `Error: ${responses.createProduct.error}`}
                {responses.createProduct.data && (
                  <pre className="response-data">{JSON.stringify(responses.createProduct.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* PUT Update Product */}
          <div className="form-section">
            <h2>PUT /api/Product/{'{id}'}</h2>
            <p className="api-description">Update product by ID with FormData support</p>
            <form onSubmit={handleUpdateProduct}>
              {renderField('Product ID', getProductForm.id, (e) => setGetProductForm(prev => ({ ...prev, id: e.target.value })), 'text', true)}
              {renderField('Name', productForm.Name, (e) => setProductForm(prev => ({ ...prev, Name: e.target.value })), 'text', true)}
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={productForm.Description}
                  onChange={(e) => setProductForm(prev => ({ ...prev, Description: e.target.value }))}
                  className="form-control"
                  rows="3"
                />
              </div>
              
              {renderField('Status', productForm.Status, (e) => setProductForm(prev => ({ ...prev, Status: parseInt(e.target.value) })), 'number')}
              {renderField('Regular Price', productForm.RegularPrice, (e) => setProductForm(prev => ({ ...prev, RegularPrice: parseFloat(e.target.value) })), 'number')}
              {renderField('Profit Margin', productForm.ProfitMargin, (e) => setProductForm(prev => ({ ...prev, ProfitMargin: parseFloat(e.target.value) })), 'number')}
              {renderField('Purchase Quantity', productForm.PurchaseQuantity, (e) => setProductForm(prev => ({ ...prev, PurchaseQuantity: parseInt(e.target.value) })), 'number')}
              {renderField('Sale Quantity', productForm.SaleQuantity, (e) => setProductForm(prev => ({ ...prev, SaleQuantity: parseInt(e.target.value) })), 'number')}
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={productForm.IsSinglePurchase}
                    onChange={(e) => setProductForm(prev => ({ ...prev, IsSinglePurchase: e.target.checked }))}
                  />
                  Is Single Purchase
                </label>
              </div>
              
              {renderField('Approval Status', productForm.ApprovalStatus, (e) => setProductForm(prev => ({ ...prev, ApprovalStatus: parseInt(e.target.value) })), 'number')}
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={productForm.IsDeleted}
                    onChange={(e) => setProductForm(prev => ({ ...prev, IsDeleted: e.target.checked }))}
                  />
                  Is Deleted
                </label>
              </div>
              
              {renderField('Created By Name', productForm.CreatedByName, (e) => setProductForm(prev => ({ ...prev, CreatedByName: e.target.value })), 'text')}
              {renderField('Updated By Name', productForm.UpdatedByName, (e) => setProductForm(prev => ({ ...prev, UpdatedByName: e.target.value })), 'text')}
              
              <div className="form-group">
                <label>Upload Images</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setProductForm(prev => ({ ...prev, UploadImages: files }));
                  }}
                  className="form-control"
                />
                <small className="form-text">Select multiple image files</small>
              </div>
              
              {renderField('Image Paths', productForm.ImagePaths, (e) => setProductForm(prev => ({ ...prev, ImagePaths: e.target.value })), 'text', false, 'Enter comma-separated image paths')}
              {renderField('Category IDs', productForm.CategoryIds, (e) => setProductForm(prev => ({ ...prev, CategoryIds: e.target.value })), 'text', false, 'Enter comma-separated category IDs')}
              
              <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
            {responses.updateProduct && (
              <div className={`response ${responses.updateProduct.success ? 'success' : 'error'}`}>
                {responses.updateProduct.success ? 'Success!' : `Error: ${responses.updateProduct.error}`}
                {responses.updateProduct.data && (
                  <pre className="response-data">{JSON.stringify(responses.updateProduct.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* DELETE Product */}
          <div className="form-section">
            <h2>DELETE /api/Product/{'{id}'}</h2>
            <p className="api-description">Delete product by ID</p>
            <form onSubmit={handleDeleteProduct}>
              {renderField('Product ID', getProductForm.id, (e) => setGetProductForm(prev => ({ ...prev, id: e.target.value })), 'text', true)}
              <button type="submit" className="btn btn-danger">Delete Product</button>
            </form>
            {responses.deleteProduct && (
              <div className={`response ${responses.deleteProduct.success ? 'success' : 'error'}`}>
                {responses.deleteProduct.success ? 'Success!' : `Error: ${responses.deleteProduct.error}`}
                {responses.deleteProduct.data && (
                  <pre className="response-data">{JSON.stringify(responses.deleteProduct.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAPIsPage; 