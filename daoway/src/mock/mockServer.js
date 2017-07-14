import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/daoway/all', {
  data: data.serviceItems
})

Mock.mock('/daoway/item/baojie', {
  data: data.serviceItems[0]
})
Mock.mock('/daoway/item/anmo', {
  data: data.serviceItems[1]
})
Mock.mock('/daoway/item/weixiu', {
  data: data.serviceItems[2]
})



