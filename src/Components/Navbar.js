import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Navbar ()
{
    return (
        <nav class="navbar navbar-light bg-light justify-content-between">
  <Link to="/" class="navbar-brand">Home</Link>
  <Link to="/AddFilm" class="navbar-brand">Add movie</Link>
  
  
  </nav>
    )
}
export default Navbar

/*<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Navbar</a>*/