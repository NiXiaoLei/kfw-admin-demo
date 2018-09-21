/*
 * @Author: nxl 
 * @Date: 2018-09-20 16:20:19 
 * @Last Modified by: nxl
 * @Last Modified time: 2018-09-21 18:05:56
 */
import styled from 'styled-components'

const headHeight = '45px'
export const AdminLogo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #002140;
  overflow: hidden;
  /* & img {
    flex: 0 0 ${headHeight};
    height: ${headHeight};   
    vertical-align: middle;
  } */

  & span{
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    margin: auto;
    font-size: 20px;
    text-align: center;
    color: #fff;
  }
` 


export const MenuIIB = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 100%;  
  
  /* padding: 0 24px; */
  /* border-right: 1px solid #ddd; */




  & .pointer {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 40px;
  }

`