// src/pages/RequestBoard.jsx

import React from 'react';
import PostList from '../components/PostList';
import { Button, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

/**
 * 샘플 주제 요청 데이터
 */
const sampleRequestPosts = [
  {
    id: 201,
    title: '배달앱 사용법에 대한 자세한 가이드가 필요해요.',
    author: 'newbie',
    date: '2023년 10월 27일',
    likes: 30,
    comments: [],
  },
  {
    id: 202,
    title: '각 지역별 쓰레기 분리수거 방법에 대해 알려주세요.',
    author: 'eco_friendly',
    date: '2023년 10월 26일',
    likes: 45,
    comments: [],
  },
];

/**
 * 요구 게시판 컴포넌트 (Request a Topic)
 * - 사용자들이 원하는 주제나 정보를 요청하는 공간입니다.
 * - PostList 컴포넌트를 사용하여 게시글 목록을 표시합니다.
 */
function RequestBoard() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1">
          주제 요청
        </Typography>
        <Button
          component={RouterLink}
          to="/request/new"
          variant="contained"
        >
          새 요청 작성
        </Button>
      </Box>
      <PostList posts={sampleRequestPosts} />
    </Box>
  );
}

export default RequestBoard;
