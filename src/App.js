import React from 'react';
import Header from './components/header';  // 头部
import Body from './components/body';  // 身体
import Box from './components/box';  // iframe

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* 头部 */}
        <Header></Header>
        {/* 搜索界面 */}
        <Body></Body>
        {/* 操作界面 */}
        <Box></Box>

      </div>
    );
  }
}
