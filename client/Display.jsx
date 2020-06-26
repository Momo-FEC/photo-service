import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Image = styled.img`
  margin-right: 5%;
  width: 90%;
  margin-top: 5%;
   `;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
        <Image src={this.props.image}></Image>
        </div>
      )
    }
}

export default App;