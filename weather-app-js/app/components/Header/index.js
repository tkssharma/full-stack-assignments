import React from "react";
import "./index.less";
import { Link } from "react-router";

const CommonHeader = (props) => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                        <div className="header-logo">
                            <Link to="/"><img src="images/logo.png" className="auth-logo" alt="" /></Link>
                           
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-8">
                        <div id="navigation">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}
export default CommonHeader;
