// 15
import {model} from './model'
// 17 and 36
// import {templatesNotNeed} from './templatesNotNeed'
// console.log(templatesNotNeed)
// console.log(templatesNotNeed["title"]({value: 'text'}))
// let key = 'title'
// console.log(templatesNotNeed[key])
// 18
import './styles/main.css'
// 52
import {App} from "./classes/app";
// 38
// import {Site} from "./classes/site"
// 41
// import {Sidebar} from "./classes/sidebar"
// console.log(model)
// 6 and 38-1 and 51
// const site = new Site('#site')
// site.render(model)
// 46-1 and 51
// const updateCallback = newBlock => {
//   model.push(newBlock)
//   site.render(model)
// }
// 41-1 and 46 and 51
// new Sidebar('#panel', updateCallback)
// model.forEach(block => {
//   // console.log(block)
//   // let html = ''
//   // if(block.type === 'title') {
//   //   html = title(block)
//   // } else if(block.type === 'text') {
//   //   html = text(block)
//   // } else if(block.type === 'columns') {
//   //   html = columns(block)
//   // } else if(block.type === 'image') {
//   //   // 8-1
//   //   html = image(block)
//   // }
//   // const toHTML = templatesNotNeed[block.type]
//   // console.log(block.toHTML())
//   // if(false) {
//   //   $site.insertAdjacentHTML('beforeend', toHTML(block))
//   // }
//   // console.log(block)
//   site.insertAdjacentHTML('beforeend', block.toHTML())
// })
//52-1
new App(model)