import React from 'react';
import Header from './components/header';  // 头部
import Body from './components/body';  // 身体
import Box from './components/box';  // iframe
// <Body></Body>
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Box></Box>
      </div>
    );
  }
}
