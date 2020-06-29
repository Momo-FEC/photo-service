import React from 'react';
import styled from 'styled-components';

const TopButton = styled.button`
   color: grey;
   background-color: white;
   border: none;
   font-size: 60px;
   margin-left: 15%;
`;
const BottomButton = styled.button`
   background-color: white;
   border: none;
   font-size: 60px;
   margin-left: 15%;
`;

const List = styled.div`
   margin: 4px;
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
      scrollPosition: 0,
      mainId: false
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.changeId = this.changeId.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollUp(amount) {
    if (this.state.scrollPosition > -1) {
      this.setState({scrollPosition: this.state.scrollPosition - amount-10});
      document.getElementById('list').scrollTo({top: this.state.scrollPosition, behavior: 'smooth'});
    }
    if (this.state.scrollPosition === 0) {
      document.getElementById('top').style.color = 'grey';
      document.getElementById('bottom').style.color = 'black';
    } else if (this.state.scrollPosition > 0) {
        if (this.state.scrollPosition > ((this.props.urls.length - 5) * (72.5+5))) {
          document.getElementById('bottom').style.color = 'grey';
          document.getElementById('top').style.color = 'black';
        } else {
          document.getElementById('bottom').style.color = 'black';
          document.getElementById('top').style.color = 'black';
        }
    }

    console.log(this.state.scrollPosition,"scrolled up")
  }

  scrollDown(amount) {
    if (this.state.scrollPosition < ((this.props.urls.length - 5) * (72.5))) {
      this.setState({scrollPosition: this.state.scrollPosition + amount+10});
      setTimeout(console.log('yo'),2000)
      document.getElementById('list').scrollTo({top: this.state.scrollPosition, behavior: 'smooth'});
      console.log(this.state.scrollPosition, "scrolled down")
    }
    if (this.state.scrollPosition === 0) {
      document.getElementById('top').style.color = 'grey';
      document.getElementById('bottom').style.color = 'black';
    } else if (this.state.scrollPosition > 0) {
        if (this.state.scrollPosition > ((this.props.urls.length - 5) * (72.5))) {
          document.getElementById('bottom').style.color = 'grey';
          document.getElementById('top').style.color = 'black';
        } else {
          document.getElementById('bottom').style.color = 'black';
          document.getElementById('top').style.color = 'black';
        }
    }
  }

  changeId(id) {
    this.setState({mainId: id});
    this.changeStyle(id);
  }

  changeStyle(id) {
    for (var i = 0; i < this.props.urls.length; i++) {
      if (this.props.urls[i].imageId === id) {
        var element = document.getElementById(id);
        element.style.opacity = '1';
      }
    }
  }

  render() {
    return (
      <div>
        <TopButton id='top' onClick={() => { this.scrollUp(72.5); }}><i className="fa fa-chevron-up"></i></TopButton>
        <List id='list'>
          {this.props.urls.map((url) => {
            if (url.imageId === (this.state.mainId || this.props.urls[0].imageId)) {
              return <Selected key={url.imageId} className='images' id={url.imageId} src={url.imageUrl} onClick={() => { this.props.setNew(url.imageUrl); this.changeId(url.imageId); }}></Selected>
            }
            return <Image key={url.imageId} className='images' id={url.imageId} src={url.imageUrl} onClick={() => { this.props.setNew(url.imageUrl), this.changeId(url.imageId); }}></Image>
          })}
        </List>
        <BottomButton id='bottom' onClick={() => { this.scrollDown(72.5); }}><i className="fa fa-chevron-down"></i></BottomButton>
      </div>
    );
  }
}

export default Carousel;