"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _util = _interopRequireDefault(require("util"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _v = _interopRequireDefault(require("uuid/v4"));

_dotenv["default"].config();

var readFile = _util["default"].promisify(_fs["default"].readFile);
var writeFile = _util["default"].promisify(_fs["default"].writeFile);

var dir = process.env.FILE_DB_DIR;
var jsonFile = process.env.USER_JSON;
var dbPath = _path["default"].join(process.cwd(), dir, jsonFile);var

User = function User() {var _this = this;(0, _classCallCheck2["default"])(this, User);this.
  getUsers = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {var fileData, users;return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              readFile(dbPath));case 2:fileData = _context.sent;
            users = JSON.parse(fileData);return _context.abrupt("return",
            users);case 5:case "end":return _context.stop();}}}, _callee);}));this.


  getUserById = /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {var users, user;return _regenerator["default"].wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                _this.getUsers());case 2:users = _context2.sent;
              user = users.find(function (u) {return u.id === id;});return _context2.abrupt("return",
              user);case 5:case "end":return _context2.stop();}}}, _callee2);}));return function (_x) {return _ref2.apply(this, arguments);};}();this.


  createUser = /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(newUser) {var users, id, user;return _regenerator["default"].wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                _this.getUsers());case 2:users = _context3.sent;
              id = (0, _v["default"])();
              user = (0, _objectSpread2["default"])({},
              newUser, {
                id: id });


              users.push(user);_context3.next = 8;return (

                writeFile(dbPath, JSON.stringify(users)));case 8:return _context3.abrupt("return",

              user);case 9:case "end":return _context3.stop();}}}, _callee3);}));return function (_x2) {return _ref3.apply(this, arguments);};}();this.


  updateUser = /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(updateUser) {var user, users, index;return _regenerator["default"].wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                _this.getUserById(updateUser.id));case 2:user = _context4.sent;if (!
              user) {_context4.next = 12;break;}_context4.next = 6;return (
                _this.getUsers());case 6:users = _context4.sent;
              index = users.findIndex(function (u) {return u.id === updateUser.id;});
              users[index] = (0, _objectSpread2["default"])({},
              updateUser);_context4.next = 11;return (


                writeFile(dbPath, JSON.stringify(users)));case 11:return _context4.abrupt("return",

              users[index]);case 12:throw (


                new Error('User not found'));case 13:case "end":return _context4.stop();}}}, _callee4);}));return function (_x3) {return _ref4.apply(this, arguments);};}();this.


  deleteUser = /*#__PURE__*/function () {var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {var user, users, index;return _regenerator["default"].wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                _this.getUserById(id));case 2:user = _context5.sent;if (!
              user) {_context5.next = 12;break;}_context5.next = 6;return (
                _this.getUsers());case 6:users = _context5.sent;
              index = users.findIndex(function (u) {return u.id === id;});
              users[index].isDeleted = true;_context5.next = 11;return (

                writeFile(dbPath, JSON.stringify(users)));case 11:return _context5.abrupt("return",

              users[index]);case 12:throw (


                new Error('User not found'));case 13:case "end":return _context5.stop();}}}, _callee5);}));return function (_x4) {return _ref5.apply(this, arguments);};}();};var _default =



