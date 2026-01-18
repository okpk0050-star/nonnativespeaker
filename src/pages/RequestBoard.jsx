// src/pages/RequestBoard.jsx

import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { supabase } from '../supabaseClient';

/**
 * 요구 게시판 컴포넌트 (Request a Topic)
 * - 사용자들이 원하는 주제나 정보를 요청하는 공간입니다.
 * - PostList 컴포넌트를 사용하여 게시글 목록을 표시합니다.
 */
function RequestBoard() {
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
        .eq('category', 'request')
        .order('id', { ascending: false });

      if (error) throw error;
      setPosts(data);
    } catch (error) {
      console.error('Error fetching request posts:', error);
    } finally {
      setLoading(false);
    }
  };

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

export default RequestBoard;
