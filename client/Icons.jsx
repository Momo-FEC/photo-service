import React from 'react';
import styled from 'styled-components';

const Last = styled.div`
  padding-left: 4%;
  padding-right: 4%;
  text-align: center;
  font-size: 14px;
  width: 16%;
  float: left;
`;
const Details = styled.div`
   padding-left: 4%;
   padding-right: 4%;
   text-align: center;
   font-size: 14px;
   width: 16%;
   float: left;
   border-right: 1px lightgrey solid;
`;
const Images = styled.img`
   width: 40%;
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
            <p>Single Take Al</p>
          </Details>
          <Details>
            <Images src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/5GReady.svg"/>
            <p>5G Ready</p>
          </Details>
          <Details>
            <Images src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/Super-Fast-Charging-01.svg"/>
            <p>Super Fast Charging</p>
          </Details>
          <Last>
            <Images src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/8K-icon-01.svg"/>
            <p>8K Video</p>
          </Last>
        </div>
      )
    }
}

export default Icons;
