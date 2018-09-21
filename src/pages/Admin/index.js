/*
 * @Author: nxl 
 * @Date: 2018-09-20 16:19:59 
 * @Last Modified by: nxl
 * @Last Modified time: 2018-09-21 15:40:42
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
const MenuItemGroup = Menu.ItemGroup;

const routerRules = [
  { path: '/index', exact: true, component: Chart },
  { path: '/login/', exact: true, component: Admin }
]


const headMenu = [
  { title: '标题一', path: '/admin/index' },
  { title: '标题二', path: '/admin/index' },
  { title: '标题三', path: '/admin/index' },
  { title: '标题四', path: '/admin/index' }
]

const LeftMenu = [
  { title: '标题一', path: '/admin/index', 
    children: [
      // {title: }
    ]}
]




export default class Admin extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      defPath: this.props.match.path,
      isMenuFold: false
    }
    
    this.leftMenuGener = this.leftMenuGener.bind(this)
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }


  /**
   * 数组生成 元素
   * path: `${this.state.defPath}${rule.path}`}
   * @param {Array} rules
   * @return { Element-Array }
   */
  routerGener = rules => rules.map((rule, index) => ( <Route {...{ ...rule, path: `${this.state.defPath}${rule.path}` }}   key={index} /> ))
  headMenuGener = rules => rules.map((rule, index) => ( <Menu.Item key={index}>{ rule.title }<Icon type="close" theme="outlined" /></Menu.Item> ))

  // leftMenuGener = (rules) => rules.map((rule, index) => (
  //   <SubMenu key={index} title={<span><Icon type="mail" /><span>Navigation One{index}</span></span>}>
  //     <MenuItemGroup title="Item 1">
  //       <Menu.Item key="1">Option 1</Menu.Item>
  //       <Menu.Item key="2">Option 2</Menu.Item>
  //     </MenuItemGroup>
  //     <MenuItemGroup title="Iteom 2">
  //       <Menu.Item key="3">Option 3</Menu.Item>
  //       <Menu.Item key="4">Option 4</Menu.Item>
  //     </MenuItemGroup>
  //   </SubMenu>
  // ))



  /**
   *  生成 menu 菜单
   *
   * @returns
   * @memberof nxl
   */
  leftMenuGener(rules) {
    console.log(rules)
    // const returnGroup = () => {
    // }

    return rules.map((rule, index) => (
      <SubMenu key={index} title={<span><Icon type="mail" /><span>Navigation One{index}</span></span>}>
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <SubMenu title="2级子菜单">
          <Menu.Item key="11">Option 1</Menu.Item>
          <Menu.Item key="21">Option 2</Menu.Item>
          <SubMenu title="3级子菜单">
            <Menu.Item key="13">Option 33</Menu.Item>
            <Menu.Item key="24">Option 333</Menu.Item>
            <SubMenu title="4级子菜单">
              <Menu.Item key="133">Option 314443</Menu.Item>
              <Menu.Item key="243">Option 3344443</Menu.Item>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="5"> Option 2 </Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
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
    const { isMenuFold } = this.state
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
                <MenuIIB onClick={this.changeMenuStatusHandle} >
                  <Icon type="menu-fold" onClick={this.changeMenuStatusHandle} className="pointer ant-menu-item" theme="outlined" />
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
