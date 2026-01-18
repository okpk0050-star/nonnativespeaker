// src/pages/AdminBoard.jsx

import React from 'react';
import PostList from '../components/PostList';
import { Button, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// 이 값은 실제 애플리케이션에서는 로그인 상태에 따라 동적으로 결정되어야 합니다.
const isAdmin = true;

/**
 * 샘플 운영자 게시글 데이터
 */
const sampleAdminPosts = [
  {
    id: 101,
    title: '[공지] 11월 정기 업데이트 안내',
    author: '운영자',
    date: '2023년 11월 1일',
    likes: 50,
    comments: [],
  },
  {
    id: 102,
    title: '[팁] 한국 지하철, 이것만 알면 환승 마스터!',
    author: '운영자',
    date: '2023년 10월 28일',
    likes: 120,
    comments: [],
  },
];

/**
 * 운영자 게시판 컴포넌트 (Weekly Trend & Tips)
 * - 운영자만 글을 작성할 수 있습니다.
 * - PostList 컴포넌트를 사용하여 게시글 목록을 표시합니다.
 */
function AdminBoard() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1">
          Weekly Trend & Tips
        </Typography>
        {/* 관리자일 경우에만 새 글 작성 버튼이 보입니다. */}
        {isAdmin && (
          <Button
            component={RouterLink}
            to="/admin/new"
            variant="contained"
          >
            새 글 작성
          </Button>
        )}
      </Box>
      <PostList posts={sampleAdminPosts} />
    </Box>
  );
}

export default AdminBoard;
