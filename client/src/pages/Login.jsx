import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault()
    console.log("login submit");
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-40 bg-blue-50">
      <div className="flex flex-col max-w-lg w-full">
        {/* && error message */}
        {error && (
          <span className="form-error">
            {/* prettier-ignore */}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <span>{error}</span>
          </span>
        )}

        <form onSubmit={loginHandler}>
          {/* greeting */}
          <div className="flex flex-col items-center pb-11">
            <img
              className="h-16 w-16 rounded-full"
              src="https://picsum.photos/200"
              alt=""
            />
            <div className="pt-6">
              <h1>Welcome To Trombino</h1>
            </div>
            <div className="text-gray-500">Log in To Your Trombino Account</div>
          </div>

          <div className="inputs-group">
            {/* email form group */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                id="email"
                placeholder="e.g. email@doe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                tabIndex={1}
              />
            </div>
            {/* password form group */}
            <div className="input-group">
              <label htmlFor="password">
                Password{" "}
                <span className="form-info pl-2">
                  <Link to="/forgotpassword" tabIndex={4} className="pl-2">
                    | Forgot password?
                  </Link>
                </span>
              </label>
              <input
                type="password"
                required
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                tabIndex={2}
              />
            </div>
            {/* submit button */}
            <button className="btn-primary" type="submit" tabIndex={3}>
              Login
            </button>
          </div>
          {/* already have an account? */}
          <span className="form-info">
            You don't have an account?{" "}
            <Link to="/register" tabIndex={5}>
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
