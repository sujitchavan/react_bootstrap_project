import FundamentalImage from "../images/fundamentals.svg";
import ReactImage from "../images/react.svg";

const LearnSection = () => {
  return (
    <div id="learn">
      <section className="p-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img className="img-fluid" src={FundamentalImage} alt="" />
            </div>
            <div className="col-md p-5">
              <h2>Learn the Fundamentals</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto recusandae commodi omnis. Sit, iure ea. Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda maxime itaque delectus suscipit sed doloribus. Officia
                dolores, facilis quae cum odio animi provident aut eveniet
                pariatur autem aliquid ut nulla.
              </p>
              <a href="#" className="btn btn-light mt-2">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="p-2 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto recusandae commodi omnis. Sit, iure ea. Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda maxime itaque delectus suscipit sed doloribus. Officia
                dolores, facilis quae cum odio animi provident aut eveniet
                pariatur autem aliquid ut nulla.
              </p>
              <a href="#" className="btn btn-light mt-2">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img className="img-fluid" src={ReactImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnSection;
