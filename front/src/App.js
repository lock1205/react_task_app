// root 폴더에 .env 파일 생성
// .env 파일에 다음과 같이 작성 ( "" 없어야하고 공백없어야함 )
// REACT_APP_AUTH_CLIENT_ID=구글API아이디
// REACT_APP 환경변수의 이름은 반드시 REACT_APP_로 시작해야한다
// .gitignore 파일에 아래와 같이 수정

// # misc
// .DS_Store
// .env <- 이 부분 추가
// .env.local

// npm i react-router-dom
// components 폴더 생성후 -> 하위 폴더 2개 (Completed, Home) 생성
// 각각 폴더(Completed, Home) 아래에 index.js 파일 생성

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Completed from './components/Completed';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/proceeding" element={<Completed />} />
          <Route path="/important" element={<Completed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
