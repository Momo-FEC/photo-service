import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const Element = styled.div`
   width: 30%;
   height: 720px;
   `;
const Main = styled.div`
   width: 58%;
   height: 30%;
   float: right;
   `;
const Slide = styled.div`
   width: 30%;
   height: 30px;
   float: left;
   `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      mainImg: 'https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone1.webp'
    }
    this.getUrls = this.getUrls.bind(this);
    this.setNewMain = this.setNewMain.bind(this);
  }

  setNewMain(url) {
    this.setState({mainImg: url})
  }

  getUrls(phoneId) {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/phone',
      success: function(result) {
        console.log(result)
        this.setState({urls: result})
      }.bind(this)
    })
  }
  componentDidMount() {
    this.getUrls()
  }
  render() {
      return (
        <Element>
          <Slide>
            <Carousel urls={this.state.urls} setNew={this.setNewMain}/>
          </Slide>
          <Main>
          <img src={this.state.mainImg}></img>
          </Main>

        </Element>
      )
    }
}

export default App;
