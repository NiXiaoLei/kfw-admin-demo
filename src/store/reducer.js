/*
 * @Author: nxl 
 * @Date: 2018-09-21 11:33:34 
 * @Last Modified by: nxl
 * @Last Modified time: 2018-09-21 14:17:16
 */
import { fromJS } from 'immutable'

const defaultState = fromJS({
  nxl : 'nixiaolei'
})

export default (state = defaultState, action = {}) => {
  switch(action.type){
    case 'change':
      return state.merge(fromJS({...action.payload}))
    default: 
      return state
  }

}