import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // focus user on mount
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // validate user
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  // validate passwords
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  // clear error when the user is making changes
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const registerHandler = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      return console.log("ERROR, INVALID CREDS");
    }

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
    } catch (error) {
      console.log("axios error", error);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-40 bg-blue-50">
      <section className="flex flex-col max-w-xl w-full">
        {/* && error message */}
        {errMsg && (
          <span className="form-error">
            {/* prettier-ignore */}
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
            <span ref={errorRef} aria-live="assertive">
              {errMsg}
            </span>
          </span>
        )}

        <form onSubmit={registerHandler}>
          {/* greeting */}
          <div className="flex flex-col items-center pb-11">
            <img
              className="h-16 w-16 rounded-lg"
              src="https://picsum.photos/200"
              alt=""
            />
            <div className="pt-6">
              <h1>Welcome To Trombino</h1>
            </div>
            <div className="text-gray-500">Create a Trombino Account</div>
          </div>

          <div className="inputs-group">
            {/* name form group */}
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                value={user}
                placeholder="Enter username"
              />
              {/* TODO: LEFT HERE */}
              <p id="uidnote" className="text-sm font-medium text-blue-500 p-2 rounded-md border-2 border-blue-400 mt-2">
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>
            {/* password form group */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                placeholder="Enter password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            {/* confirm password form group */}
            <div className="input-group">
              <label htmlFor="matchPwd">Confirm Password</label>
              <input
                type="password"
                required
                id="matchPwd"
                placeholder="Confirm password"
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value)}
              />
            </div>
            {/* submit button */}
            <button type="submit" className="btn-primary">
              Register
            </button>
          </div>
          {/* already have an account? */}
          <span className="form-info">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </section>
    </div>
  );
};

export default Register;
