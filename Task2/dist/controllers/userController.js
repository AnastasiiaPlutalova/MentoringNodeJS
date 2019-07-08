"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function UserController() {
  _classCallCheck(this, UserController);

  this.getUsers = function (req, res) {
    res.send('Get all users from service');
  };
};

var _default = new UserController();

exports["default"] = _default;