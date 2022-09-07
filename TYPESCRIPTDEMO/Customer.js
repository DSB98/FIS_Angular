"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address");
var Customer = /** @class */ (function () {
    function Customer() {
        this.addressObj = new Address_1.Address();
        this.CustomerName = "Deepak";
        this._CustomerDesignation = "";
    }
    // show(){
    //     alert(this.addressObj.Street1)
    // }
    Customer.prototype.Add = function () {
        throw new Error("Method not implemented");
    };
    Object.defineProperty(Customer.prototype, "CustomerDesignation", {
        get: function () {
            return this._CustomerDesignation;
        },
        set: function (value) {
            if (value.length == 0) {
                throw "Customer designation is required";
            }
            this._CustomerDesignation = value;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.validate = function () {
        alert("Test");
    };
    Customer.prototype.validatereturn = function () {
        alert("Tets");
        return true;
    };
    Customer.prototype.validatedata = function (intput) {
        alert(intput);
        return true;
    };
    return Customer;
}());
var SomeOtherCustomer = /** @class */ (function (_super) {
    __extends(SomeOtherCustomer, _super);
    function SomeOtherCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomeOtherCustomer.prototype.validate = function () {
        alert("This is a new customer");
    };
    return SomeOtherCustomer;
}(Customer));
