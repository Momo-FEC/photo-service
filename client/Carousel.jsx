import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Buttons = styled.button`
   background-color: white;
   border: none;
   font-size: 60px;
   margin-left: 15%;
`;

const List = styled.div`
   height: 500px;
   right: -17px;
   overflow-y: hidden;
   overflow-x: hidden;
   `;
const Selected = styled.img`
   border: 1px lightgrey solid;
   height: 14.5%;
   margin-bottom: 5px;
   opacity: 1;
   `;
const Image = styled.img`
   border: 1px lightgrey solid;
   height: 14.5%;
   margin-bottom: 5px;
   opacity: .5;
   `;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 150,
      mainId: false
    }
    this.changeStyle = this.changeStyle.bind(this);
    this.changeId = this.changeId.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollUp(amount) {
    this.setState({scrollPosition: this.state.scrollPosition - amount})
    document.getElementById('random').scrollTo({top: this.state.scrollPosition, behavior: 'smooth'})
  }

  scrollDown(amount) {
    if(this.state.scrollPosition <= 200) {
      this.setState({scrollPosition: this.state.scrollPosition + amount})
      document.getElementById('random').scrollTo({top: this.state.scrollPosition, behavior: 'smooth'})
    }
  }

  changeId(id) {
    this.setState({mainId: id});
    this.changeStyle(id)
  }

  changeStyle(id) {
    for(var i = 0; i < this.props.urls.length; i++) {
      if(this.props.urls[i].imageId === id) {
        var element = document.getElementById(id);
        element.style.opacity = '1';
      }
    }
  }

  render() {
      return (
        <div>
          <Buttons onClick={() => {this.scrollUp(72.5)}}><i className="fa fa-chevron-up"></i></Buttons>
          <List id='random'>
            {console.log(this.props)}
            {this.props.urls.map((url) => {
              if(url.imageId === (this.state.mainId || this.props.urls[0].imageId)) {
                return <Selected key={url.imageId} className='images' id={url.imageId} src={url.imageUrl} onClick={() => {this.props.setNew(url.imageUrl), this.changeId(url.imageId)}}></Selected>
              }
              return <Image key={url.imageId} className='images' id={url.imageId} src={url.imageUrl} onClick={() => {this.props.setNew(url.imageUrl), this.changeId(url.imageId)}}></Image>
            })}
          </List>
          <Buttons onClick={() => {this.scrollDown(72.5)}}><i className="fa fa-chevron-down"></i></Buttons>
        </div>
      )
    }
}

export default Carousel;