import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const List = styled.ul`
   height: 720px;
   `;
const Selected = styled.img`
   border: 1px lightgrey solid;
   height: 10%;
   margin-bottom: 5px;
   opacity: 1;
   `;
const Image = styled.img`
   border: 1px lightgrey solid;
   height: 10%;
   margin-bottom: 5px;
   opacity: .5;
   `;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainId: 1
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
      } else {

      }
    }
    var element = document.getElementById(id);
    element.style.opacity = '1';
  }

  // componentDidMount() {
  //   this.changeStyle(this.state.mainId)
  // }

  render() {
      return (
        <div>
          <List>
            {this.props.urls.map((url) => {
              if(url.imageId === this.state.mainId) {
                return <Selected key={url.imageId} className='images' id={url.imageId} src={url.imageUrl} onClick={() => {this.props.setNew(url.imageUrl), this.changeId(url.imageId)}}></Selected>
              }
              return <Image key={url.imageId} className='images' id={url.imageId} src={url.imageUrl} onClick={() => {this.props.setNew(url.imageUrl), this.changeId(url.imageId)}}></Image>
            })}

          </List>
        </div>
      )
    }
}

export default App;
