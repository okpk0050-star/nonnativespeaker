// src/components/NewPost.jsx

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

/**
 * 새 글 작성 컴포넌트
 * - 제목과 내용을 입력받아 새 게시글을 생성하는 폼입니다.
 */
function NewPost() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        새 글 작성
      </Typography>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <TextField label="제목" variant="outlined" required />
        <TextField
          label="내용"
          variant="outlined"
          multiline
          rows={10}
          required
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button variant="outlined">취소</Button>
          <Button type="submit" variant="contained">
            작성 완료
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default NewPost;
