import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, user, isAuthenticated } = useAuth0();
    // const { user, isAuthenticated } = useAuth0();
    return(
        //if authenticated show log out button
        isAuthenticated && (
            <div>

                <div>
                    
                    <button onClick={() => logout()}>
                        Logout
                    </button>
                </div>
                <div>
                    <p>Signed in as: {user.name}</p>
                </div>

            </div>
        )
        
    )
}
export default LogoutButton;