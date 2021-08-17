import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";

const Headers = () => {
  return (
    <div className="rightside w-100">
      <header className="p-3 shadow">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-4 col-lg-4 col-sm-1 col-1">
            <Button color="light">
              <FontAwesomeIcon className="bars" icon={faBars} />
            </Button>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-5 col-7">
            <h2 className="ms-5 fw-bold">Algorismic</h2>
          </div>
          <div className="col-md-2 col-lg-1 col-sm-2 col-4">
            <Button color="light">
              <FontAwesomeIcon className="day" icon={faMoon} icon={faSun} />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
