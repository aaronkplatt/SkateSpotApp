import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    //user is for all the data, we will only render stuff if user is authenticted.
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {/* We are getting all the data needed for this user below */}
                <JSONPretty data={user} />
                {/* This below gives us a big log */}
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}
export default Profile;