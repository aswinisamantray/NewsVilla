import React from "react";
import '../Newsitem.css'
import { Link } from "react-router-dom";

const Newsitem=(props)=>{
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div className="card">
         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>
              {source}
            </span>
            <div className="card-image"><img src={imageUrl} alt="Image Unavailable" /></div>
        <div className="cardTitle">
          <h5>
            {title}{" "}
          </h5>
        </div>
          <div className="description"> <p>{description}</p></div>
          <Link className='navigate'  target="_blank" rel="noreferrer" to={newsUrl} >Read More</Link>
          {/* <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p> */}
        </div>
    );
  }

export default Newsitem;
