"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")); // import express from 'express';
// import { userRouter } from './routes';

// const app = express();

// app.use(express.json());

// app.use('/user', userRouter);

// app.listen(3000);
var _require =

require('pg'),Client = _require.Client;

var CONNECTION_STR = 'postgres://test1:test1@db/db-test';
var client = new Client(CONNECTION_STR);

init();function

init() {return _init.apply(this, arguments);}function _init() {_init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              client.connect());case 2:

            client.query('SELECT * FROM Users ORDER BY id ASC', function (err, res) {
              if (err) {
                console.log('ERROR: ', err);
              } else {
                console.log(res.rows);
              }
              client.end();
            });case 3:case "end":return _context.stop();}}}, _callee);}));return _init.apply(this, arguments);}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkNsaWVudCIsIkNPTk5FQ1RJT05fU1RSIiwiY2xpZW50IiwiaW5pdCIsImNvbm5lY3QiLCJxdWVyeSIsImVyciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwiZW5kIl0sIm1hcHBpbmdzIjoid1JBQUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR21CQSxPQUFPLENBQUMsSUFBRCxDLENBQWxCQyxNLFlBQUFBLE07O0FBRVIsSUFBTUMsY0FBYyxHQUFHLG1DQUF2QjtBQUNBLElBQU1DLE1BQU0sR0FBRyxJQUFJRixNQUFKLENBQVdDLGNBQVgsQ0FBZjs7QUFFQUUsSUFBSSxHOztBQUVXQSxJLGlKQUFmO0FBQ1VELGNBQUFBLE1BQU0sQ0FBQ0UsT0FBUCxFQURWOztBQUdJRixZQUFBQSxNQUFNLENBQUNHLEtBQVAsQ0FBYSxxQ0FBYixFQUFvRCxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM5RCxrQkFBSUQsR0FBSixFQUFTO0FBQ0xFLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxHQUF2QjtBQUNILGVBRkQsTUFFTztBQUNIRSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDSDtBQUNEUixjQUFBQSxNQUFNLENBQUNTLEdBQVA7QUFDSCxhQVBELEVBSEosd0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuLy8gaW1wb3J0IHsgdXNlclJvdXRlciB9IGZyb20gJy4vcm91dGVzJztcclxuXHJcbi8vIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vIGFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5cclxuLy8gYXBwLnVzZSgnL3VzZXInLCB1c2VyUm91dGVyKTtcclxuXHJcbi8vIGFwcC5saXN0ZW4oMzAwMCk7XHJcblxyXG5cclxuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoJ3BnJyk7XHJcblxyXG5jb25zdCBDT05ORUNUSU9OX1NUUiA9ICdwb3N0Z3JlczovL3Rlc3QxOnRlc3QxQGRiL2RiLXRlc3QnO1xyXG5jb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KENPTk5FQ1RJT05fU1RSKTtcclxuXHJcbmluaXQoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG5cclxuICAgIGNsaWVudC5xdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycyBPUkRFUiBCWSBpZCBBU0MnLCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogJywgZXJyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMucm93cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsaWVudC5lbmQoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4iXX0=