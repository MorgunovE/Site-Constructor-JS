// 37
export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }
  
  // 39
  render(model) {
    // 48
    this.$el.innerHTML = ''
    
    model.forEach(block => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}