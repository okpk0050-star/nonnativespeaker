// src/pages/AdminBoard.jsx

import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { supabase } from '../supabaseClient';

// 이 값은 실제 애플리케이션에서는 로그인 상태에 따라 동적으로 결정되어야 합니다.
const isAdmin = true;

/**
 * 운영자 게시판 컴포넌트 (Weekly Trend & Tips)
 * - 운영자만 글을 작성할 수 있습니다.
 * - PostList 컴포넌트를 사용하여 게시글 목록을 표시합니다.
 */
function AdminBoard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category', 'trend')
        .order('id', { ascending: false });

      if (error) throw error;
      setPosts(data);
    } catch (error) {
      console.error('Error fetching trend posts:', error);
    } finally {
      setLoading(false);
    }
  };

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
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <PostList posts={posts} />
      )}
    </Box>
  );
}

export default AdminBoard;
