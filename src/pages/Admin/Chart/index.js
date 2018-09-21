import React, { Component } from 'react'
import Loadable from 'react-loadable';
import Loading from '../../Loading'

const LoadableComponent = Loadable({
  // 导入需要异步加载的文件, 填写 ./ 的话就是加载当前目录的 index.js, 这里是异步加载的新语法
loader: () => import('./chart'),
  //  加载未完成时显示的内容， 可以直接是jsx ， 推荐写成如下， 但需要导入react, 
loading(){
  // return <Loading/>
  return <Loading/>
},
});

 // 有状态组件导出方式
export default class Chartasync extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}

// 无状态组件的导出方式， 取其一即可
// export default () => <LoadableComponent />
