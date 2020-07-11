import React, { useEffect, useState } from 'react';
import app from './fbase';
import { Loader } from 'semantic-ui-react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currUser, setcurrUser] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setcurrUser(user)
            setPending(false)
        });
    }, []);
    if (pending) {
        return (<><Loader size='big' active /></>)
    }

    return (
        <AuthContext.Provider
            value={{ currUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};