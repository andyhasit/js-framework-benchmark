import { mount } from "wallace";

const MainView = () => (
  <div unique class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-6">
          <h1>Wallace non-keyed</h1>
        </div>
        <div class="col-md-6">
          <Button.repeat items={buttons} />
        </div>
      </div>
    </div>
    <Table.nest ref:table />
  </div>
);

const Table = () => (
  <table unique class="table table-hover table-striped test-items">
    <tbody id="tbody">
      <Row.repeat items={items} />
    </tbody>
  </table>
);

const Button = ({ id, cb, title }) => (
  <div class="col-sm-6 smallpad">
    <button id={id} onClick={cb()} class="btn btn-primary btn-block">
      {title}
    </button>
  </div>
);

const Row = ({ id, label }, { props }) => (
  <tr class={id === selected ? "danger" : ""}>
    <td class="col-md-1">{id}</td>
    <td class="col-md-4">
      <a onClick={selectRow(id)} class="lbl">
        {label}
      </a>
    </td>
    <td class="col-md-1">
      <a class="remove" onClick={removeRow(props)}>
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </a>
    </td>
    <td class="col-md-6"></td>
  </tr>
);

let items = [],
  nextId = 1,
  selected;

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
  ],
  C = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"],
  N = [
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
  ],
  random = (max) => Math.round(Math.random() * 1000) % max,
  buildData = (count) => {
    const data = new Array(count);
    for (let i = 0; i < count; i++) {
      data[i] = {
        id: nextId++,
        label: `${A[random(A.length)]} ${C[random(C.length)]} ${N[random(N.length)]}`,
      };
    }
    return data;
  },
  removeRow = (row) => {
    items.splice(items.indexOf(row), 1);
    updateRows();
  },
  selectRow = (rowId) => {
    selected = rowId;
    updateRows();
  },
  updateRows = () => table.update(),
  buttons = [
    {
      id: "run",
      title: "Create 1,000 rows",
      cb: () => {
        items = buildData(1000);
        selected = undefined;
        updateRows();
      },
    },
    {
      id: "runlots",
      title: "Create 10,000 rows",
      cb: () => {
        items = buildData(10000);
        updateRows();
      },
    },
    {
      id: "add",
      title: "Append 1,000 rows",
      cb: () => {
        items = items.concat(buildData(1000));
        updateRows();
      },
    },
    {
      id: "update",
      title: "Update every 10th row",
      cb: () => {
        for (let i = 0; i < items.length; i += 10) {
          items[i].label += " !!!";
        }
        updateRows();
      },
    },
    {
      id: "clear",
      title: "Clear",
      cb: () => {
        items = [];
        updateRows();
      },
    },
    {
      id: "swaprows",
      title: "Swap Rows",
      cb: () => {
        if (items.length > 998) {
          const temp = items[1];
          items[1] = items[998];
          items[998] = temp;
          updateRows();
        }
      },
    },
  ];

const table = mount("main", MainView).ref.table;
