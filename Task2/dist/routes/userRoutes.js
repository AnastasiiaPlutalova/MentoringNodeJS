"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _controllers.UserController.getUsers);
router.get('/:id', _controllers.UserController.getUserById);
router.post('/', _controllers.UserController.createUser);
router.put('/', _controllers.UserController.updateUser);
router["delete"]('/:id', _controllers.UserController.deleteUser);
var _default = router;
exports["default"] = _default;