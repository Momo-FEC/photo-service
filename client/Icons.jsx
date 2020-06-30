import React from 'react';
import styled from 'styled-components';

const Last = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  text-align: center;
  font-size: 14px;
  width: 16%;
  float: left;
`;
const Details = styled.div`
   padding-left: 3%;
   padding-right: 3%;
   text-align: center;
   font-size: 14px;
   width: 16%;
   float: left;
   border-right: 1px lightgrey solid;
`;
const Images = styled.img`
   width: 40%;
`;
const Text = styled.p`
   font-family: Arial;
`;


class Icons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Details>
          <Images src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/Circle-icon-01.svg"/>
          <Text>Single Take Al</Text>
        </Details>
        <Details>
          <Images src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/5GReady.svg"/>
          <Text>5G Ready</Text>
        </Details>
        <Details>
          <Images src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/Super-Fast-Charging-01.svg"/>
          <Text>Super Fast Charging</Text>
        </Details>
        <Last>
          <Images src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/8K-icon-01.svg"/>
          <Text>8K Video</Text>
        </Last>
      </div>
    );
  }
}

export default Icons;
