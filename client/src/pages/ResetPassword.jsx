import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { resetToken } = useParams();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    console.log("resetPasswordHandler", "Token: ", resetToken);
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-40 bg-blue-50">
      <div className="flex flex-col max-w-xl w-full">
        {/* && error message */}
        {error && (
          <span className="form-error">
            {/* prettier-ignore */}
            <span className="pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            {error}
          </span>
        )}

        {/* && success message */}
        {success && (
          <span className="form-success">
            {/* prettier-ignore */}
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <span>
              {success} <Link to="/login"></Link>
            </span>
          </span>
        )}

        <form onSubmit={resetPasswordHandler}>
          <div className="pb-11">
            <h1>Reset Your Password</h1>
          </div>

          <div className="inputs-group">
            {/* password form group */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* confirm password form group */}
            <div className="input-group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                required
                id="confirmpassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {/* submit button */}
            <button type="submit" className="btn-primary">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

// TODO: redirect to login page after success (5 seconds timeout)

// TODO: protect this route
