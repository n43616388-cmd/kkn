
import heroImage from "./assets/head.jpg";
import aboutImage from "./assets/photo1.jpg";

function Home() {
  document.title = "Home Page";
  return (
    <>
      {/* Header/Navbar */}
          <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            NovaTech KKN
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <h1>Build Amazing Digital Experiences</h1>

              <p>
                Create beautiful websites with modern UI,
                responsive layouts, and engaging animations.
              </p>

              <button className="btn btn-light btn-custom">
                Get Started
              </button>
            </div>


            <div className="col-lg-6 text-center">
              <img
                src={heroImage}
                className="img-fluid rounded-4"
                alt="hero"
              />
            </div>

          </div>
        </div>
      </section>


      {/* About */}
      <section className="about">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <img
                src={aboutImage}
                className="img-fluid"
                alt="about"
              />
            </div>

            <div className="col-lg-6">
              <h2>We Build Digital Success</h2>
              <p>
                Our creative team helps startups and businesses
                create stunning digital products.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <footer>
        <div className="social">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
        </div>

        <p>
          © 2026 NovaTech. All Rights Reserved.
        </p>
      </footer>

    </>
  );
}

export default Home;