// 50
import {Site} from "./site"; //auto import
import {Sidebar} from "./sidebar"; //auto import

export class App {
  constructor(model) {
    this.model = model
    this.init()
  }
  
  init() {
    // 51 from index.js
    const site = new Site('#site')
    site.render(this.model) // change to this.model
    const updateCallback = newBlock => {
      this.model.push(newBlock) // change to this.model
      site.render(this.model) // change to this.model
    }
    new Sidebar('#panel', updateCallback)
  }
}