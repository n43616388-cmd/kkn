
import heroImage from "./assets/head.jpg";
import aboutImage from "./assets/photo1.jpg";

function Home() {
   document.title = "Home Page";
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm bg-white">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Nova CNB
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reviews
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
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
              <h1>Build Your Dream Website Today</h1>

              <p className="my-4">
                Create beautiful experiences with modern design, responsive
                layouts, and powerful performance.
              </p>

              <a href="#" className="btn btn-custom">
                Get Started
              </a>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
                className="img-fluid rounded"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Amazing Features
          </h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-phone"></i>

                <h4>Responsive</h4>

                <p>
                  Looks beautiful on mobile, tablet and desktop devices.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-lightning-charge"></i>

                <h4>Fast Performance</h4>

                <p>
                  Optimized layouts for smooth loading and great experience.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-palette"></i>

                <h4>Modern Design</h4>

                <p>
                  Elegant UI with attractive colors and animations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}

      <section className="about py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
                className="img-fluid rounded"
                alt="About"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us?</h2>

              <p className="mb-4">
                We create premium digital experiences that help businesses grow.
                Our focus is modern UI, clean code, and responsive design.
              </p>

              <div className="row">
                <div className="col-6">
                  <h5>✔ Quality</h5>
                </div>

                <div className="col-6">
                  <h5>✔ Support</h5>
                </div>

                <div className="col-6 mt-3">
                  <h5>✔ Creative</h5>
                </div>

                <div className="col-6 mt-3">
                  <h5>✔ Secure</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="stats py-5">
        <div className="container">
          <div className="row text-center">
            {[
              ["500+", "Projects"],
              ["200+", "Clients"],
              ["99%", "Satisfaction"],
              ["24/7", "Support"],
            ].map(([num, text], index) => (
              <div className="col-md-3" key={index}>
                <div className="counter">{num}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            What Clients Say
          </h2>

          <div className="row g-4">
            {[
              {
                img: "https://randomuser.me/api/portraits/women/68.jpg",
                name: "Emma",
                text: "Amazing design and outstanding service. Highly recommended!",
              },
              {
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "John",
                text: "Professional team with excellent communication and quality.",
              },
              {
                img: "https://randomuser.me/api/portraits/women/55.jpg",
                name: "Sophia",
                text: "Beautiful website delivered ahead of schedule.",
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="testimonial text-center">
                  <img src={item.img} alt={item.name} />
                  <h5>{item.name}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}

      <section className="contact py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Contact Us
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <textarea
                  rows="5"
                  className="form-control mb-3"
                  placeholder="Message"
                ></textarea>

                <div className="text-center">
                  <button className="btn btn-primary btn-lg px-5">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="py-4 bg-dark text-white">
        <div className="container text-center">
          <h4 className="mb-3">Nova</h4>

          <div className="social mb-3">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#">
              <i className="bi bi-twitter-x"></i>
            </a>

            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          <p>© 2026 Nova. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}



export default Home;