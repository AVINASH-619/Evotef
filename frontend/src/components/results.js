import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './results.css';
import Footer from './footer';
const Results = () => {
    const[users,setUsers]=useState([]);
   const getUsers= async ()=>
   {
      const resp=await fetch('/election');
      setUsers(await resp.json());
   }
   useEffect(()=>
   {
       getUsers();
   },[]);
   return(
     <div className="Result container"  style={{"  box-shadow": "5px 5px 5px 5px grey"}}>
       <h1 className="text-center">Results are out</h1>
          {
           users.sort((val1,val2)=>{return val2.t-val1.t}).map((val)=>
           {
              return(
                  <div className="table1 row">
                       <img className="col-4 text-center" src={val.image} style={{"width":"100px","height":"100px"}}></img>
                       <p className="col-4 text-center">{val.name}</p>
                       <p className="col-4 text-center">{val.t}</p>
                  </div>
              )
           })
       }
       <Footer></Footer>
     </div>
   )
}
export default Results