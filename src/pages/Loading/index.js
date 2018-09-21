import React, { Component }  from 'react'
import { Skeleton } from 'antd';


class Loading extends React.Component {
  


  render() {
    return (
      <Skeleton active paragraph={{ rows: 15 }} />
    ) 
  }
}



export default Loading