const Cards = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3 className="card-title mb-3">Virtual</h3>
                <p className="card-text mb-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  officiis voluptas aspernatur, at aperiam reprehenderit.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h1">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">Hybrid</h3>
                <p className="card-text mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  officiis voluptas aspernatur, at aperiam reprehenderit.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="card-title mb-3">In Person</h3>
                <p className="card-text mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  officiis voluptas aspernatur, at aperiam reprehenderit.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
