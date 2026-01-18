// src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CircularProgress from '@mui/material/CircularProgress';
import SEO from '../components/SEO';
import { supabase } from '../supabaseClient';

/**
 * 홈페이지 컴포넌트
 * - 사이트의 목적과 주요 기능을 소개합니다.
 * - Material-UI 컴포넌트를 사용하여 세련되고 매력적인 UI를 구성합니다.
 */
function Home() {
  const [trendPosts, setTrendPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendPosts();
  }, []);

  const fetchTrendPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category', 'trend')
        .order('id', { ascending: false })
        .limit(3);

      if (error) throw error;
      setTrendPosts(data);
    } catch (error) {
      console.error('Error fetching trend posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="홈" 
        description="코리아 커넥트는 한국에 거주하는 외국인을 위한 최고의 커뮤니티입니다. 생활 정보, 비자 팁, 친구 찾기 등을 통해 한국 생활을 즐기세요."
      />
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          코리아 커넥트: 한국 생활의 모든 것
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          한국에 사는 외국인들을 위한 정보 공유 및 소통 커뮤니티
        </Typography>

        <Box sx={{ mt: 6, mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Weekly Trend & Tips
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            매주 업데이트되는 한국 생활 트렌드와 유용한 팁을 확인하세요.
          </Typography>
          
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={3} justifyContent="center">
              {trendPosts.map((post) => (
                <Grid item xs={12} md={4} key={post.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardActionArea component={RouterLink} to={`/admin/${post.id}`} sx={{ flexGrow: 1 }}>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}>
                          {post.content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item md={6}>
              <Typography variant="h6">자유 게시판</Typography>
              <Typography>자유롭게 질문하고, 경험을 공유하며 다른 사용자들과 소통하세요.</Typography>
              <Button component={RouterLink} to="/community" variant="outlined" sx={{ mt: 1 }}>
                바로가기
              </Button>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h6">주제 요청</Typography>
              <Typography>커뮤니티에서 다루었으면 하는 주제를 직접 제안해보세요.</Typography>
              <Button component={RouterLink} to="/request" variant="outlined" sx={{ mt: 1 }}>
                바로가기
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Button
            component={RouterLink}
            to="/auth"
            variant="contained"
            size="large"
          >
            커뮤니티 참여하기
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default Home;
