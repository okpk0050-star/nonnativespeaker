// src/components/PostList.jsx

import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Divider,
  Box,
} from '@mui/material';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined';

/**
 * 게시글 목록 컴포넌트
 * - 게시글 데이터 배열을 받아 목록 형태로 보여줍니다.
 * - 각 게시글에는 제목, 작성자, 작성일, 추천 수, 댓글 수가 표시됩니다.
 */
function PostList({ posts }) {
  return (
    <Paper elevation={2}>
      <List>
        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <ListItem button component="a" href={`/community/${post.id}`}>
              <ListItemText
                primary={
                  <Typography variant="h6" component="h3">
                    {post.title}
                  </Typography>
                }
                secondary={
                  <Box
                    component="span"
                    sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                    >
                      {post.author} · {post.date}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                      <ThumbUpAltOutlined sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="body2">{post.likes}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1.5 }}>
                      <ChatBubbleOutlineOutlined sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="body2">{post.comments.length}</Typography>
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            {index < posts.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default PostList;
