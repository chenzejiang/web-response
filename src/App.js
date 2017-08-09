import React from 'react';
import Header from './components/header';  // 头部
import Body from './components/body';  // 身体
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>

      </div>
    );
  }
}