new User();exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlck1vZGVsLmZpbGUuanMiXSwibmFtZXMiOlsiZG90ZW52IiwiY29uZmlnIiwicmVhZEZpbGUiLCJ1dGlsIiwicHJvbWlzaWZ5IiwiZnMiLCJ3cml0ZUZpbGUiLCJkaXIiLCJwcm9jZXNzIiwiZW52IiwiRklMRV9EQl9ESVIiLCJqc29uRmlsZSIsIlVTRVJfSlNPTiIsImRiUGF0aCIsInBhdGgiLCJqb2luIiwiY3dkIiwiVXNlciIsImdldFVzZXJzIiwiZmlsZURhdGEiLCJ1c2VycyIsIkpTT04iLCJwYXJzZSIsImdldFVzZXJCeUlkIiwiaWQiLCJ1c2VyIiwiZmluZCIsInUiLCJjcmVhdGVVc2VyIiwibmV3VXNlciIsInB1c2giLCJzdHJpbmdpZnkiLCJ1cGRhdGVVc2VyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJFcnJvciIsImRlbGV0ZVVzZXIiLCJpc0RlbGV0ZWQiXSwibWFwcGluZ3MiOiI4aUJBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsbUJBQU9DLE1BQVA7O0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxpQkFBS0MsU0FBTCxDQUFlQyxlQUFHSCxRQUFsQixDQUFqQjtBQUNBLElBQU1JLFNBQVMsR0FBR0gsaUJBQUtDLFNBQUwsQ0FBZUMsZUFBR0MsU0FBbEIsQ0FBbEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBeEI7QUFDQSxJQUFNQyxRQUFRLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxTQUE3QjtBQUNBLElBQU1DLE1BQU0sR0FBR0MsaUJBQUtDLElBQUwsQ0FBVVAsT0FBTyxDQUFDUSxHQUFSLEVBQVYsRUFBeUJULEdBQXpCLEVBQThCSSxRQUE5QixDQUFmLEM7O0FBRU1NLEk7QUFDRkMsRUFBQUEsUSw4RkFBVztBQUNnQmhCLGNBQUFBLFFBQVEsQ0FBQ1csTUFBRCxDQUR4QixTQUNETSxRQURDO0FBRURDLFlBQUFBLEtBRkMsR0FFT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVgsQ0FGUDtBQUdBQyxZQUFBQSxLQUhBLDBEOzs7QUFNWEcsRUFBQUEsVyx1SEFBYyxrQkFBT0MsRUFBUDtBQUNVLGdCQUFBLEtBQUksQ0FBQ04sUUFBTCxFQURWLFNBQ0pFLEtBREk7QUFFSkssY0FBQUEsSUFGSSxHQUVHTCxLQUFLLENBQUNNLElBQU4sQ0FBVyxVQUFBQyxDQUFDLFVBQUlBLENBQUMsQ0FBQ0gsRUFBRixLQUFTQSxFQUFiLEVBQVosQ0FGSDtBQUdIQyxjQUFBQSxJQUhHLDREOzs7QUFNZEcsRUFBQUEsVSx1SEFBYSxrQkFBT0MsT0FBUDtBQUNXLGdCQUFBLEtBQUksQ0FBQ1gsUUFBTCxFQURYLFNBQ0hFLEtBREc7QUFFSEksY0FBQUEsRUFGRyxHQUVFLG9CQUZGO0FBR0hDLGNBQUFBLElBSEc7QUFJRkksY0FBQUEsT0FKRTtBQUtMTCxnQkFBQUEsRUFBRSxFQUFGQSxFQUxLOzs7QUFRVEosY0FBQUEsS0FBSyxDQUFDVSxJQUFOLENBQVdMLElBQVgsRUFSUzs7QUFVSG5CLGdCQUFBQSxTQUFTLENBQUNPLE1BQUQsRUFBU1EsSUFBSSxDQUFDVSxTQUFMLENBQWVYLEtBQWYsQ0FBVCxDQVZOOztBQVlGSyxjQUFBQSxJQVpFLDREOzs7QUFlYk8sRUFBQUEsVSx1SEFBYSxrQkFBT0EsVUFBUDtBQUNVLGdCQUFBLEtBQUksQ0FBQ1QsV0FBTCxDQUFpQlMsVUFBVSxDQUFDUixFQUE1QixDQURWLFNBQ0hDLElBREc7QUFFTEEsY0FBQUEsSUFGSztBQUdlLGdCQUFBLEtBQUksQ0FBQ1AsUUFBTCxFQUhmLFNBR0NFLEtBSEQ7QUFJQ2EsY0FBQUEsS0FKRCxHQUlTYixLQUFLLENBQUNjLFNBQU4sQ0FBZ0IsVUFBQVAsQ0FBQyxVQUFJQSxDQUFDLENBQUNILEVBQUYsS0FBU1EsVUFBVSxDQUFDUixFQUF4QixFQUFqQixDQUpUO0FBS0xKLGNBQUFBLEtBQUssQ0FBQ2EsS0FBRCxDQUFMO0FBQ09ELGNBQUFBLFVBRFAsRUFMSzs7O0FBU0MxQixnQkFBQUEsU0FBUyxDQUFDTyxNQUFELEVBQVNRLElBQUksQ0FBQ1UsU0FBTCxDQUFlWCxLQUFmLENBQVQsQ0FUVjs7QUFXRUEsY0FBQUEsS0FBSyxDQUFDYSxLQUFELENBWFA7OztBQWNILG9CQUFJRSxLQUFKLENBQVUsZ0JBQVYsQ0FkRyw2RDs7O0FBaUJiQyxFQUFBQSxVLHVIQUFhLGtCQUFPWixFQUFQO0FBQ1UsZ0JBQUEsS0FBSSxDQUFDRCxXQUFMLENBQWlCQyxFQUFqQixDQURWLFNBQ0hDLElBREc7QUFFTEEsY0FBQUEsSUFGSztBQUdlLGdCQUFBLEtBQUksQ0FBQ1AsUUFBTCxFQUhmLFNBR0NFLEtBSEQ7QUFJQ2EsY0FBQUEsS0FKRCxHQUlTYixLQUFLLENBQUNjLFNBQU4sQ0FBZ0IsVUFBQVAsQ0FBQyxVQUFJQSxDQUFDLENBQUNILEVBQUYsS0FBU0EsRUFBYixFQUFqQixDQUpUO0FBS0xKLGNBQUFBLEtBQUssQ0FBQ2EsS0FBRCxDQUFMLENBQWFJLFNBQWIsR0FBeUIsSUFBekIsQ0FMSzs7QUFPQy9CLGdCQUFBQSxTQUFTLENBQUNPLE1BQUQsRUFBU1EsSUFBSSxDQUFDVSxTQUFMLENBQWVYLEtBQWYsQ0FBVCxDQVBWOztBQVNFQSxjQUFBQSxLQUFLLENBQUNhLEtBQUQsQ0FUUDs7O0FBWUgsb0JBQUlFLEtBQUosQ0FBVSxnQkFBVixDQVpHLDZEOzs7O0FBZ0JGLElBQUlsQixJQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcclxuXHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmNvbnN0IHJlYWRGaWxlID0gdXRpbC5wcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG5jb25zdCB3cml0ZUZpbGUgPSB1dGlsLnByb21pc2lmeShmcy53cml0ZUZpbGUpO1xyXG5cclxuY29uc3QgZGlyID0gcHJvY2Vzcy5lbnYuRklMRV9EQl9ESVI7XHJcbmNvbnN0IGpzb25GaWxlID0gcHJvY2Vzcy5lbnYuVVNFUl9KU09OO1xyXG5jb25zdCBkYlBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgZGlyLCBqc29uRmlsZSk7XHJcblxyXG5jbGFzcyBVc2VyIHtcclxuICAgIGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoZGJQYXRoKTtcclxuICAgICAgICBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UoZmlsZURhdGEpO1xyXG4gICAgICAgIHJldHVybiB1c2VycztcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5nZXRVc2VycygpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHUgPT4gdS5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVVzZXIgPSBhc3luYyAobmV3VXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5nZXRVc2VycygpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgLi4ubmV3VXNlcixcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1c2Vycy5wdXNoKHVzZXIpO1xyXG5cclxuICAgICAgICBhd2FpdCB3cml0ZUZpbGUoZGJQYXRoLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xyXG5cclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VyID0gYXN5bmMgKHVwZGF0ZVVzZXIpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5nZXRVc2VyQnlJZCh1cGRhdGVVc2VyLmlkKTtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMuZ2V0VXNlcnMoKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5maW5kSW5kZXgodSA9PiB1LmlkID09PSB1cGRhdGVVc2VyLmlkKTtcclxuICAgICAgICAgICAgdXNlcnNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udXBkYXRlVXNlclxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgd3JpdGVGaWxlKGRiUGF0aCwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2Vyc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVXNlciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmdldFVzZXJCeUlkKGlkKTtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMuZ2V0VXNlcnMoKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5maW5kSW5kZXgodSA9PiB1LmlkID09PSBpZCk7XHJcbiAgICAgICAgICAgIHVzZXJzW2luZGV4XS5pc0RlbGV0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgd3JpdGVGaWxlKGRiUGF0aCwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2Vyc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyKCk7XHJcbiJdfQ==