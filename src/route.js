/*
 * @Author: nxl 
 * @Date: 2018-09-20 16:20:04 
 * @Last Modified by: nxl
 * @Last Modified time: 2018-09-20 16:34:54
 */
import React, { Component, Fragment } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './pages/Admin';

const routerRules = [
  { path: '/', exact: true, component: Admin, key: 0 },
  { path: '/admin', component: Admin, key: 1 },
  { path: '/login/', component: Admin, key: 2 },
]



// 数组映射路由组件
const routerGener = (rules) => rules.map((rule, index) => <Route {...rule } key={rule.key} ></Route> )





export default class MyRoute extends Component {

  
  render() {

    
    return (
      <Fragment>
        <HashRouter>
          <App>
            {/* 第一层路由在这， 剩下的路由写在各自的文件 */}
            <Switch>
              {/* { renderRouter(routerRules) } */}
              <Route path='/admin' component={Admin} ></Route>
            </Switch>
          </App>
        </HashRouter>
      </Fragment>
    )
  }
}
