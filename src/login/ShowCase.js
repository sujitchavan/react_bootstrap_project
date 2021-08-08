import ShowCaseImage from "../images/showcase.svg";

const ShowCase = () => {
  return (
    <div>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-items-between">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>{" "}
              </h1>
              <p className="lead my-4">
                We focus on teaching our students the fundamental of the latest
                and greatest technologies to prepare them for their first dev
                role.
              </p>
              <button
                className="btn btn-primary btn-lg my-2"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Start Enrollment
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={ShowCaseImage}
              alt=""
            />
          </div>
        </div>
      </section>
      <div
        class="modal fade"
        id="enroll"
        tabindex="-1"
        role="dialog"
        aria-labelledby="enrollLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="enrollLabel">
                Login
              </h5>
            </div>
            <div class="modal-body">
              <form className="p-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control mb-3"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
