import { login, getOrganizers } from './Auth/Auth';
import { getCart, addToCart, removeFromCart, clearCart } from './Cart/Cart';
import { getCheckout, processCheckout, removeFromCheckout, clearCheckout } from './Checkout/Checkout';
import { getAllGroups, createGroup, getGroupById, updateGroup, deleteGroup } from './Group/Group';
import { createOrder, createCheckoutSession } from './Order/Order';
import { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } from './Product/Porduct';
import { getAllCampaigns, createCampaign, getCampaignById, updateCampaign, deleteCampaign } from './Campaign/Campaign';

// Test configuration
const TEST_CONFIG = {
  email: "bilaltest@gmail.com",
  password: "Password@123",
  baseUrl: process.env.REACT_APP_BASE_URL || "http://192.169.177.4/"
};

// Test data
const TEST_DATA = {
  cart: {
    cartKey: "test-cart-123",
    userId: "test-user-456"
  },
  group: {
    Id: 1,
    Name: "Test Group",
    Description: "A test group for API testing",
    LogoPath: "/images/test-logo.png",
    Status: 1,
    isApproved: true,
    isDraft: false,
    CreatedDate: new Date().toISOString(),
    CreatedByName: "Test User",
    UpdatedDate: new Date().toISOString(),
    UpdatedByName: "Test User",
    UploadImage: "base64-encoded-image",
    GroupMembers: []
  },
  product: {
    Id: 1,
    Name: "Test Product",
    Description: "A test product for API testing",
    Status: 1,
    RegularPrice: 99.99,
    ProfitMargin: 20.0,
    PurchaseQuantity: 100,
    SaleQuantity: 50,
    IsSinglePurchase: false,
    ApprovalStatus: 1,
    IsDeleted: false,
    CreatedDate: new Date().toISOString(),
    CreatedByName: "Test User",
    UpdatedDate: new Date().toISOString(),
    UpdatedByName: "Test User",
    UploadImages: [],
    ImagePaths: ["/images/test-product.jpg"],
    CategoryIds: [1, 2],
    CategoryDetails: []
  },
  campaign: {
    Id: 1,
    Name: "Test Campaign",
    Description: "A test campaign for API testing",
    RequiredAmount: 5000.0,
    RaisedAmount: 1000.0,
    StartDate: new Date().toISOString(),
    EndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    Status: true,
    IsCompaignDeleted: false,
    isCompaignLaunch: true,
    IsApproved: true,
    AssignedToId: "test-user-123",
    AssignedToName: "Test User",
    CreatedDate: new Date().toISOString(),
    CreatedByName: "Test User",
    UpdatedDate: new Date().toISOString(),
    UpdatedByName: "Test User",
    UploadImages: [],
    ImagePaths: ["/images/test-campaign.jpg"],
    ProductIds: [1, 2],
    GroupIds: [1],
    OrganizerIds: ["org1"],
    CompaignProducts: [],
    CompaignGroups: [],
    CompaignOrganizers: []
  },
  order: {
    userId: "test-user-456",
    cartKey: "test-cart-123",
    shippingAddress: {
      fullName: "Test User",
      addressLine1: "123 Test Street",
      addressLine2: "Apt 1",
      city: "Test City",
      state: "TS",
      postalCode: "12345",
      country: "Test Country"
    }
  }
};

