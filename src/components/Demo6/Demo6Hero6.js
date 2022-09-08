import Router from "next/router";
import React from "react";
const Demo6Hero6 = () => {
  return (
    <section id="hero-6" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row">
          {/* HERO TEXT */}
          <div className="col-md-8 col-lg-6">
            <div className="hero-txt white-color">
              {/* Title */}
              <h2 className="h2-xs">Just Crack it 
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                and you will surely crack it...</p> </h2>
              
              {/* Text */}
              <p className="p-lg">
              One-stop learning centre with EVERYTHING than an aspirant needs to crack ANY recruitment exam conducted by DSSSB
              </p>
              {/*Hero Search Form */}
              <form
                className="hero-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  Router.push({
                    pathname: "/categories-list",
                  });
                }}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What do you want to learn?"
                    aria-label="Search"
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo6Hero6;
