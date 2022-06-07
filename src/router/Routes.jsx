import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import {Home, FormsInserir, FormsEditar, SaibaMais } from "../pages/";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
            <Route component = { FormsEditar }  path="/formedit" />
            <Route component = { FormsInserir }  path="/forminsert" /> 
            <Route component = { SaibaMais }  path="/saibamais" /> 
       </BrowserRouter>
   )
}

export default Routes;