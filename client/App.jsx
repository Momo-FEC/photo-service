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
   height: 900px;
   `;
const Main = styled.div`
   padding-right: 20%;
   width: 65%;
   height: 70%;
   float: right;
   clear: right;
   margin: 0;
   display: block;
   cursor: zoom-in;
   overflow: hidden;
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
      mainImg: '',
      zoom: false
    };
    this.getUrls = this.getUrls.bind(this);
    this.setNewMain = this.setNewMain.bind(this);
    this.zoomFeature = this.zoomFeature.bind(this);
    this.moveZoom = this.moveZoom.bind(this);
  }

  setNewMain(url) {
    this.setState({mainImg: url});
  }

  getUrls(phoneId) {
    $.ajax({
      method: 'GET',
      url: `http://127.0.0.1:3001/phone${window.location.pathname}`,
      success: function(result) {
        this.setState({urls: result});
        this.setState({mainImg: result[0].imageUrl});
      }.bind(this)
    });
  }

  moveZoom() {
    var element = document.getElementById('zoomedImg');

    element.addEventListener('mousemove', (e) => {
      element.style.backgroundPositionX = -e.offsetX + 'px';
      element.style.backgroundPositionY = -e.offsetY + 'px';
    });
  }

  zoomFeature() {
    this.setState(prevState => ({
      zoom: !prevState.zoom
    }));
  }

  componentDidMount() {
    this.getUrls();
  }
  render() {
    if (this.state.zoom === false) {
      return (
        <div>
        <Element>
          <Slide>
            <Slider urls={this.state.urls} setNew={this.setNewMain}/>
          </Slide>
          <Main>
            <Display image={this.state.mainImg} zoomFunc={this.zoomFeature}/>
          </Main>
          <Icons/>
        </Element>
        </div>
      );
    } else {
      return (
        <Element id='zoomedImg' style={{
          cursor: 'zoom-out',
          overflow: 'hidden',
          backgroundImage: 'url(' + this.state.mainImg + ')',
          backgroundSize: '200%', backgroundRepeat: 'no-repeat'}}
          onClick={this.zoomFeature} onMouseOver={() => { this.moveZoom(); }}>
        </Element>
      );
    }
  }
}

export default App;
