/*
 * @Author: nxl 
 * @Date: 2018-09-20 16:20:08 
 * @Last Modified by: nxl
 * @Last Modified time: 2018-09-21 16:27:18
 */
import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { Button } from 'antd'
import { actionCreator } from '../../../store'
import G2 from '@antv/g2';



 class Chart extends PureComponent {

  chartInit = () => {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
    // Step 1: 创建 Chart 对象
    const chart = new G2.Chart({
      container: 'c1', // 指定图表容器 ID
      width : 600, // 指定图表宽度
      height : 300 // 指定图表高度
    });
    // Step 2: 载入数据源
    chart.source(data);
    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval().position('genre*sold').color('genre')
    // Step 4: 渲染图表
    chart.render();
  }

  componentDidMount() {
    this.chartInit()
  }

  render() {
    const { name, changeMyName } = this.props
    return (
      <div>
        <div id="c1"></div>
        { name }
        <Button type="primary" onClick={changeMyName}  >点我变名字</Button>
      </div>
    )
  }
}

// 映射 state
const mapStateToProps = state => ({
  name: state.get('nxl')
})

// 映射 dispatch
const mapDispatchToProps = (dispatch) => ({
  changeMyName(){
    dispatch(actionCreator.changeName('吴大龙'))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Chart)