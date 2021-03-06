import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  margin-top: 5%;
  overflow: hidden;
   `;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Image src={this.props.image} onClick={this.props.zoomFunc}></Image>
      </div>
    );
  }
}

export default App;
