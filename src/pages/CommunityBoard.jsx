import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { supabase } from '../supabaseClient';

/**
 * 자유 게시판 컴포넌트 (Community)
 * - 모든 회원이 자유롭게 글을 쓰고 소통하는 공간입니다。
 * - PostList 컴포넌트를 사용하여 게시글 목록을 표시합니다。
 */
function CommunityBoard() {
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
        .eq('category', 'community')
        .order('id', { ascending: false }); // 최신순 정렬 (ID 기준, 또는 created_at 있다면 그것으로 변경)

      if (error) throw error;
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <SEO 
        title="커뮤니티" 
        description="한국 생활 팁, 여행 정보, 질문과 답변을 자유롭게 공유하는 공간입니다."
      />
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

export default CommunityBoard;
