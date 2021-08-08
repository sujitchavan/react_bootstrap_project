const Instructors = () => {
  return (
    <section className="p-5 bg-primary" id="instructors">
      <div className="container">
        <h2 className="text-center text-light">Our Instructors</h2>
        <p className="text-center text-light">
          Our instructions having experience in building ecosystem.
        </p>
        <div className="row g-4 mt-2">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title">Rohit Dhange</h3>
                <p className="cart-text">
                  Founder and CEO of Lazy Me Private Limited. He is very
                  passiniote and hard working.
                </p>
                <i className="bi bi-twitter text-dark mx-1"></i>
                <i className="bi bi-facebook text-dark mx-1"></i>
                <i className="bi bi-linkedin text-dark mx-1"></i>
                <i className="bi bi-instagram text-dark mx-1"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title">Priya Naik</h3>
                <p className="cart-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Amet, enim.
                </p>
                <i className="bi bi-twitter text-dark mx-1"></i>
                <i className="bi bi-facebook text-dark mx-1"></i>
                <i className="bi bi-linkedin text-dark mx-1"></i>
                <i className="bi bi-instagram text-dark mx-1"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/9.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title">Rutu Jadhav</h3>
                <p className="cart-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Amet, enim.
                </p>
                <i className="bi bi-twitter text-dark mx-1"></i>
                <i className="bi bi-facebook text-dark mx-1"></i>
                <i className="bi bi-linkedin text-dark mx-1"></i>
                <i className="bi bi-instagram text-dark mx-1"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title">Sujit Chavan</h3>
                <p className="cart-text">
                  Software Engineer at Quest-Global. 2+ experience in web
                  developement.
                </p>
                <i className="bi bi-twitter text-dark mx-1"></i>
                <i className="bi bi-facebook text-dark mx-1"></i>
                <i className="bi bi-linkedin text-dark mx-1"></i>
                <i className="bi bi-instagram text-dark mx-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
