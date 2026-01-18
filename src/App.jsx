// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from './components/Header';
import Home from './pages/Home';
import Auth from './pages/Auth';
import AdminBoard from './pages/AdminBoard';
import CommunityBoard from './pages/CommunityBoard';
import RequestBoard from './pages/RequestBoard';
import NewPost from './components/NewPost';
import Post from './components/Post';
import './App.css';

/**
 * Material-UI의 기본 테마를 생성합니다.
 * 색상, 타이포그래피 등을 여기서 사용자 정의할 수 있습니다.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

/**
 * 메인 앱 컴포넌트
 * - React Router를 사용하여 페이지 간의 이동을 관리합니다.
 * - 모든 페이지에 공통으로 표시될 Header를 포함합니다.
 * - Material-UI 테마와 기본 CSS를 적용합니다.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CSS를 초기화하고 표준화합니다. */}
      <CssBaseline />
      <BrowserRouter>
        {/* 모든 페이지 상단에 헤더를 렌더링합니다. */}
        <Header />

        {/* 페이지 콘텐츠를 담는 컨테이너입니다. */}
        <Container component="main" sx={{ mt: 4, mb: 4 }}>
          {/* URL 경로에 따라 렌더링할 컴포넌트를 정의합니다. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />

            <Route path="/admin" element={<AdminBoard />} />
            <Route path="/admin/new" element={<NewPost />} />
            <Route path="/admin/:postId" element={<Post />} />

            <Route path="/community" element={<CommunityBoard />} />
            <Route path="/community/new" element={<NewPost />} />
            <Route path="/community/:postId" element={<Post />} />

            <Route path="/request" element={<RequestBoard />} />
            <Route path="/request/new" element={<NewPost />} />
            <Route path="/request/:postId" element={<Post />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
