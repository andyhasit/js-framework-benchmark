/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * @record
 */
function Data() { }
if (false) {
    /** @type {?} */
    Data.prototype.id;
    /** @type {?} */
    Data.prototype.label;
}
export class AppComponent {
    constructor() {
        this.data = [];
        this.selected = undefined;
        this.id = 1;
        this.backup = undefined;
        console.info(VERSION.full);
    }
    /**
     * @param {?=} count
     * @return {?}
     */
    buildData(count = 1000) {
        /** @type {?} */
        var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
        /** @type {?} */
        var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
        /** @type {?} */
        var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
        /** @type {?} */
        var data = [];
        for (var i = 0; i < count; i++) {
            data.push({ id: this.id, label: adjectives[this._random(adjectives.length)] + " " + colours[this._random(colours.length)] + " " + nouns[this._random(nouns.length)] });
            this.id++;
        }
        return data;
    }
    /**
     * @param {?} max
     * @return {?}
     */
    _random(max) {
        return Math.round(Math.random() * 1000) % max;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    itemByIndex(index, item) {
        return index;
    }
    /**
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    select(item, event) {
        event.preventDefault();
        this.selected = item.id;
    }
    /**
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    delete(item, event) {
        event.preventDefault();
        for (let i = 0, l = this.data.length; i < l; i++) {
            if (this.data[i].id === item.id) {
                this.data.splice(i, 1);
                break;
            }
        }
    }
    /**
     * @return {?}
     */
    run() {
        this.data = this.buildData();
    }
    /**
     * @return {?}
     */
    add() {
        this.data = this.data.concat(this.buildData(1000));
    }
    /**
     * @return {?}
     */
    update() {
        for (let i = 0; i < this.data.length; i += 10) {
            this.data[i].label += ' !!!';
        }
    }
    /**
     * @return {?}
     */
    runLots() {
        this.data = this.buildData(10000);
        this.selected = undefined;
    }
    /**
     * @return {?}
     */
    clear() {
        this.data = [];
        this.selected = undefined;
    }
    /**
     * @return {?}
     */
    swapRows() {
        if (this.data.length > 998) {
            /** @type {?} */
            var a = this.data[1];
            this.data[1] = this.data[998];
            this.data[998] = a;
        }
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-app',
                template: `<div class="container">
    <div class="jumbotron">
        <div class="row">
            <div class="col-md-6">
                <h1>Angular (non-keyed)</h1>
            </div>
            <div class="col-md-6">
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="run" (click)="run()" ref="text">Create 1,000 rows</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="runlots" (click)="runLots()">Create 10,000 rows</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="add" (click)="add()" ref="text">Append 1,000 rows</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="update" (click)="update()">Update every 10th row</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="clear" (click)="clear()">Clear</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="swaprows" (click)="swapRows()">Swap Rows</button>
                </div>
            </div>
        </div>
    </div>
    <table class="table table-hover table-striped test-data">
        <tbody>
            <tr [class.danger]="item.id === selected" *ngFor="let item of data trackBy itemByIndex">
                <td class="col-md-1">{{item.id}}</td>
                <td class="col-md-4">
                    <a href="#" (click)="select(item, $event)">{{item.label}}</a>
                </td>
                <td class="col-md-1"><a href="#" (click)="delete(item, $event)"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>
                <td class="col-md-6"></td>
            </tr>
        </tbody>
    </table>
    <span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>
</div>`
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    AppComponent.prototype.data;
    /** @type {?} */
    AppComponent.prototype.selected;
    /** @type {?} */
    AppComponent.prototype.id;
    /** @type {?} */
    AppComponent.prototype.backup;
}
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule],
                declarations: [AppComponent],
                bootstrap: [AppComponent],
            },] },
];
//# sourceMappingURL=app.js.map