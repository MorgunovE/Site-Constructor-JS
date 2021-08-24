// 44
import {block} from "../utils";
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./blocks"; // auto import

// 40
export class Sidebar {
  // 47
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    // 47-1
    this.update = updateCallback
    // 42
    this.init()
  }
  
  // 42-1
  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    // 45
    this.$el.addEventListener('submit', this.add.bind(this)) // 47-3 add context
  }
  
  get template() {
    return [
      block('text'),
      block('title'),
      block('columns'),
      block('image')
    ].join('')
  }
  
  // 45-1
  add(event) {
    event.preventDefault()
    // console.log(event.target)
    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value
    // debugger
    // let newBlock = type === 'text'
    //   ? new TextBlock(value, {styles})
    //   : new TitleBlock(value, {styles})
    let newBlock
    if(type === 'text') {
      newBlock = new TextBlock(value, {styles})
    } else if(type === 'title') {
      newBlock = new TitleBlock(value, {styles})
    }else if(type === 'columns') {
      newBlock = new ColumnsBlock(value, {styles})
    }else if(type === 'image') {
      newBlock = new ImageBlock(value, {styles})
    }
    // console.log(newBlock)
    // 47-2
    // debugger
    this.update(newBlock)
    event.target.value.value = ''
    event.target.styles.value = ''
  }
}