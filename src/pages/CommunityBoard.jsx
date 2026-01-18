// src/pages/CommunityBoard.jsx

import React from 'react';
import PostList from '../components/PostList';
import { Button, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

/**
 * 샘플 게시글 데이터
 * - 실제 애플리케이션에서는 API를 통해 서버로부터 받아옵니다.
 */
const samplePosts = [
  {
    id: 1,
    title: '서울에서 맛있는 비건 식당 추천해주세요!',
    author: 'vegan_lover',
    date: '2023년 10월 27일',
    likes: 15,
    comments: [
      { id: 1, author: 'foodie', content: '이태원에 있는 "플랜트" 강추합니다!' },
      { id: 2, author: 'Alice', content: '홍대에 "어라운드 그린"도 괜찮아요.' },
    ],
  },
  {
    id: 2,
    title: '부산 여행 2박 3일 코스 좀 짜주세요.',
    author: 'busan_dream',
    date: '2023년 10월 26일',
    likes: 8,
    comments: [],
  },
  {
    id: 3,
    title: '한국에서 운전면허 따는 법 아시는 분?',
    author: 'driver',
    date: '2023년 10월 25일',
    likes: 22,
    comments: [],
  },
];

/**
 * 자유 게시판 컴포넌트 (Community)
 * - 모든 회원이 자유롭게 글을 쓰고 소통하는 공간입니다.
 * - PostList 컴포넌트를 사용하여 게시글 목록을 표시합니다.
 */
function CommunityBoard() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1">
          커뮤니티
        </Typography>
        <Button
          component={RouterLink}
          to="/community/new"
          variant="contained"
        >
          새 글 작성
        </Button>
      </Box>
      <PostList posts={samplePosts} />
    </Box>
  );
}

export default CommunityBoard;
