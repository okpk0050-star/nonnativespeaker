// src/components/Header.jsx

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/**
 * 헤더 컴포넌트
 * - 모든 페이지 상단에 표시되는 네비게이션 바입니다.
 * - Material-UI의 AppBar 컴포넌트를 사용하여 세련된 디자인을 구현합니다.
 */
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* 사이트 타이틀 */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button component={RouterLink} to="/" color="inherit">
            코리아 커넥트
          </Button>
        </Typography>

        {/* 네비게이션 버튼들 */}
        <Box>
          <Button component={RouterLink} to="/admin" color="inherit">
            Weekly Trend
          </Button>
          <Button component={RouterLink} to="/community" color="inherit">
            커뮤니티
          </Button>
          <Button component={RouterLink} to="/request" color="inherit">
            주제 요청
          </Button>
          <Button component={RouterLink} to="/auth" color="inherit">
            로그인
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
