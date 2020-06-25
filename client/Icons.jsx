import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';


const Details = styled.div`
   font-size: 14px;
   width: 10%;
   padding-left: 6%;
   padding-right: 6%;
   float: left;
   border-right: 1px lightgrey solid;
`;


class Icons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <Details>
            <img src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/Circle-icon-01.svg"/>
            <p>Single Take Al</p>
          </Details>
          <Details>
            <img src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/5GReady.svg"/>
            <p>5G Ready</p>
          </Details>
          <Details>
            <img src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/Super-Fast-Charging-01.svg"/>
            <p>Super Fast Charging</p>
          </Details>
          <Details>
            <img src="https://fec-photos-carousel.s3-us-west-1.amazonaws.com/Icons/8K-icon-01.svg"/>
            <p>8K Video</p>
          </Details>
        </div>
      )
    }
}

export default Icons;
