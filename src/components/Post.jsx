// src/components/Post.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Divider,
  TextField,
  Button,
  Avatar,
  CircularProgress,
} from '@mui/material';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import { supabase } from '../supabaseClient';

/**
 * 게시글 상세 보기 컴포넌트
 * - URL 파라미터에서 게시글 ID를 가져와 해당 게시글의 내용을 보여줍니다.
 * - 추천(좋아요) 기능과 댓글 목록, 댓글 작성 폼을 포함합니다.
 */
function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    if (!post) return;
    
    // 이미 좋아요를 눌렀다면 취소 (간단한 로직, 실제로는 사용자 ID 체크 필요)
    const newLikes = liked ? post.likes - 1 : post.likes + 1;
    
    try {
      const { error } = await supabase
        .from('posts')
        .update({ likes: newLikes })
        .eq('id', postId);

      if (error) throw error;

      setPost({ ...post, likes: newLikes });
      setLiked(!liked);
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim() || !post) return;

    setSubmittingComment(true);
    
    const newComment = {
      id: Date.now(),
      author: 'guest_user', // 임시 사용자
      content: commentText,
      date: new Date().toISOString()
    };

    const updatedComments = [...(post.comments || []), newComment];

    try {
      const { error } = await supabase
        .from('posts')
        .update({ comments: updatedComments })
        .eq('id', postId);

      if (error) throw error;

      setPost({ ...post, comments: updatedComments });
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('댓글 등록에 실패했습니다.');
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!post) {
    return <Typography>게시글을 찾을 수 없습니다.</Typography>;
  }

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      {/* 게시글 제목, 작성자 정보 */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
          <Avatar sx={{ width: 24, height: 24, mr: 1 }} />
          <Typography variant="body1">{post.author}</Typography>
          <Typography variant="body2" sx={{ mx: 1 }}>·</Typography>
          <Typography variant="body2">{post.date}</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />

      {/* 게시글 내용 */}
      <Box sx={{ my: 4, minHeight: 200 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>{post.content}</Typography>
      </Box>

      {/* 추천 버튼 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Button
          variant={liked ? "contained" : "outlined"}
          startIcon={liked ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
          onClick={handleLike}
        >
          추천 {post.likes}
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />

      {/* 댓글 목록 */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          댓글 {(post.comments || []).length}개
        </Typography>
        {(post.comments || []).map(comment => (
          <Box key={comment.id} sx={{ display: 'flex', mb: 2 }}>
            <Avatar sx={{ width: 32, height: 32, mr: 2 }} />
            <Box>
              <Typography variant="body2" component="span" fontWeight="bold">{comment.author}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1, fontSize: '0.8rem' }}>
                {comment.date ? comment.date.split('T')[0] : ''}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>{comment.content}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* 댓글 작성 폼 */}
      <Box component="form" onSubmit={handleCommentSubmit} sx={{ mt: 4, display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          label="댓글을 입력하세요..."
          variant="outlined"
          size="small"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          disabled={submittingComment}
        />
        <Button 
          type="submit" 
          variant="contained"
          disabled={submittingComment}
        >
          작성
        </Button>
      </Box>
    </Paper>
  );
}

export default Post;
