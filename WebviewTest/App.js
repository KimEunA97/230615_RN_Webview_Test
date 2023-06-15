import React from 'react';
import {WebView} from 'react-native-webview';

const MyWebView = () => {
  return (
    <WebView
      source={{
        uri: 'https://map.naver.com/v5/directions/14179668.201492716,4349132.285307236,%EC%95%A4%ED%8B%B0%EC%95%A4%EC%8A%A4%ED%94%84%EB%A0%88%EC%A6%90%20%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84%EB%B0%B1%ED%99%94%EC%A0%90%ED%83%80%EC%9E%84%EC%9B%94%EB%93%9C%EC%A0%90,1844169205,PLACE_POI/-/-/transit?gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oImRwlOanjwbw4ex7WU7oLVblHxIuZIdGle2X6b7j51yI9UIZ6bH4MaAvzbEALw_wcB&c=17.24,0,0,0,dh',
      }}
    />
  );
};

export default MyWebView;
