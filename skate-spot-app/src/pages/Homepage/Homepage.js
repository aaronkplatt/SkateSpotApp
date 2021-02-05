import React from "react";
import "../Homepage/Homepage.css"

//auth0
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";

function Home() {
    //user is for all the data, we will only render stuff if user is authenticted.
    const { user, isAuthenticated } = useAuth0();
    return (
        <div>
            <h1>SKATE SPOTS</h1>
            <LoginButton />
            <LogoutButton />
        </div>
    );
}
export default Home;