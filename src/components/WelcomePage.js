import React from "react";
import styled from 'styled-components';

const WelcomeBanner = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const BannerImg = styled.img`
width: 600px;
height: 300px;
object-fit: cover`;

export default function WelcomePage() {
  return (
    <WelcomeBanner>
      <header>
        <BannerImg
          className="main-img"
          src="https://www.bing.com/th?id=OIP.8qOc-rnSDgVyfOL9j1gPywHaEK&pid=Api&rs=1"
          alt="rick morty cover in space"
        />
      </header>
    </WelcomeBanner>
  );
}
