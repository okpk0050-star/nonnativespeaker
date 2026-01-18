// src/pages/Auth.jsx

import React, { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';

/**
 * 회원가입/로그인 페이지 컴포넌트
 * - Material-UI의 Tabs를 사용하여 회원가입과 로그인 폼을 전환합니다.
 * - 이메일, 비밀번호, 사용자 이름, 관심 지역을 입력받습니다.
 */
function Auth() {
  const [tabIndex, setTabIndex] = useState(0); // 0: 로그인, 1: 회원가입

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, mx: 'auto', p: 4 }}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="로그인" />
        <Tab label="회원가입" />
      </Tabs>

      {/* 로그인 폼 */}
      {tabIndex === 0 && (
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 3,
          }}
        >
          <Typography variant="h5" component="h2" textAlign="center">
            로그인
          </Typography>
          <TextField label="이메일" type="email" variant="outlined" required />
          <TextField
            label="비밀번호"
            type="password"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" size="large">
            로그인
          </Button>
        </Box>
      )}

      {/* 회원가입 폼 */}
      {tabIndex === 1 && (
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 3,
          }}
        >
          <Typography variant="h5" component="h2" textAlign="center">
            회원가입
          </Typography>
          <TextField label="이메일" type="email" variant="outlined" required />
          <TextField
            label="비밀번호"
            type="password"
            variant="outlined"
            required
          />
          <TextField label="사용자 이름" variant="outlined" required />
          <TextField label="관심있는 한국 지역 (예: 서울, 부산)" variant="outlined" />
          <Button type="submit" variant="contained" size="large">
            가입하기
          </Button>
        </Box>
      )}
    </Paper>
  );
}

export default Auth;
