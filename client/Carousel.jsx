import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Buttons = styled.button`
   background-color: white;
   border: none;
   font-size: 60px;
   margin-left: 20%;
`;

const List = styled.div`

   padding-right: 30%;
   height: 500px;
   overflow-x: hidden;
   overflow-y: hidden;
   `;
const Selected = styled.img`
   border: 1px lightgrey solid;
   height: 16%;
   margin-bottom: 5px;
   opacity: 1;
   `;
const Image = styled.img`
   border: 1px lightgrey solid;
   height: 16%;
   margin-bottom: 5px;
   opacity: .5;
   `;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainId: false
    }
    this.changeStyle = this.changeStyle.bind(this);
    this.changeId = this.changeId.bind(this);
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
          <Buttons><i className="fa fa-chevron-up"></i></Buttons>
          <List>
            {console.log(this.props)}
            {this.props.urls.map((url) => {
              if(url.imageId === (this.state.mainId || this.props.urls[0].imageId)) {
                return <Selected key={url.imageId} className='images' id={url.imageId} src={url.imageUrl} onClick={() => {this.props.setNew(url.imageUrl), this.changeId(url.imageId)}}></Selected>
              }
              return <Image key={url.imageId} className='images' id={url.imageId} src={url.imageUrl} onClick={() => {this.props.setNew(url.imageUrl), this.changeId(url.imageId)}}></Image>
            })}
          </List>
          <Buttons><i className="fa fa-chevron-down"></i></Buttons>
        </div>
      )
    }
}

export default Carousel;
