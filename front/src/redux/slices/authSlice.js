import { createSlice } from '@reduxjs/toolkit'; //1.slice 생성

const initialState = {
  //2.초기상태 정의
  userName: localStorage.getItem('userName') || null,
  userImage: localStorage.getItem('userImage') || null,
  userToken: localStorage.getItem('userToken') || null,
  userEmail: localStorage.getItem('userEmail') || null,
};

export const authSlice = createSlice({
  //3.slice 생성
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.userImage = action.payload.userImage;
      state.userToken = action.payload.userToken;
      state.userEmail = action.payload.userEmail;
      localStorage.setItem('userName', action.payload.userName);
      localStorage.setItem('userImage', action.payload.userImage);
      localStorage.setItem('userToken', action.payload.userToken);
      localStorage.setItem('userEmail', action.payload.userEmail);
    }, //session에 남기는 건 서버에 남기는 것이며, 세션은 서버에서 일정시간이 지나면 없애기 때문에 local을 병행해서 사용할 수도 있다.
    logout: (state) => {
      state.userName = null;
      state.userImage = null;
      state.userToken = null;
      state.userEmail = null;
      localStorage.removeItem('userName'); //removeItem은 파라미터가 한개만 들어감
      localStorage.removeItem('userImage');
      localStorage.removeItem('userToken');
      localStorage.removeItem('userEmail');
    },
  },
});

// const a = { abc: 1, def: 2 };
// console.log(a);

// const { abc, def } = a;

//export const autoActions = authSlice.actions; 아래와 같이 변경가능
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; //4. export된 함수들을 store에 등록
