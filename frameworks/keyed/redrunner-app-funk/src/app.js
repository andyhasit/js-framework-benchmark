import {mount} from 'redrunner'

class App {
  constructor() {
    this.rootViews = []
  }
  mount(elementOrId, cls, props) {
    this.rootViews.push(mount(elementOrId, cls, props))
  }
  update() {
    this.rootViews.forEach(v => v.update())
  }
}

export const app = new App()