import React from 'react';
import {Link} from 'react-router-dom'
const Home=()=>{
    return(
        <div>
            <h1>Welcome to demo</h1>
            <Link to="/counter">Go to counter</Link>
            <br/>
            <Link to="/notes">Go to notes</Link>
        </div>
    )
}
export default Home;