import React, { Fragment } from 'react'
import { LinkContainer } from "react-router-bootstrap";
import { Nav} from "react-bootstrap";
import  "./StyleSheets/features.css"
export const features = () => {
  return (
    <Fragment>
        <div className='featurescontainerMainWrapper '>
        <div className='horizontalline-full'></div>
            <p className="feature-head"> JOIN OUR EAT WELL, BE WELL </p>
            <p className="feature-head"> CULTURE. </p>
            <p className="feature-head-description">Stay up-to-date with our new openings, upcoming events, seasonals special, and promotions. </p>
 <div className='Signmeupcontainer'> 
<div className='horizontalline-mid'></div>
<LinkContainer  to="/register">
                    <Nav.Link >SIGN ME UP</Nav.Link>
                  </LinkContainer>{" "}
                  <div className='horizontalline-mid'></div>
</div>

        </div>
    </Fragment>

  )
}

export default features;