// 23
import {col, row, css} from './utils'

function title(block) {
  // return `
  //   <div class="row">
  //     <div class="col-sm">
  //       <h1>${block.value}</h1>
  //     </div>
  //   </div>
  // `
  // 23-1
  // 26
  const {tag = 'h1', styles} = block.options
  // const tag = block.options.tag ?? 'h1'
  // const styles = block.options.styles
  // 26-1
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
  // return `
  //   <div class="row">
  //     <div class="col-sm">
  //       <p>${block.value}</p>
  //     </div>
  //   </div>
  // `
  // 23-2
  // const {styles} = block.options
  return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}

function columns(block) {
  // let html = ''
  // block.value.forEach(item=>{
  //   html += `
  //     <div class="col-sm">
  //       ${item}
  //     </div>
  //   `
  // })
  // const html = block.value.map(item => col(item))
  // const {styles} = block.options
  const html = block.value.map(col).join('')
  // return `
  //   <div class="row">
  //     ${html.join('')}
  //   </div>
  // `
  // 23-3
  // return row(html.join(''))
  return row(html, css(block.options.styles))
  
}

// 8-2
function image(block) {
  // return `
  //   <div class="row">
  //     <img src="${block.value}" alt="" />
  //   </div>
  // `
  // 23-4 and 30
  const {imageStyles: is, alt = '', styles} = block.options
  return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
}

// 21
export const templatesNotNeed = {
  title,
  text,
  columns,
  image,
}