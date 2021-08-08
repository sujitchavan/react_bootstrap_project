import "../style/style.css";

const NewsLetter = () => {
  return (
    <section className="bg-primary text-light p-4">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h5 className="mb-md-0">Sign Up for Our NewsLetter</h5>
          <div class="input-group news-input">
            <input type="text" class="form-control" placeholder="Enter Email" />
            <button class="btn btn-dark" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
