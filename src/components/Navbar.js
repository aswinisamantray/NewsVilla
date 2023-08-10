import React, {useState}from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavBar=()=>{
  const dispatch = useDispatch();

  const [input,setInput]=useState('');
  function titleChange(event) {
    const input=event.target.value;
    setInput(input);
  }

    return (
      <>
      {/* <div> */}
          <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/general">NewsVilla</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                </ul>
                </li>
            </ul>
            </div>
         </div>
        </nav>
      {/* </div> */}
      </>
    )
  }



export default NavBar
