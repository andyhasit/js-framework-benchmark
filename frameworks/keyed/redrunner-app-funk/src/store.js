/*
This only contains the data and data operations.
The only framework code is the call to `mainView.update()`
*/

import {buildData} from './data'
import {app} from './app'

const c = console;

class Service {
  constructor(app, trackers) {
    this.app = app
    this.track = {}
    this.trackers = trackers
    trackers.forEach(x => this.track[x] = 0)
  }
  update(trackers) {
    trackers = trackers || this.trackers
    trackers.forEach(x => this.track[x] += 1)
    c.log(this.track)
    this.app.update()
  }
}


class Store extends Service {
  constructor(app) {
    super(app, ['labels', 'items', 'selected'])
    this.mainView = undefined
    this.items = []
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
  run() {
    this.items = buildData(1000)
    this.selected = 0
    this.update(['items'])
  }
  runLots() {
    this.items = buildData(10000)
    this.selected = 0
    this.update(['items'])
  }
  add() {
    this.items = this.items.concat(buildData(1000))
    this.update(['items'])
  }
  update10th() {
    const data = this.items;
    for (let i = 0; i < data.length; i += 10) {
      const item = data[i];
      data[i] = {id: item.id, label: item.label + ' !!!'}
    }
    this.update(['labels'])
  }
  select(item) {
    this.selected = item.id
    this.update(['selected'])
    // this.selected = view.props.id
    // this.track.selected ++
    // view.update()
    // if (this.previouslySelected) {
    //   this.previouslySelected.update()
    // }
    // this.previouslySelected = view
  }
  remove(item) {
    this.items.splice(this.items.indexOf(item), 1)
    this.update(['items'])
  }
  clear() {
    this.items = []
    this.selected = 0
    this.update(['items'])
  }
  swapRows() {
    const items = this.items
    if (items.length > 998) {
      const temp = items[1]
      items[1] = items[998]
      items[998] = temp
    }
    this.update(['items'])
  }
}

export const store = new Store(app)