// Utility function to log test results
const logTest = (testName, success, data = null, error = null) => {
  const status = success ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} ${testName}`);
  if (data) console.log('Data:', data);
  if (error) console.log('Error:', error);
  console.log('---');
  return success;
};

// Test Authentication
const testAuthentication = async () => {
  try {
    console.log('🔐 Testing Authentication...');
    const loginData = await login({
      email: TEST_CONFIG.email,
      password: TEST_CONFIG.password
    });

    console.log("loginData", loginData);
    
    if (loginData && loginData.data.token) {
      logTest('Login', true, { token: loginData.data.token.substring(0, 20) + '...' });
      
      // Test getOrganizers after successful login
      try {
        console.log('👥 Testing GetOrganizers...');
        const organizersData = await getOrganizers(loginData.data.token);
        if (organizersData?.data && organizersData.data.length > 0) {
          const firstOrganizer = organizersData.data[0];
          logTest('GetOrganizers', true, { 
            count: organizersData.data.length,
            firstOrganizer: { id: firstOrganizer.id, name: firstOrganizer.name }
          });
          
          // Store organizer info for later use
          TEST_DATA.campaign.AssignedToId = firstOrganizer.id;
          TEST_DATA.campaign.AssignedToName = firstOrganizer.name;
        } else {
          logTest('GetOrganizers', false, null, 'No organizers data received');
        }
      } catch (organizerError) {
        logTest('GetOrganizers', false, null, organizerError.message);
      }
      
      return loginData.data.token;
    } else {
      logTest('Login', false, null, 'No token received');
      return null;
    }
  } catch (error) {
    logTest('Login', false, null, error.message);
    return null;
  }
};

// Test Cart APIs
const testCartAPIs = async (token) => {
  if (!token) return false;
  
  console.log('🛒 Testing Cart APIs...');
  let success = true;
  
  try {
    // Test getCart
    const cart = await getCart(TEST_DATA.cart.cartKey, TEST_DATA.cart.userId, token);
    success &= logTest('Get Cart', true, cart);
  } catch (error) {
    success &= logTest('Get Cart', false, null, error.message);
  }
  
  try {
    // Test addToCart
    const cartData = {
      Id: 1,
      UserId: TEST_DATA.cart.userId,
      CartKey: TEST_DATA.cart.cartKey,
      UserName: "Test User",
      ProductId: 1,
      Quantity: 2,
      CartItems: []
    };
    const addResult = await addToCart(cartData, token);
    success &= logTest('Add to Cart', true, addResult);
  } catch (error) {
    success &= logTest('Add to Cart', false, null, error.message);
  }
  
  try {
    // Test removeFromCart
    const removeResult = await removeFromCart(TEST_DATA.cart.cartKey, TEST_DATA.cart.userId, 1, token);
    success &= logTest('Remove from Cart', true, removeResult);
  } catch (error) {
    success &= logTest('Remove from Cart', false, null, error.message);
  }
  
  try {
    // Test clearCart
    const clearResult = await clearCart(TEST_DATA.cart.cartKey, TEST_DATA.cart.userId, 1, token);
    success &= logTest('Clear Cart', true, clearResult);
  } catch (error) {
    success &= logTest('Clear Cart', false, null, error.message);
  }
  
  return success;
};

// Test Checkout APIs
const testCheckoutAPIs = async (token) => {
  if (!token) return false;
  
  console.log('💳 Testing Checkout APIs...');
  let success = true;
  
  try {
    // Test getCheckout
    const checkout = await getCheckout(TEST_DATA.cart.cartKey, token);
    success &= logTest('Get Checkout', true, checkout);
  } catch (error) {
    success &= logTest('Get Checkout', false, null, error.message);
  }
  
  try {
    // Test processCheckout
    const checkoutResult = await processCheckout(TEST_DATA.order, token);
    success &= logTest('Process Checkout', true, checkoutResult);
  } catch (error) {
    success &= logTest('Process Checkout', false, null, error.message);
  }
  
  try {
    // Test removeFromCheckout
    const removeResult = await removeFromCheckout(TEST_DATA.cart.cartKey, 1, token);
    success &= logTest('Remove from Checkout', true, removeResult);
  } catch (error) {
    success &= logTest('Remove from Checkout', false, null, error.message);
  }
  
  try {
    // Test clearCheckout
    const clearResult = await clearCheckout(TEST_DATA.cart.cartKey, token);
    success &= logTest('Clear Checkout', true, clearResult);
  } catch (error) {
    success &= logTest('Clear Checkout', false, null, error.message);
  }
  
  return success;
};

// Test Group APIs
const testGroupAPIs = async (token) => {
  if (!token) return false;
  
  console.log('👥 Testing Group APIs...');
  let success = true;
  
  try {
    // Test getAllGroups
    const groups = await getAllGroups(token);
    success &= logTest('Get All Groups', true, groups);
  } catch (error) {
    success &= logTest('Get All Groups', false, null, error.message);
  }
  
  try {
    // Test createGroup
    const newGroup = await createGroup(TEST_DATA.group, token);
    success &= logTest('Create Group', true, newGroup);
    
    // Store the created group ID for later tests
    if (newGroup && newGroup.id) {
      TEST_DATA.group.Id = newGroup.id;
    }
  } catch (error) {
    success &= logTest('Create Group', false, null, error.message);
  }
  
  try {
    // Test getGroupById
    const group = await getGroupById(TEST_DATA.group.Id, token);
    success &= logTest('Get Group by ID', true, group);
  } catch (error) {
    success &= logTest('Get Group by ID', false, null, error.message);
  }
  
  try {
    // Test updateGroup
    const updatedGroup = { ...TEST_DATA.group, Name: "Updated Test Group" };
    const updateResult = await updateGroup(TEST_DATA.group.Id, updatedGroup, token);
    success &= logTest('Update Group', true, updateResult);
  } catch (error) {
    success &= logTest('Update Group', false, null, error.message);
  }
  
  try {
    // Test deleteGroup
    const deleteResult = await deleteGroup(TEST_DATA.group.Id, token);
    success &= logTest('Delete Group', true, deleteResult);
  } catch (error) {
    success &= logTest('Delete Group', false, null, error.message);
  }
  
  return success;
};

// Test Order APIs
const testOrderAPIs = async (token) => {
  if (!token) return false;
  
  console.log('📦 Testing Order APIs...');
  let success = true;
  
  try {
    // Test createOrder
    const order = await createOrder(TEST_DATA.order, token);
    success &= logTest('Create Order', true, order);
  } catch (error) {
    success &= logTest('Create Order', false, null, error.message);
  }
  
  try {
    // Test createCheckoutSession
    const checkoutSession = await createCheckoutSession(TEST_DATA.order, token);
    success &= logTest('Create Checkout Session', true, checkoutSession);
  } catch (error) {
    success &= logTest('Create Checkout Session', false, null, error.message);
  }
  
  return success;
};

// Test Product APIs
const testProductAPIs = async (token) => {
  if (!token) return false;
  
  console.log('📦 Testing Product APIs...');
  let success = true;
  
  try {
    // Test getAllProducts
    const products = await getAllProducts(token);
    success &= logTest('Get All Products', true, products);
  } catch (error) {
    success &= logTest('Get All Products', false, null, error.message);
  }
  
  try {
    // Test createProduct
    const newProduct = await createProduct(TEST_DATA.product, token);
    success &= logTest('Create Product', true, newProduct);
    
    // Store the created product ID for later tests
    if (newProduct && newProduct.id) {
      TEST_DATA.product.Id = newProduct.id;
    }
  } catch (error) {
    success &= logTest('Create Product', false, null, error.message);
  }
  
  try {
    // Test getProductById
    const product = await getProductById(TEST_DATA.product.Id, token);
    success &= logTest('Get Product by ID', true, product);
  } catch (error) {
    success &= logTest('Get Product by ID', false, null, error.message);
  }
  
  try {
    // Test updateProduct
    const updatedProduct = { ...TEST_DATA.product, Name: "Updated Test Product" };
    const updateResult = await updateProduct(TEST_DATA.product.Id, updatedProduct, token);
    success &= logTest('Update Product', true, updateResult);
  } catch (error) {
    success &= logTest('Update Product', false, null, error.message);
  }
  
  try {
    // Test deleteProduct
    const deleteResult = await deleteProduct(TEST_DATA.product.Id, token);
    success &= logTest('Delete Product', true, deleteResult);
  } catch (error) {
    success &= logTest('Delete Product', false, null, error.message);
  }
  
  return success;
};

// Test Campaign APIs
const testCampaignAPIs = async (token) => {
  if (!token) return false;
  
  console.log('🎯 Testing Campaign APIs...');
  let success = true;
  
  try {
    // Test getAllCampaigns
    const campaigns = await getAllCampaigns(token);
    success &= logTest('Get All Campaigns', true, campaigns);
  } catch (error) {
    success &= logTest('Get All Campaigns', false, null, error.message);
  }
  
  try {
    // Test createCampaign
    const newCampaign = await createCampaign(TEST_DATA.campaign, token);
    success &= logTest('Create Campaign', true, newCampaign);
    
    // Store the created campaign ID for later tests
    if (newCampaign && newCampaign.id) {
      TEST_DATA.campaign.Id = newCampaign.id;
    }
  } catch (error) {
    success &= logTest('Create Campaign', false, null, error.message);
  }
  
  try {
    // Test getCampaignById
    const campaign = await getCampaignById(TEST_DATA.campaign.Id, token);
    success &= logTest('Get Campaign by ID', true, campaign);
  } catch (error) {
    success &= logTest('Get Campaign by ID', false, null, error.message);
  }
  
  try {
    // Test updateCampaign
    const updatedCampaign = { ...TEST_DATA.campaign, Name: "Updated Test Campaign" };
    const updateResult = await updateCampaign(TEST_DATA.campaign.Id, updatedCampaign, token);
    success &= logTest('Update Campaign', true, updateResult);
  } catch (error) {
    success &= logTest('Update Campaign', false, null, error.message);
  }
  
  try {
    // Test deleteCampaign
    const deleteResult = await deleteCampaign(TEST_DATA.campaign.Id, token);
    success &= logTest('Delete Campaign', true, deleteResult);
  } catch (error) {
    success &= logTest('Delete Campaign', false, null, error.message);
  }
  
  return success;
};

// Main test runner
const runAllTests = async () => {
  console.log('🚀 Starting API Tests...');
  console.log(`Base URL: ${TEST_CONFIG.baseUrl}`);
  console.log(`Test User: ${TEST_CONFIG.email}`);
  console.log('=' * 50);
  
  let overallSuccess = true;
  
  // Test authentication first
  const token = await testAuthentication();
  
  if (token) {
    // Test all other APIs
    // overallSuccess &= await testCartAPIs(token);
    // overallSuccess &= await testCheckoutAPIs(token);
    // overallSuccess &= await testGroupAPIs(token);
    // overallSuccess &= await testOrderAPIs(token);
    // overallSuccess &= await testProductAPIs(token);
    overallSuccess &= await testCampaignAPIs(token);
  } else {
    overallSuccess = false;
  }
  
  console.log('=' * 50);
  if (overallSuccess) {
    console.log('🎉 All tests completed successfully!');
  } else {
    console.log('⚠️  Some tests failed. Check the logs above for details.');
  }
  
  return overallSuccess;
};

// Export the test runner and individual test functions
export {
  runAllTests,
  testAuthentication,
  testCartAPIs,
  testCheckoutAPIs,
  testGroupAPIs,
  testOrderAPIs,
  testProductAPIs,
  testCampaignAPIs
};

// Auto-run tests if this file is executed directly
if (typeof window !== 'undefined') {
  // Browser environment - add to window for console access
  window.runAllTests = runAllTests;
  window.testAPIs = {
    testAuthentication,
    testCartAPIs,
    testCheckoutAPIs,
    testGroupAPIs,
    testOrderAPIs,
    testProductAPIs,
    testCampaignAPIs
  };
  
  // Add getOrganizers to window for direct testing
  window.getOrganizers = getOrganizers;
  
  console.log('🧪 API Test functions loaded!');
  console.log('Run "runAllTests()" in the console to test all APIs');
  console.log('Or run individual tests like "testCartAPIs(token)"');
} 