import { mount } from "gleekit";

function random(max) {
  return Math.round(Math.random() * 1000) % max;
}

const A = [
  "pretty",
  "large",
  "big",
  "small",
  "tall",
  "short",
  "long",
  "handsome",
  "plain",
  "quaint",
  "clean",
  "elegant",
  "easy",
  "angry",
  "crazy",
  "helpful",
  "mushy",
  "odd",
  "unsightly",
  "adorable",
  "important",
  "inexpensive",
  "cheap",
  "expensive",
  "fancy",
];
const C = [
  "red",
  "yellow",
  "blue",
  "green",
  "pink",
  "brown",
  "purple",
  "brown",
  "white",
  "black",
  "orange",
];
const N = [
  "table",
  "chair",
  "house",
  "bbq",
  "desk",
  "car",
  "pony",
  "cookie",
  "sandwich",
  "burger",
  "pizza",
  "mouse",
  "keyboard",
];

let nextId = 1;

export function buildData(count) {
  const data = new Array(count);
  for (let i = 0; i < count; i++) {
    data[i] = {
      id: nextId++,
      label: `${A[random(A.length)]} ${C[random(C.length)]} ${
        N[random(N.length)]
      }`,
    };
  }
  return data;
}

const MainView = (
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-6">
          <h1>Gleekit non-keyed</h1>
        </div>
        <div class="col-md-6">
          <Button repeat={buttons} />
        </div>
      </div>
    </div>
    <table class="table table-hover table-striped test-items">
      <tbody id="tbody">
        <Row repeat={items} />
      </tbody>
    </table>
  </div>
);

const Button = (
  <div class="col-sm-6 smallpad">
    <button id={p.id} on:click={p.callback()} class="btn btn-primary btn-block">
      {p.title}
    </button>
  </div>
);

const Row = (
  <tr className={isSelected(p) | (n ? "danger" : "")}>
    <td class="col-md-1">{p.id}</td>
    <td class="col-md-4">
      <a on:click={selectRow(p)} class="lbl">
        {p.label}
      </a>
    </td>
    <td class="col-md-1">
      <a class="remove" on:click={removeRow(p)}>
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </a>
    </td>
    <td class="col-md-6"></td>
  </tr>
);

let items = [],
  selected = 0;

const add = () => (items = items.concat(buildData(1000))),
  clear = () => {
    items = [];
    selected = undefined;
  },
  update10th = () => {
    for (let i = 0; i < items.length; i += 10) {
      items[i].label += " !!!";
    }
  },
  removeRow = (item) => {
    console.log(item);
    const id = item.id;
    items.splice(
      items.findIndex((x) => x.id === id),
      1
    );
    root.update();
  },
  run = () => {
    items = buildData(1000);
    selected = undefined;
  },
  runLots = () => {
    items = buildData(10000);
    selected = undefined;
  },
  isSelected = (item) => {
    return item.id === selected;
  },
  selectRow = (item) => {
    selected = item.id;
    root.update();
  },
  swapRows = () => {
    if (items.length > 998) {
      const temp = items[1];
      items[1] = items[998];
      items[998] = temp;
    }
  },
  buttons = [
    { id: "run", title: "Create 1,000 rows", cb: run },
    { id: "runlots", title: "Create 10,000 rows", cb: runLots },
    { id: "add", title: "Append 1,000 rows", cb: add },
    { id: "update", title: "Update every 10th row", cb: update10th },
    { id: "clear", title: "Clear", cb: clear },
    { id: "swaprows", title: "Swap Rows", cb: swapRows },
  ].map((button) => {
    button.callback = (_) => {
      button.cb();
      root.update();
    };
    return button;
  });

const root = mount("main", MainView);
