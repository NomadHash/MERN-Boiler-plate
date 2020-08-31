import React, { useEffect } from 'react';
// import axios from 'axios';

const LandingPage = () => {
  useEffect(() => {
    // axios.get("api/hello").then((response) => console.log(response));
    console.log('root page');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      시작 페이지
    </div>
  );
};

export default LandingPage;
