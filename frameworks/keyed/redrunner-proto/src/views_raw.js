"use strict";

var _store = require("./store");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { 
  for (var i = 0; i < props.length; i++) { 
    var descriptor = props[i]; 
    descriptor.enumerable = descriptor.enumerable || false; 
    descriptor.configurable = true; 
    if ("value" in descriptor) 
    descriptor.writable = true; 
    Object.defineProperty(target, descriptor.key, descriptor); 
  }
 }

function _createClass(Constructor, protoProps, staticProps) { 
  if (protoProps) _defineProperties(Constructor.prototype, protoProps); 
  if (staticProps) _defineProperties(Constructor, staticProps); 
  return Constructor; 
}

function _inherits(subClass, superClass) { 
  if (typeof superClass !== "function" && superClass !== null) {
     throw new TypeError("Super expression must either be null or a function"); 
  } 
  subClass.prototype = Object.create(superClass && superClass.prototype, { 
      constructor: { value: subClass, writable: true, configurable: true } 
  }); 
  if (superClass) _setPrototypeOf(subClass, superClass); 
  }

function _setPrototypeOf(o, p) {
   _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { 
     o.__proto__ = p; return o; 
  }; 
  return _setPrototypeOf(o, p); 
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MainView = /*#__PURE__*/function (_View) {
  _inherits(MainView, _View);

  var _super = _createSuper(MainView);

  function MainView() {
    _classCallCheck(this, MainView);

    return _super.apply(this, arguments);
  }

  _createClass(MainView, [{
    key: "init",
    // not normally how you'd do it, but hey.
    value: function init() {
      _store.store.root = this;
    }
  }, {
    key: "rows",
    value: function rows() {
      var selectedId = _store.store.selected;
      return _store.store.items.map(function (item) {
        return {
          item: item,
          selected: item.id == selectedId
        };
      });
    }
  }]);

  return MainView;
}(_redrunner.View);

exports.MainView = MainView;
var p = MainView.prototype;
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

var Jumbotron = /*#__PURE__*/function (_View2) {
  _inherits(Jumbotron, _View2);

  var _super2 = _createSuper(Jumbotron);

  function Jumbotron() {
    _classCallCheck(this, Jumbotron);

    return _super2.apply(this, arguments);
  }

  _createClass(Jumbotron, [{
    key: "buttons",
    value: function buttons() {
      return [{
        id: 'run',
        title: 'Create 1,000 rows',
        cb: 'run'
      }, {
        id: 'runlots',
        title: 'Create 10,000 rows',
        cb: 'runLots'
      }, {
        id: 'add',
        title: 'Append 1,000 rows',
        cb: 'add'
      }, {
        id: 'update',
        title: 'Update every 10th row',
        cb: 'update10th'
      }, {
        id: 'clear',
        title: 'Clear',
        cb: 'clear'
      }, {
        id: 'swaprows',
        title: 'Swap Rows',
        cb: 'swapRows'
      }].map(function (o) {
        o.cb = _store.store[o.cb].bind(_store.store);
        return o;
      });
    }
  }]);

  return Jumbotron;
}(_redrunner.View);

var p = Jumbotron.prototype;
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

var Button = /*#__PURE__*/function (_View3) {
  _inherits(Button, _View3);

  var _super3 = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super3.apply(this, arguments);
  }

  return Button;
}(_redrunner.View);

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

var Row = /*#__PURE__*/function (_View4) {
  _inherits(Row, _View4);

  var _super4 = _createSuper(Row);

  function Row() {
    _classCallCheck(this, Row);

    return _super4.apply(this, arguments);
  }

  _createClass(Row, [{
    key: "setProps",
    // Same as shouldComponentUpdate() in React's implementation
    value: function setProps(nextProps) {
      if (nextProps.item !== this.props.item || nextProps.selected !== this.props.selected) {
        _get(_getPrototypeOf(Row.prototype), "setProps", this).call(this, nextProps);
      }
    }
  }, {
    key: "selectMe",
    value: function selectMe() {
      _store.store.select(this.props.item);
    }
  }, {
    key: "removeMe",
    value: function removeMe() {
      _store.store.remove(this.props.item);
    }
  }]);

  return Row;
}(_redrunner.View);

var p = Row.prototype;
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
