// This is a "store" which contains all data and functionality
// The only RedRunner specific code is mainView.update()

import {buildData} from './data'

class Store {
  constructor() {
    this.mainView = undefined
    this.lines = []
    this.selected = 0
    this.buttons = [
      {id: 'run', title: 'Create 1,000 rows', cb: 'run'},
      {id: 'runlots', title: 'Create 10,000 rows', cb: 'runLots'},
      {id: 'add', title: 'Append 1,000 rows', cb: 'add'},
      {id: 'update', title: 'Update every 10th row', cb: 'update10th'},
      {id: 'clear', title: 'Clear', cb: 'clear'},
      {id: 'swaprows', title: 'Swap Rows', cb: 'swapRows'}
    ]
  }
  update() {
    this.mainView.update()
  }
  run() {
    this.lines = buildData(1000)
    this.selected = 0
    this.update()
  }
  runLots() {
    this.lines = buildData(10000)
    this.selected = 0
    this.update()
  }
  add() {
    this.lines = this.lines.concat(buildData(1000))
    this.update()
  }
  update10th() {
    const data = this.lines;
    for (let i = 0; i < data.length; i += 10) {
      const item = data[i];
      data[i] = {id: item.id, label: item.label + ' !!!'}
    }
    this.update()
  }
  select(item) {
    this.selected = item.id
    this.update()
  }
  remove(item) {
    this.lines.splice(this.lines.indexOf(item), 1)
    this.update()
  }
  clear() {
    this.lines = []
    this.selected = 0
    this.update()
  }
  swapRows() {
    const lines = this.lines
    if (lines.length > 998) {
      let temp = lines[1]
      lines[1] = lines[998]
      lines[998] = temp
    }
    this.update()
  }
}


export const store = new Store()