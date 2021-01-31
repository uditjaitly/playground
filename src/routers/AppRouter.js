import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Counter from '../components/Counter.js'
import Home from '../components/Home.js'
import Notes from '../components/Notes.js'
const AppRouter=()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/counter" exact={true} component={Counter}/>
            <Route path="/notes" exact={true} component={Notes}/>
        
        </Switch>    
    
    </BrowserRouter>
)
export default AppRouter;