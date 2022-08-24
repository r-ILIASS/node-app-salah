import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Performance from "./pages/Performance";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// context
import { UserProvider } from "./lib/user.context";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="performance" element={<Performance />} />
            <Route path="roles" element={<Roles />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route
              path="passwordreset/:resetToken"
              element={<ResetPassword />}
            />
            <Route path="users" element={<Users />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="min-h-screen grid place-items-center">
                <div className="flex items-center space-x-10">
                  <span className="font-semibold">Page Not Found 404</span>
                  <Link
                    to="/"
                    className="bg-blue-400 px-4 py-2 rounded-lg text-white text-sm font-bold"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
