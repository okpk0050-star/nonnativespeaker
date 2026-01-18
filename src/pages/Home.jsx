// src/pages/Home.jsx

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/**
 * 홈페이지 컴포넌트
 * - 사이트의 목적과 주요 기능을 소개합니다.
 * - Material-UI 컴포넌트를 사용하여 세련되고 매력적인 UI를 구성합니다.
 */
function Home() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        코리아 커넥트: 한국 생활의 모든 것
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        한국에 사는 외국인들을 위한 정보 공유 및 소통 커뮤니티
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item md={4}>
            <Typography variant="h6">Weekly Trend & Tips</Typography>
            <Typography>매주 업데이트되는 한국 생활 트렌드와 유용한 팁을 확인하세요.</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h6">자유 게시판</Typography>
            <Typography>자유롭게 질문하고, 경험을 공유하며 다른 사용자들과 소통하세요.</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h6">주제 요청</Typography>
            <Typography>커뮤니티에서 다루었으면 하는 주제를 직접 제안해보세요.</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Button
          component={RouterLink}
          to="/auth"
          variant="contained"
          size="large"
        >
          커뮤니티 참여하기
        </Button>
      </Box>
    </Paper>
  );
}

export default Home;
