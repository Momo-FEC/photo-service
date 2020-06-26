import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

import Slider from './Carousel.jsx';
import Icons from './Icons.jsx';
import Display from './Display.jsx';

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({adapter: new Adapter()});

const Element = styled.div`
   padding-left: 24px;
   height: 750px;
   width: 45%;
   `;
const Main = styled.div`
   height: 75%;
   width: 85%;
   float: right;
   clear: right;
   margin: 0;
   display: block;
   `;
const Slide = styled.div`
   width: 15%;
   height: 75%;
   display: inline-block;
   `;
const Botton = styled.div`
    width: 90%;
    padding-left: 60px;
    clear: left;
 `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      mainImg: ''
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
      url: 'http://localhost:3001/phone/5',
      success: function(result) {
        this.setState({urls: result})
        this.setState({mainImg: result[0].imageUrl})
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
            <Slider urls={this.state.urls} setNew={this.setNewMain}/>
          </Slide>
          <Main>
            <Display image={this.state.mainImg}/>
          </Main>
          <Icons/>
        </Element>
      )
    }
}

export default App;
