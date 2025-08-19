# ShivNursery with Authentication

A complete e-commerce application for plant nursery business with user authentication and authorization.

## Features

### Authentication System
- User registration with email validation
- Secure login with JWT tokens
- Protected routes requiring authentication
- User session management
- Logout functionality

### E-commerce Features  
- Product catalog browsing
- Shopping cart functionality
- Product details page
- About and Contact pages
- Responsive design with Material-UI

### Security
- Password hashing with bcrypt
- JWT token-based authentication
- Protected API endpoints
- Secure session management

## Project Structure

```
ShivNursery-with-Auth/
├── backend/                 # Node.js/Express server
│   ├── models/             # Database models
│   │   └── User.js
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   └── server.js          # Main server file
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Auth/      # Authentication components
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ...
│   │   ├── contexts/      # React contexts
│   │   │   └── AuthContext.jsx
│   │   ├── pages/         # Page components
│   │   └── App.jsx        # Main App component
│   └── package.json       # Frontend dependencies
└── README.md              # This file
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB service (if using local MongoDB):
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongodb
   ```

4. Start the backend server:
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

   The server will start on http://localhost:5000

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The application will open in your browser at http://localhost:5173

## Usage

### First Time Setup

1. **Start both servers**: Make sure both backend (port 5000) and frontend (port 5173) are running.

2. **Create an account**: 
   - Go to http://localhost:5173
   - You'll be redirected to the login page
   - Click "Sign Up" to create a new account
   - Fill in your details and click "Sign Up"

3. **Login**:
   - Use your credentials to log in
   - You'll be redirected to the home page

4. **Explore the app**:
   - Browse products in the Shop section
   - Add items to your cart
   - View product details
   - Access your profile through the account menu

### Authentication Flow

- **Unauthenticated users**: Can only access login and register pages
- **Authenticated users**: Can access all e-commerce features
- **Session persistence**: Login state is maintained across browser sessions
- **Automatic logout**: Invalid or expired tokens automatically log users out

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/verify-token` - Token verification

### Protected Routes
- `GET /api/profile` - Get user profile
- `GET /api/shop` - Access shop (requires auth)
- `POST /api/cart` - Cart operations (requires auth)

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT token generation
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React** - Frontend framework
- **Material-UI** - Component library
- **React Router** - Routing
- **Axios** - HTTP client
- **Vite** - Build tool
- **Tailwind CSS** - Utility CSS

## Environment Variables

Create a `.env` file in the backend directory:

```env
NODE_ENV=development
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
MONGODB_URI=mongodb://localhost:27017/shivnursery
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:
   - Ensure MongoDB is running
   - Check the connection string in `.env`

2. **CORS Error**:
   - Ensure backend is running on port 5000
   - Check frontend API calls point to correct backend URL

3. **Token Errors**:
   - Clear browser localStorage
   - Check JWT_SECRET in backend `.env`

4. **Port Already in Use**:
   - Kill processes using ports 5000 or 5173
   - Use different ports if needed

### Development Tips

- Use browser DevTools to inspect network requests
- Check browser console for error messages
- Monitor backend logs for server errors
- Clear browser cache if experiencing caching issues

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes.
