const axios = require('axios');

console.log('🧪 Testing ShivNursery Authentication Setup...\n');

// Test 1: Check if backend server is running
async function testBackend() {
  try {
    console.log('1. Testing backend server...');
    const response = await axios.get('http://localhost:5000/', { timeout: 5000 });
    console.log('✅ Backend server is running');
    console.log(`   Response: ${response.data.message}\n`);
    return true;
  } catch (error) {
    console.log('❌ Backend server not running');
    console.log('   Please start the backend server with: cd backend && npm start\n');
    return false;
  }
}

// Test 2: Check if we can register a test user
async function testRegistration() {
  try {
    console.log('2. Testing user registration...');
    const testUser = {
      username: 'testuser123',
      email: 'test@shivnursery.com',
      password: 'testpass123',
      confirmPassword: 'testpass123'
    };
    
    const response = await axios.post('http://localhost:5000/api/register', testUser, { timeout: 5000 });
    console.log('✅ User registration works');
    console.log(`   Response: ${response.data.message}\n`);
    return true;
  } catch (error) {
    if (error.response && error.response.data.message.includes('already exists')) {
      console.log('✅ User registration works (test user already exists)');
      console.log(`   Response: ${error.response.data.message}\n`);
      return true;
    }
    console.log('❌ User registration failed');
    console.log(`   Error: ${error.response?.data?.message || error.message}\n`);
    return false;
  }
}

// Test 3: Check if we can login
async function testLogin() {
  try {
    console.log('3. Testing user login...');
    const credentials = {
      username: 'testuser123',
      password: 'testpass123'
    };
    
    const response = await axios.post('http://localhost:5000/api/login', credentials, { timeout: 5000 });
    console.log('✅ User login works');
    console.log(`   Response: ${response.data.message}`);
    console.log(`   Token received: ${response.data.token ? 'Yes' : 'No'}\n`);
    return response.data.token;
  } catch (error) {
    console.log('❌ User login failed');
    console.log(`   Error: ${error.response?.data?.message || error.message}\n`);
    return null;
  }
}

// Test 4: Check if protected routes work
async function testProtectedRoute(token) {
  if (!token) {
    console.log('4. Skipping protected route test (no token available)\n');
    return false;
  }
  
  try {
    console.log('4. Testing protected route...');
    const response = await axios.get('http://localhost:5000/api/verify-token', {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 5000
    });
    console.log('✅ Protected route works');
    console.log(`   User: ${response.data.user.username}\n`);
    return true;
  } catch (error) {
    console.log('❌ Protected route failed');
    console.log(`   Error: ${error.response?.data?.message || error.message}\n`);
    return false;
  }
}

// Run all tests
async function runTests() {
  console.log('Starting integration tests...\n');
  
  const backendOk = await testBackend();
  if (!backendOk) {
    console.log('🛑 Backend server must be running to continue tests.');
    console.log('Start it with: cd backend && npm start');
    return;
  }
  
  const regOk = await testRegistration();
  const token = await testLogin();
  const protectedOk = await testProtectedRoute(token);
  
  console.log('📊 Test Results:');
  console.log(`   Backend Server: ${backendOk ? '✅' : '❌'}`);
  console.log(`   User Registration: ${regOk ? '✅' : '❌'}`);
  console.log(`   User Login: ${token ? '✅' : '❌'}`);
  console.log(`   Protected Routes: ${protectedOk ? '✅' : '❌'}\n`);
  
  if (backendOk && regOk && token && protectedOk) {
    console.log('🎉 All tests passed! Your ShivNursery authentication system is working perfectly!');
    console.log('\nNext steps:');
    console.log('1. Start the frontend: cd client && npm run dev');
    console.log('2. Open http://localhost:5173 in your browser');
    console.log('3. Register a new account and start using the app!');
  } else {
    console.log('⚠️  Some tests failed. Please check the issues above and fix them.');
  }
}

runTests().catch(console.error);
