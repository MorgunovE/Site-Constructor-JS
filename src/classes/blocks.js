// 31  and 33-1 change to local class
import {col, css, row} from "../utils"; //auto import

class Block {
  //delete type and in super also
  constructor(value, options) {
    this.value = value
    this.options = options
  }
  
  toHTML() {
    throw new Error('Method toHTML need to be realised')
  }
}

// 33
export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  
  toHTML() {
    // 35
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  
  toHTML() {
    // 35-1
    const {imageStyles: is, alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  
  // 35-2
  toHTML() {
    const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  
  // 35-3
  toHTML() {
    // const temp = css(this.options.styles)
    // console.log(temp)
    // return row(col(`<p>${this.value}</p>`), temp)
    
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}