import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FormsEditar from "../pages/FormsEditar";
import FormsInserir from "../pages/FormsInserir";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
            <Route component = { FormsEditar }  path="/formedit" />
           <Route component = { FormsInserir }  path="/forminsert" /> 
       </BrowserRouter>
   )
}

export default Routes;