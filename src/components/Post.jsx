// src/components/Post.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Divider,
  TextField,
  Button,
  Avatar,
  Grid,
} from '@mui/material';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';

// 샘플 데이터 (실제로는 API로 대체)
const samplePosts = [
    {
      id: 1,
      title: '서울에서 맛있는 비건 식당 추천해주세요!',
      author: 'vegan_lover',
      date: '2023년 10월 27일',
      likes: 15,
      content: '안녕하세요! 서울에서 친구랑 가볍게 저녁 먹으려고 하는데, 맛있는 비건 식당 있으면 추천 부탁드립니다. 가격대는 1-2만원대면 좋겠어요!',
      comments: [
        { id: 1, author: 'foodie', content: '이태원에 있는 "플랜트" 강추합니다! 분위기도 좋고 음식도 맛있어요.' },
        { id: 2, author: 'Alice', content: '홍대에 "어라운드 그린"도 괜찮아요. 샐러드랑 파스타 종류가 많아요.' },
      ],
    },
    {
      id: 2,
      title: '부산 여행 2박 3일 코스 좀 짜주세요.',
      author: 'busan_dream',
      date: '2023년 10월 26일',
      likes: 8,
      content: '이번 주말에 부산으로 2박 3일 여행가는데, 추천 코스 있을까요? 해운대, 광안리 말고 새로운 곳 가보고 싶어요!',
      comments: [],
    },
    {
      id: 3,
      title: '한국에서 운전면허 따는 법 아시는 분?',
      author: 'driver',
      date: '2023년 10월 25일',
      likes: 22,
      content: '안녕하세요, 한국에서 운전면허를 따고 싶은데 절차가 어떻게 되나요? 필요한 서류나 시험 과정에 대해 알려주시면 감사하겠습니다.',
      comments: [],
    },
  ];


/**
 * 게시글 상세 보기 컴포넌트
 * - URL 파라미터에서 게시글 ID를 가져와 해당 게시글의 내용을 보여줍니다.
 * - 추천(좋아요) 기능과 댓글 목록, 댓글 작성 폼을 포함합니다.
 */
function Post() {
  const { postId } = useParams();
  const post = samplePosts.find(p => p.id === parseInt(postId));
  const [liked, setLiked] = React.useState(false);

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
        <Typography variant="body1">{post.content}</Typography>
      </Box>

      {/* 추천 버튼 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Button
          variant={liked ? "contained" : "outlined"}
          startIcon={liked ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
          onClick={() => setLiked(!liked)}
        >
          추천 {post.likes + (liked ? 1 : 0)}
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />

      {/* 댓글 목록 */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          댓글 {post.comments.length}개
        </Typography>
        {post.comments.map(comment => (
          <Box key={comment.id} sx={{ display: 'flex', mb: 2 }}>
            <Avatar sx={{ width: 32, height: 32, mr: 2 }} />
            <Box>
              <Typography variant="body2" component="span" fontWeight="bold">{comment.author}</Typography>
              <Typography variant="body2" color="text.secondary">{comment.content}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* 댓글 작성 폼 */}
      <Box component="form" sx={{ mt: 4, display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          label="댓글을 입력하세요..."
          variant="outlined"
          size="small"
        />
        <Button type="submit" variant="contained">
          작성
        </Button>
      </Box>
    </Paper>
  );
}

export default Post;
