import {View, ViewCache, Wrapper} from 'redrunner'
import {store} from './store'


export class Main extends View {
  __html__ = `
    <div class="container">
      <Jumbotron />
      <table class="table table-hover table-striped test-data">
        <tbody id="tbody" :nest="|..store.lines|Row:id"></tbody>
      </table>
    </div>
  `
}


class Jumbotron extends View {
  __html__ = `
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-6">
          <h1>RedRunner keyed</h1>
        </div>
        <div :nest="|..store.buttons|Button" class="col-md-6">
        </div>
      </div>
    </div>
  `
}


class Button extends View {
  __html__ = `
    <div class="col-sm-6 smallpad">
      <button :on="click|.clicked" class="btn btn-primary btn-block">{{title}}</button>
    </div>
  `
  clicked() {
    store[this.props.cb].apply(store)
  }
}


class Row extends View {
  __clone__ = `
    <tr :watch="..store.selected|.amISelected?|css">
      <td class="col-md-1">{{id}}</td>
      <td class="col-md-4">
        <a :on="click|.selectMe" class="lbl">{{label}}</a>
      </td>
      <td class="col-md-1">
        <a class="remove" :on="click|.removeMe">
          <span class="glyphicon glyphicon-remove"></span>
        </a>
      </td>
      <td class="col-md-6">
      </td>
    </tr>
  `
  amISelected(n,o) {
    return n == this.props.id ? 'danger' : ''
  }
  selectMe() {
    store.select(this.props)
  }
  removeMe() {
    store.remove(this.props)
  }
}