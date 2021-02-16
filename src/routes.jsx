import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "./pages/Page-1";
import Page2 from "./pages/Page-2";
import Page3 from "./pages/Page-3";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path="/page-1" component={Page1}/>
                <Route path="/page-2" component={Page2}/>
                <Route path="/page-3" component={Page3}/>
            
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;