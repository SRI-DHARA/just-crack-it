import MyCustomHomePage from "../pages/demo-6";
const index = () => {
  return (
    <div id="page" className="page-wrapper demo">
      <MyCustomHomePage />
      <footer id="footer" className="footer division">
        <div className="container">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p>
                Designed with <i className="far fa-heart" /> by Jthemes
              </p>
              <p>
                © {new Date().getFullYear()} <span>eTreeks.</span> All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>{" "}
      {/* END FOOTER */}
    </div>
  );
};

export default index;
