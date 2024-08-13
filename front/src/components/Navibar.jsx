import React, { useEffect, useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/slices/authSlice';

import { navMenus } from '../utils/data';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Navibar = () => {
  const dispatch = useDispatch();
  const googleClientId = process.env.REACT_APP_AUTH_CLIENT_ID;
  const [isAuthentication, setIsAuthentication] = useState(false);

  const handleLoginSucess = (res) => {
    const decoded = jwtDecode(res.credential);

    dispatch(login({ authData: decoded, token: res.credential }));

    const storedData = JSON.parse(localStorage.getItem('authData'));
    const storedToken = localStorage.getItem('token');
    console.log(storedData, storedToken);
    setIsAuthentication(true);
  };

  useEffect(() => {
    if (window.google) {
      //구글 아이디 가져왔을 때
      window.google.accounts.id.initialize({
        //구글 값 초기화
        client_id: googleClientId,
        callback: handleLoginSucess,
      });
    }
  }, [googleClientId]);
  const handleLoginClick = () => {
    window.google.accounts.id.prompt(); //로그인 팝업
  };
  // const dispatch = useDispatch();
  // //   console.log(localStorage.getItem('token'));
  // //   localStorage.removeItem('token');
  // const userInfo = useSelector((state) => state.auth); //state.auth는 store.js에 정의한 reducer 객체요소의 키

  // const [isAuth, setIsAuth] = useState(false); //userInfo가 없는 상태 초기화

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('userToken');
  //   const storedPicture = localStorage.getItem('userPicture');
  //   const storedEmail = localStorage.getItem('userEmail');
  //   const storedName = localStorage.getItem('userName');

  //   if (storedToken) {
  //     dispatch(
  //       login({
  //         userName: storedName,
  //         userImage: storedPicture,
  //         userToken: storedToken,
  //         userEmail: storedEmail,
  //       })
  //     );
  //     setIsAuth(true);
  //   }
  // }, [dispatch]);

  // const handleLoginSuccess = (credentialResponse) => {
  //   const userData = jwtDecode(credentialResponse.credential);
  //   //userData.jti
  //   dispatch(
  //     login({
  //       userName: userData.given_name,
  //       userImage: userData.picture,
  //       userToken: userData.jti,
  //       userEmail: userData.email,
  //     })
  //   );
  //   setIsAuth(true);
  // };

  // if (window.google) {
  //   window.google.accounts.id.initialize({
  //     client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
  //     callback: handleLoginSuccess,
  //   });
  // }

  // const handleLogin = () => {
  //   window.google.accounts.id.prompt();
  // };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   setIsAuth(false);
  // };

  const handleLogoutClick = () => {
    dispatch(logout());
    setIsAuthentication(false);
  };

  return (
    <nav className="navi bg-[#212121] w-1/5 h-full rounded-sm border-gray-500 py-10 px-4 flex flex-col justify-between ">
      <div className="logo-wrapper flex w-full items-center justify-center gap-8">
        <div className="logo"></div>
        <h2 className="font-semibold text-xl">
          <Link to="/" className="font-customFontEn">
            WONDER
          </Link>
        </h2>
      </div>
      <ul className="menus ">
        {navMenus.map((menu, idx) => (
          <li
            key={idx}
            className="bg-gray-950 border border-gray-700  rounded-sm mb-1 hover:bg-blue-400 transition-all duration-300"
          >
            <Link to={menu.to} className="flex gap-x-4 items-center py-2 px-10">
              {menu.icon}
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      {isAuthentication ? (
        <button onClick={handleLogoutClick}>Logout </button>
      ) : (
        <div className="">
          <button
            onClick={handleLoginClick}
            className="font-customFontKr flex justify-center items-center gap-2 bg-gray-300 text-gray-900 py-2 px-4 rounded-md w-full"
          >
            <FcGoogle className="h-5 w-5" />
            Login With Google
          </button>
        </div>
      )}

      {/* <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}
      {/* {userInfo.userToken ? (
        <div>
          <h2>{userInfo.userName}님 로그인</h2>
          <button onClick={handleLogout}>LogOut</button>
        </div>
      ) : (
        <div>
          <h2>로그인이 필요합니다.</h2>
          <button onClick={handleLogin}>LogIn</button>
        </div>
      )} */}
      {/* 이부분은 isAuth가 localstorage가 아닌 state를 읽었다 */}
    </nav>
  );
};

export default Navibar;

// const userInfo = jwtDecode(credentialResponse.credential);
//           console.log(credentialResponse);
//           console.log(userInfo.jti);
//           console.log(userInfo.email);
//           console.log(userInfo.given_name);
//           console.log(userInfo.picture);

//           localStorage.setItem('token', userInfo.jti);

//(credentialResponse) => {}
