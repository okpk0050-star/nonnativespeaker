// src/data/posts.js

export const posts = [
  // Community Posts (1-100)
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
    category: 'community'
  },
  {
    id: 2,
    title: '부산 여행 2박 3일 코스 좀 짜주세요.',
    author: 'busan_dream',
    date: '2023년 10월 26일',
    likes: 8,
    content: '이번 주말에 부산으로 2박 3일 여행가는데, 추천 코스 있을까요? 해운대, 광안리 말고 새로운 곳 가보고 싶어요!',
    comments: [],
    category: 'community'
  },
  {
    id: 3,
    title: '한국에서 운전면허 따는 법 아시는 분?',
    author: 'driver',
    date: '2023년 10월 25일',
    likes: 22,
    content: '안녕하세요, 한국에서 운전면허를 따고 싶은데 절차가 어떻게 되나요? 필요한 서류나 시험 과정에 대해 알려주시면 감사하겠습니다.',
    comments: [],
    category: 'community'
  },

  // Weekly Trend & Tips Posts (101-200)
  {
    id: 101,
    title: 'MZ세대 핫플: 성수동 카페 투어 가이드',
    author: 'TrendHunter',
    date: '2023년 11월 5일',
    likes: 150,
    content: '요즘 한국의 MZ세대 사이에서 가장 핫한 성수동! 공장을 개조한 힙한 카페부터 팝업 스토어까지, 성수동에서 꼭 가봐야 할 카페 5곳을 소개합니다. 주말에는 웨이팅이 필수이니 오픈런을 추천해요!',
    comments: [],
    category: 'trend'
  },
  {
    id: 102,
    title: '편의점 신상 간식 리뷰: 품절대란의 주인공',
    author: 'SnackReviewer',
    date: '2023년 11월 3일',
    likes: 98,
    content: '편의점을 돌아다녀도 구하기 힘들다는 바로 그 과자! 드디어 구했습니다. 바삭한 식감과 짭조름한 맛이 맥주 안주로 딱이네요. GS25와 CU 앱을 통해 재고 조회를 하고 가시는 것을 추천드립니다.',
    comments: [],
    category: 'trend'
  },
  {
    id: 103,
    title: '한국의 퍼스널 컬러 진단 열풍, 나에게 맞는 색은?',
    author: 'ColorExpert',
    date: '2023년 11월 1일',
    likes: 210,
    content: '최근 한국에서는 자신의 피부톤에 맞는 "퍼스널 컬러"를 진단받는 것이 유행입니다. 웜톤, 쿨톤을 넘어 봄, 여름, 가을, 겨울 세부 톤까지! 강남과 홍대 주변의 유명 진단 샵 가격 정보와 예약 팁을 알려드립니다.',
    comments: [],
    category: 'trend'
  },

  // Request Posts (201-300)
  {
    id: 201,
    title: '배달앱 사용법에 대한 자세한 가이드가 필요해요.',
    author: 'newbie',
    date: '2023년 10월 27일',
    likes: 30,
    content: '한국은 배달 문화가 발달했다고 들었는데, 배달의민족이나 요기요 같은 앱을 어떻게 사용하는지 모르겠어요. 결제 수단 등록부터 주문까지 자세히 알려주실 분 계신가요?',
    comments: [],
    category: 'request'
  },
  {
    id: 202,
    title: '각 지역별 쓰레기 분리수거 방법에 대해 알려주세요.',
    author: 'eco_friendly',
    date: '2023년 10월 26일',
    likes: 45,
    content: '한국은 분리수거가 엄격하다고 들었습니다. 일반 쓰레기, 음식물 쓰레기, 재활용품을 어떻게 구분해서 버려야 하나요? 지역마다 봉투 색깔도 다른 것 같아서 헷갈립니다.',
    comments: [],
    category: 'request'
  },
];

export const getPostsByCategory = (category) => {
  return posts.filter(post => post.category === category);
};

export const getPostById = (id) => {
  return posts.find(post => post.id === parseInt(id));
};
