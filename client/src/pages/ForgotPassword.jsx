import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    console.log("forgotPasswordHandler");
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
            <span>{success}</span>
          </span>
        )}

        <form onSubmit={forgotPasswordHandler}>
          <div className="pb-11">
            <h1>Forgot Your Password?</h1>
            <p className="form-info">
              Please enter the email address you registered your account with.
              We will send you a reset password link to your email
            </p>
          </div>

          <div className="inputs-group">
            {/* email form group */}
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                required
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* submit button */}
            <button type="submit" className="btn-primary">
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
