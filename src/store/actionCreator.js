import * as constants from './constants'
import axios from 'axios'


export const changeName = (name) => ({ type : 'change', payload: { nxl: name }})