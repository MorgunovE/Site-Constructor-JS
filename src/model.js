// 24
import image from './assets/image.png'
// 32 and 34
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

const text = `It's webSite on pure vanilla clear JS`
export const model = [
  // 32-1
  new TitleBlock('Site constructor on clear JavaScript', {
    tag: 'h2',
    // styles: `background: linear-gradient(to right, #ff0099,#493248); color: #fff;text-align: center;padding: 1.5rem;`
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493248)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    // 29
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: "it's picture"
  }),
  new ColumnsBlock([
    'Application on clear JavaScript, without using frameworks',
    'I know have to use principle SOLID and OOP in JavaScript on this curs',
    'JavaScript - is simple, interesting. I learn to build anny UI with my hand'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
  // 25
  // {
  //   type: 'title', value: 'Site constructor on clear JavaScript', options: {
  //     tag: 'h2',
  //     // styles: `background: linear-gradient(to right, #ff0099,#493248); color: #fff;text-align: center;padding: 1.5rem;`
  //     styles: {
  //       background: 'linear-gradient(to right, #ff0099, #493248)',
  //       color: '#fff',
  //       padding: '1.5rem',
  //       'text-align': 'center'
  //     },
  //   }
  // },
  // 8 and 24-1
  // {
  //   type: 'image', value: image, options: {
  //     styles: {
  //       padding: '2rem 0',
  //       display: 'flex',
  //       'justify-content': 'center'
  //     },
  //     // 29
  //     imageStyles: {
  //       width: '500px',
  //       height: 'auto'
  //     },
  //     alt: "it's picture"
  //   },
  // },
  // {
  //   type: 'columns', value: [
  //     'Application on clear JavaScript, without using frameworks',
  //     'I know have to use principle SOLID and OOP in JavaScript on this curs',
  //     'JavaScript - is simple, interesting. I learn to build anny UI with my hand'
  //   ],
  //   options: {
  //     styles: {
  //       background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
  //       padding: '2rem',
  //       color: '#fff',
  //       'font-weight': 'bold'
  //     }
  //   },
  // },
  // {
  //   type: 'text', value: text, options: {
  //     styles: {
  //       background: 'linear-gradient(to left, #f2994a, #f2c94c)',
  //       padding: '1rem',
  //       'font-weight': 'bold'
  //     }
  //   }
  // },
]