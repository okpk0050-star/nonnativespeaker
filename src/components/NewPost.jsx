// src/components/NewPost.jsx

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from '@mui/material';
import { supabase } from '../supabaseClient';

/**
 * 새 글 작성 컴포넌트
 * - 제목과 내용을 입력받아 새 게시글을 생성하는 폼입니다.
 */
function NewPost() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  // URL 경로에 따라 카테고리 결정
  const getCategoryFromPath = () => {
    if (location.pathname.includes('/admin')) return 'trend';
    if (location.pathname.includes('/request')) return 'request';
    return 'community'; // 기본값
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const category = getCategoryFromPath();
      
      const { data, error } = await supabase
        .from('posts')
        .insert([
          {
            title,
            content,
            category,
            author: 'guest_user', // 로그인 기능 구현 전이므로 임시 사용자
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD 형식
            likes: 0,
            comments: [] // 초기 댓글 배열 (필요한 경우 JSONB로 저장)
          },
        ]);

      if (error) throw error;

      alert('게시글이 등록되었습니다!');
      navigate(-1); // 이전 페이지로 이동
    } catch (error) {
      console.error('Error adding post:', error);
      alert('게시글 등록에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        새 글 작성
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <TextField 
          label="제목" 
          variant="outlined" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="내용"
          variant="outlined"
          multiline
          rows={10}
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button 
            variant="outlined" 
            onClick={() => navigate(-1)}
            disabled={loading}
          >
            취소
          </Button>
          <Button 
            type="submit" 
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : '작성 완료'}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default NewPost;
