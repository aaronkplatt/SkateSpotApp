import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();

    return(
    <div class="navbar">
        <h1>LOGO</h1>
        <h1>Signed in as:</h1>
        
        
    
    </div>
)};

export default NavBar;