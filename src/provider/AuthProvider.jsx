import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
 
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

// create context 
export const AuthContext = createContext(null)

// Google authentication Provider 
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// component
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
     
    // Login via google 
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    // Github Login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }


    // create new user via sign up
    const signUp = (email, password) => {
        setLoading(true)
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update user profile 
    const handleUpdateProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }
    
    // observer 
    useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
    

    const authentications = {
        googleLogin,
        githubLogin,
        signUp,
        signIn,
        user,
        logOut,
        handleUpdateProfile,
        loading
    }
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;