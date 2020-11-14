import {View} from 'redrunner'
import {store} from './store'

// function fooo(subClass, superClass) { 
//   subClass.prototype = Object.create(superClass && superClass.prototype, { 
//     constructor: { value: subClass, writable: true, configurable: true } 
//   }); 
//   Object.setPrototypeOf(subClass, superClass); 
// }

function old(Child, Parent){
  Child.prototype = Object.create(Parent)
  Child.prototype.constructor = Child
}

function __ex__(SuperClass, constructor) {
  var SubClass = constructor || function(parentView) {
    SuperClass.call(this, parentView)
  }

  //Child.prototype = Object.create(SuperClass)
  //Child.prototype.constructor = Parent
  SubClass.prototype = Object.create(SuperClass && SuperClass.prototype, { 
    constructor: { value: SubClass, writable: true, configurable: true } 
  });
  Object.setPrototypeOf(SubClass, SuperClass); 
  return SubClass
}

export const MainView = __ex__(View)

var p = MainView.prototype;
MainView.prototype.init = function(){
  store.root = this;
}
MainView.prototype.rows = function() {
  const selectedId = store.selected
  return store.items.map(item => ({item: item, selected: item.id == selectedId}))
}
p.__ht = '<div class="container"><br><table class="table table-hover table-striped test-data"><tbody id="tbody"></tbody></table><span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span></div>';
p.__wc = [p.__wa('_1_', 0, 0, 0, {}), p.__wa('_2_', 0, 0, 0, {
  '*': function _(n, o) {
    this.el._2_.items(this.rows(n, o), this);
  }
})];
p.__qc = p.__lu({});
p.__ip = {
  '_1_': function _1_() {
    return this.props;
  }
};

p.__bv = function (view, prototype) {
  view.__bd(prototype, false);

  view.el = {
    '_1_': view.__ni([0], Jumbotron),
    '_2_': view.__gw([1, 0]).cache(view.__sc(Row))
  };
};

const Jumbotron = __ex__(View);
var p = Jumbotron.prototype;
p.buttons = function() {
  return [
    {id: 'run', title: 'Create 1,000 rows', cb: 'run'},
    {id: 'runlots', title: 'Create 10,000 rows', cb: 'runLots'},
    {id: 'add', title: 'Append 1,000 rows', cb: 'add'},
    {id: 'update', title: 'Update every 10th row', cb: 'update10th'},
    {id: 'clear', title: 'Clear', cb: 'clear'},
    {id: 'swaprows', title: 'Swap Rows', cb: 'swapRows'}
  ].map(o => {
    o.cb = store[o.cb].bind(store)
    return o
  })
}
p.__ht = '<div class="jumbotron"><div class="row"><div class="col-md-6"><h1>RedRunner keyed</h1></div><div class="col-md-6"></div></div></div>';
p.__wc = [p.__wa('_1_', 0, 0, 0, {
  '': function _(n, o) {
    this.el._1_.items(this.buttons(n, o), this);
  }
})];
p.__qc = p.__lu({
  '': function _() {
    return null;
  }
});
p.__ip = {};

p.__bv = function (view, prototype) {
  view.__bd(prototype, false);

  view.el = {
    '_1_': view.__gw([0, 1]).cache(view.__sc(Button))
  };
};


const Button = __ex__(View);
var p = Button.prototype;
p.__ht = '<div class="col-sm-6 smallpad"><button class="btn btn-primary btn-block"></button></div>';
p.__wc = [p.__wa('_1_', 0, 0, 0, {
  'title': function title(n, o) {
    this.el._1_.text(n);
  },
  'id': function id(n, o) {
    this.el._1_.att('id', n);
  }
})];
p.__qc = p.__lu({
  'title': function title() {
    return this.props.title;
  },
  'id': function id() {
    return this.props.id;
  }
});
p.__ip = {};

p.__bv = function (view, prototype) {
  view.__bd(prototype, false);

  view.el = {
    '_1_': view.__gw([0]).on('click', function (e, w) {
      view.props.cb(e, w);
    })
  };
};


const Row = __ex__(View);
var p = Row.prototype;

p.setProps = function(nextProps) {
  if (nextProps.item !== this.props.item || nextProps.selected !== this.props.selected) {
    View.setProps.call(this, nextProps)
  }
}

p.selectMe = function() {
  store.select(this.props.item)
}

p.removeMe = function() {
  store.remove(this.props.item)
}
p.__ht = '<tr><td class="col-md-1"></td><td class="col-md-4"><a class="lbl"></a></td><td class="col-md-1"><a class="remove"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td><td class="col-md-6"></td></tr>';
p.__wc = [p.__wa('_1_', 0, 0, 3, {
  'selected': function selected(n, o) {
    this.el._1_.att('class', n ? 'danger' : '');
  }
}), p.__wa('_2_', 0, 0, 0, {
  'item.id': function itemId(n, o) {
    this.el._2_.text(n);
  }
}), p.__wa('_3_', 0, 0, 0, {
  'item.label': function itemLabel(n, o) {
    this.el._3_.text(n);
  }
}), p.__wa('_4_', 0, 0, 0, {})];
p.__qc = p.__lu({
  'selected': function selected() {
    return this.props.selected;
  },
  'item.id': function itemId() {
    return this.props.item.id;
  },
  'item.label': function itemLabel() {
    return this.props.item.label;
  }
});
p.__ip = {};

p.__bv = function (view, prototype) {
  view.__bd(prototype, true);

  view.el = {
    '_1_': view.__gw([]),
    '_2_': view.__gw([0]),
    '_3_': view.__gw([1, 0]).on('click', function (e, w) {
      view.selectMe(e, w);
    }),
    '_4_': view.__gw([2, 0]).on('click', function (e, w) {
      view.removeMe(e, w);
    })
  };
};

p.__cn = undefined;
