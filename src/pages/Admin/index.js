/*
 * @Author: nxl 
 * @Date: 2018-09-20 16:19:59 
 * @Last Modified by: nxl
 * @Last Modified time: 2018-09-21 18:14:20
 */
import React, { PureComponent } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu, Icon, Breadcrumb, Button } from 'antd';
import { NavLink } from 'react-router-dom'
import Chart from './Chart'
import { 
    AdminLogo, 
    MenuIIB
  } from './style'
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item

const routerRules = [
  { path: '/index', exact: true, component: Chart },
  { path: '/login/', exact: true, component: Admin }
]


const headMenu = [
  { title: '标题一', to: '/admin/index' },
  { title: '标题一', to: '/admin/index2' },
  { title: '标题一', to: '/admin/index3' },
  { title: '标题一', to: '/admin/index4' },
  { title: '标题一', to: '/admin/index5' },
  { title: '标题一', to: '/admin/index6' }
]

const LeftMenu = [
  { title: '标题一', path: '/admin/index', 
    children: [
      // {link: }
    ]}
]




export default class Admin extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      defPath: this.props.match.path,
      isMenuFold: false,
      headMenu
    }
    
    this.leftMenuGener = this.leftMenuGener.bind(this)
  }

  toggle = () => {
    console.log('被触发了')
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  headMenuHandle = (e, { type, index, to}) => {
    switch(type){
      case 'del':
        let headMenu = [ ...this.state.headMenu]
        headMenu.splice(index-1, 1)
        this.setState({ headMenu })
        break;
      case 'cut':
        this.props.history.push(to)
        break;
    }
  }


  /**
   * 数组生成 元素
   * path: `${this.state.defPath}${rule.path}`}
   * @param {Array} rules
   * @return { Element-Array }
   */
  routerGener = rules => rules.map((rule, index) => ( <Route {...{ ...rule, path: `${this.state.defPath}${rule.path}` }}   key={index} /> ))
  headMenuGener = rules => rules.map((rule, index) => {
    const { to } = rule
    return (
      <MenuItem key={index}
        // 路由跳转
        onClick={ (e) => this.headMenuHandle(e, {type: 'cut', to })} >
          { rule.title }
          <Icon type="close"   
            theme="outlined"  
            style={{marginLeft: 5}}
            // 删除标签
            onClick={ (e) => this.headMenuHandle(e , {type: 'del', to })} 
          />
      </MenuItem> 
    )
  })

  /**
   *  生成 menu 菜单
   *
   * @returns
   * @memberof nxl
   */
  leftMenuGener(rules) {
    // const returnGroup = () => {
    // }

    return rules.map((rule, index) => (
      <SubMenu key={index} title={<span>
        <Icon type="mail" />
          <span>Navigation One{index}</span>
        </span>} >
        <MenuItem key="1">Option 1</MenuItem>
        <MenuItem key="2">Option 2</MenuItem>
        <SubMenu title="2级子菜单">
          <MenuItem key="11">Option 1</MenuItem>
          <MenuItem key="21">Option 2</MenuItem>
          <SubMenu title="3级子菜单">
            <MenuItem key="13">Option 33</MenuItem>
            <MenuItem key="24">Option 333</MenuItem>
            <SubMenu title="4级子菜单">
              <MenuItem key="133">Option 314443</MenuItem>
              <MenuItem key="243">Option 3344443</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <MenuItem key="5"> Option 2 </MenuItem>
        <MenuItem key="3">Option 3</MenuItem>
        <MenuItem key="4">Option 4</MenuItem>
      </SubMenu>
    ))
  }



  /**
   * 菜单栏是否收起
   *  
   * @memberof nxl
   */
  changeMenuStatusHandle = () => {
    const isMenuFold = !this.state.isMenuFold
    this.setState(()=>({ isMenuFold }))
  }



  render() {
    const { isMenuFold, headMenu } = this.state
    return (
     
      <Layout>
        <Header className="header" style={{padding: 0}}>
          <Layout>
            <Sider width={220} style={{ background: '#fff' }} collapsed={ isMenuFold } > 
              <NavLink to="/home" >
                <AdminLogo>
                  {/* <img src="/assets/logo-ant.svg" alt=""/> */}
                  { isMenuFold ? null : <span className="title" > XX后台管理系统</span> }
                </AdminLogo>
              </NavLink>
            </Sider>
            <Content>
             
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '62px'}}
              > 
                {/* 菜单收缩开关 */}
                <MenuIIB  >
                  <Icon 
                    type={ isMenuFold? 'menu-unfold' : 'menu-fold' }  
                    onClick={this.changeMenuStatusHandle}
                    className="pointer ant-menu-item" theme="outlined" 
                  />
                </MenuIIB>
                { this.headMenuGener(headMenu) }
                
              </Menu>
            </Content>
          </Layout>
        </Header>
        {/* 左侧布局 */}
        <Layout>
          <Sider width={220} style={{ background: '#001529' }} collapsed={ isMenuFold } >

            <Menu theme="dark" mode="vertical" >
              { this.leftMenuGener([0,1,2,3,7]) } 
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Switch>
                { this.routerGener( routerRules ) }
                
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}


// import React, { Component } from 'react'

// export default class Admin extends Component {
//   render() {
//     return (
//       <div>
        


//         {this.props.children}
//       </div>
//     )
//   }
// }
