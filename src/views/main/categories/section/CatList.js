import { Link } from "react-router-dom";
const CatList = () => {
  return (
    <>
      <section className="CatList">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card text-center">
                <div className="icon"></div>
                <div className="detail">
                  <h4>Sports</h4>
                  <h5>Fundraising</h5>
                  <p>
                    Nullam justo sagittis feugiat nun euismod risus enim aenean.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card grey text-center">
                <div className="icon"></div>
                <div className="detail">
                  <h4>Schools</h4>
                  <h5>Fundraising</h5>
                  <p>
                    Nullam justo sagittis feugiat nun euismod risus enim aenean.
                    Nullam justo sagittis feugiat nun.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center">
                <div className="icon"></div>
                <div className="detail">
                  <h4>Non-profit</h4>
                  <h5>Fundraising</h5>
                  <p>
                    Nullam justo sagittis feugiat nun euismod risus enim aenean.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CatList;
