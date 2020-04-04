"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  $: /\$\d{1}/g,
  LOGIC: /[&\|()]/g,
  NUMBER: /^(-)?\d+(\.\d+)?$/,
  STRING: /^[\u4e00-\u9fa5_a-zA-Z0-9,#.-]+$/,
  BOOLEAN: /^(true|false)$/,
  DATE: /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/,
  MONTH: /^[0-9]{4}-(0[123456789]|(10|11|12))$/,
  YEAR: /^[0-9]{4}$/,
  TIME: /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30))) (0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:[0-5]\d{1}$/,
  GEOGRAPHY: / /
};
exports["default"] = _default;