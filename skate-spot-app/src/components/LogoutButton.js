import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, user, isAuthenticated } = useAuth0();
    // const { user, isAuthenticated } = useAuth0();
    return(
        //if authenticated show log out button
        isAuthenticated && (
            <div class="row">
                {/* Signed into this user */}
                <div class="col-md-6">
                    <p>Signed in as: {user.name}</p>
                </div>
                {/* Logout button */}
                <div class="col-md-6">   
                    <button onClick={() => logout()}>
                        Logout
                    </button>
                </div>
            </div>
        )
        
    )
}
export default LogoutButton;