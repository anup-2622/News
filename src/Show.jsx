import React from "react";

function Show({ news }) {
  // console.log(news)/;
  return (
    <div>
      <div className="container my-5" style={{ widt: "100%" }}>
        <div className="row text-center">
          {news.map((val, index) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.urlToImage} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{val.author}</h5>
                    <p className="card-text">{val.content}</p>
                  </div>
                  <button type="primary" className="btn btn-primary">
                    <a href={val.url} style={{ color: "white" }}>
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Show;
