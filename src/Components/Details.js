import React, { useState, useEffect } from "react";

function Details ({match,movies,location})  {
    const [movie,setMovie]=useState({});
    
     useEffect(()=>{
        setMovie(movies.filter(
        
            (film)=>film.id.toString()==match.params.id));
     },[])
    return <div>
    <h1>deatils page</h1>
    {/*  <h1>{movie[0].title}</h1>
     <h1>{movie[0].descreption}</h1> */}
     <h1>{location.state.title}</h1>
    </div>
}  
export default Details;

