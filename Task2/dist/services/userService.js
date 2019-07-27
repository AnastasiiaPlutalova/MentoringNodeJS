"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _models = require("../models");var

UserService = function UserService() {(0, _classCallCheck2["default"])(this, UserService);this.
  getUsers = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              _models.UserModel.getUsers());case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee);}));this.


  getUserById = /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {return _regenerator["default"].wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                _models.UserModel.getUserById(id));case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2);}));return function (_x) {return _ref2.apply(this, arguments);};}();this.


  createUser = /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {return _regenerator["default"].wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                _models.UserModel.createUser(user));case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3);}));return function (_x2) {return _ref3.apply(this, arguments);};}();this.


  updateUser = /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(user) {return _regenerator["default"].wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                _models.UserModel.updateUser(user));case 2:return _context4.abrupt("return", _context4.sent);case 3:case "end":return _context4.stop();}}}, _callee4);}));return function (_x3) {return _ref4.apply(this, arguments);};}();this.


  deleteUser = /*#__PURE__*/function () {var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {return _regenerator["default"].wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                _models.UserModel.deleteUser(id));case 2:return _context5.abrupt("return", _context5.sent);case 3:case "end":return _context5.stop();}}}, _callee5);}));return function (_x4) {return _ref5.apply(this, arguments);};}();};var _default =



new UserService();exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyU2VydmljZS5qcyJdLCJuYW1lcyI6WyJVc2VyU2VydmljZSIsImdldFVzZXJzIiwiVXNlck1vZGVsIiwiZ2V0VXNlckJ5SWQiLCJpZCIsImNyZWF0ZVVzZXIiLCJ1c2VyIiwidXBkYXRlVXNlciIsImRlbGV0ZVVzZXIiXSwibWFwcGluZ3MiOiJpZEFBQSxtQzs7QUFFTUEsVztBQUNGQyxFQUFBQSxRLDhGQUFXO0FBQ01DLGdDQUFVRCxRQUFWLEVBRE4saUg7OztBQUlYRSxFQUFBQSxXLHVIQUFjLGtCQUFPQyxFQUFQO0FBQ0dGLGtDQUFVQyxXQUFWLENBQXNCQyxFQUF0QixDQURILHFIOzs7QUFJZEMsRUFBQUEsVSx1SEFBYSxrQkFBT0MsSUFBUDtBQUNJSixrQ0FBVUcsVUFBVixDQUFxQkMsSUFBckIsQ0FESixxSDs7O0FBSWJDLEVBQUFBLFUsdUhBQWEsa0JBQU9ELElBQVA7QUFDSUosa0NBQVVLLFVBQVYsQ0FBcUJELElBQXJCLENBREoscUg7OztBQUliRSxFQUFBQSxVLHVIQUFhLGtCQUFPSixFQUFQO0FBQ0lGLGtDQUFVTSxVQUFWLENBQXFCSixFQUFyQixDQURKLHFIOzs7O0FBS0YsSUFBSUosV0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBVc2VyTW9kZWwuZ2V0VXNlckJ5SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlVXNlcih1c2VyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VyID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgVXNlck1vZGVsLnVwZGF0ZVVzZXIodXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVXNlciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlVXNlcihpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyU2VydmljZSgpO1xyXG4iXX0=