'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', phone: '', password: '' });
  const [userData, setUserData] = useState({ _id: '', email: '', role: '', fname: '' });

  const [loginPopUp, setLoginPopUp] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (isLoggedIn) {
        const userUrl = `https://bookstorm-rsmvx03awqentulqskokde6yg.vercel.app/users/${loggedInEmail}`;
        try {
          const response = await fetch(userUrl);
          const data = await response.json();
          setUserData(data || []);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchData();
  }, [isLoggedIn, loggedInEmail]);

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedEmail = localStorage.getItem('loggedInEmail') || '';
    setLoggedIn(storedLoggedInStatus);
    setLoggedInEmail(storedEmail);
  }, []);

  const handleLogout = () => {
    router.push('/');
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('loggedInEmail', '');
    setLoggedIn(false);
    setLoggedInEmail('');
  };

  useEffect(() => {
    if (userData.role === 'admin') {
      setIsAdmin(true);
      console.log("isAdmin " + isAdmin);
    } else {
      setIsAdmin(false);
    }
  }, [userData.role]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        loggedInEmail,
        setLoggedInEmail,
        loginData,
        setLoginData,
        registerData,
        setRegisterData,
        handleLogout,
        loginPopUp,
        setLoginPopUp,
        isAdmin,
        setIsAdmin,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
