/*
 * @Author: nxl 
 * @Date: 2018-09-20 16:20:30 
 * @Last Modified by:   nxl 
 * @Last Modified time: 2018-09-20 16:20:30 
 */
import { injectGlobal } from 'styled-components'


injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
  .ant-layout{
    height: 100%;
  }
  .pointer {
    cursor: pointer;
  }

`
