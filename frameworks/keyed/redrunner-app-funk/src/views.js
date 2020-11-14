/*
This module contains the views which control the UI.

*/

const c = console;
import {View, ViewCache, Wrapper} from 'redrunner'
import {store} from './store'


export class Main extends View {
  __html__ = `
    <div class="container">
      <use:Jumbotron />
      <table class="table table-hover table-striped test-data">
        <tbody id="tbody" :items="*|.rowProps|Row"></tbody>
      </table>
      <span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>
    </div>
  `
  rowProps() {
    return store.items.map(item => ({item: item, selected: item.id == store.selected}))
  }
}


class Jumbotron extends View {
  __html__ = `
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-6">
          <h1>RedRunner keyed</h1>
        </div>
        <div :items="|..store.buttons.|Button" class="col-md-6">
        </div>
      </div>
    </div>
  `
}


class Button extends View {
  __html__ = `
    <div class="col-sm-6 smallpad">
      <button id="{{id}}" :onClick=".clicked" class="btn btn-primary btn-block">{{title}}</button>
    </div>
  `
  clicked() {
    store[this.props.cb].apply(store)
  }
}


class Row extends View {
  __clone__ = `
    <tr class="{{selected|.cssClass}}">
      <td class="col-md-1">{{item.id}}</td>
      <td class="col-md-4">
        <a :onClick=".selectMe" class="lbl">{{item.label}}</a>
      </td>
      <td class="col-md-1">
        <a class="remove" :onClick=".removeMe">
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </td>
      <td class="col-md-6">
      </td>
    </tr>
  `
  cssClass(n, o, w) {
    return n ? 'danger' : ''
  }
  selectMe() {
    store.select(this.props.item)
  }
  removeMe() {
    store.remove(this.props.item)
  }
}