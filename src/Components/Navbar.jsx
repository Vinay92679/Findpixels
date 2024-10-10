import React from "react";
import {useNavigate, useLocation} from "react-router-dom"

const Navbar = ({setSearch}) => {
  const nevigate = useNavigate()
  const location = useLocation()
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-3 gap-lg-5 my-4">
        <button type="button" onClick={()=>{setSearch("nature"), nevigate("/")}} className="btn btn-outline-primary">
          Nature
        </button>
        <button type="button" onClick={()=>{setSearch("travel"), nevigate("/")}} className="btn btn-outline-secondary">
          Travel
        </button>
        <button type="button" onClick={()=>{setSearch("city"), nevigate("/")}} className="btn btn-outline-success">
          City
        </button>
        <button type="button" onClick={()=>{setSearch("car"), nevigate("/")}} className="btn btn-outline-danger">
          Car
        </button>
        <button type="button" onClick={()=>{setSearch("fashion"), nevigate("/")}} className="btn btn-outline-warning">
          Fashion
        </button>
        <button type="button" onClick={()=>{setSearch("animals"), nevigate("/")}} className="btn btn-outline-info">
          Animals
        </button>
        <button type="button" onClick={()=>{setSearch("technology"), nevigate("/")}} className="btn btn-outline-light">
          Technology
        </button>
      {
        location.pathname == "/saved"?<button type="button" onClick={()=>nevigate("/")} className="btn btn-warning">
        Home
      </button> :  <button type="button" onClick={()=>nevigate("/saved")} className="btn btn-warning">
          Saved
        </button>
      }
      </div>
      {
        location.pathname == "/" ?  <div className="d-flex justify-content-center mb-5">
        <input className="form-control me-2 bg-dark text-white w-75" onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </div > : ""
      }
     
    </>
  );
};

export default Navbar;
