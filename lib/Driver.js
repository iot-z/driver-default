'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DriverDefault2 = require('./DriverDefault');

var _NodeMCU = require('./utils/NodeMCU.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Driver = function (_DriverDefault) {
  _inherits(Driver, _DriverDefault);

  function Driver(id, name, type, version, client) {
    _classCallCheck(this, Driver);

    var _this = _possibleConstructorReturn(this, (Driver.__proto__ || Object.getPrototypeOf(Driver)).call(this, id, name, type, version, client));

    _this.state = {
      LED_BUILTIN: false
    };
    return _this;
  }

  _createClass(Driver, [{
    key: 'handleChange',
    value: function handleChange(prop, oldVal, newVal) {
      this.digitalWrite(global[prop], newVal ? _DriverDefault2.HIGH : _DriverDefault2.LOW);
    }
  }]);

  return Driver;
}(DriverDefault);