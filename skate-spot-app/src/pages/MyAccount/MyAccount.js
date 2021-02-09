import React from 'react';
import './MyAccount.css';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";

const MyAccount = () => {
    //user is for all the data, we will only render stuff if user is authenticted.
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <LoginButton />
                <h1>Signed In As:</h1>
                <h1 className="userName">{user.name}</h1>
                <img className="profilePic" src={user.picture} alt={user.name} />
                <p>Email: {user.email}</p>
                <button>My Spots</button>
                <p></p>
                {/* We are getting all the data needed for this user below */}
                {/* <JSONPretty data={user} /> */}
                {/* This below gives us a big log */}
                {/* {JSON.stringify(user, null, 2)} */}
                <LogoutButton />
            </div>
        )
    )
}
export default MyAccount;