/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signIn
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logOut
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider);
  };
  // google
  const githubProvider = new GithubAuthProvider();
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider);
  };
  // useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("auth change current user", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // authInfo
  const authInfo = {
    createUser,
    singIn,
    logOut,
    user,
    loading,
    googleSignIn,
    githubSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
