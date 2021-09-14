import React, {Component} from 'react'
import {Link} from 'react-router'

export default class CommonFooter extends Component {
  render () {
    return (
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="footer-widget">
                        <Link to="/"><img src="images/logo.png" className="auth-logo mb20" alt="" /></Link>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="footer-widget">
                        <h3 className="widget-title">
                            Contact Address
                        </h3>
                        <p className="mb0 text-default">+0-800-1234-123</p>
                        <p className="mb0 text-default">info@gmail.com</p>
                        <p className="mb0 text-default">+0-800-1234-123</p>
                        <p className="mb0 text-default">info@gmail.com</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
                    <div className="footer-widget">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
