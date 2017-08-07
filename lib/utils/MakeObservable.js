'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = MakeObservable;
function MakeObservable(obj, fn) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var triggerOnSetup = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var observable = {};
  var _observable = {};

  var counter = 0;

  var _loop = function _loop(prop) {
    var completeProp = (path ? path + '.' : '') + prop;

    _observable[prop] = obj[prop];

    if (_typeof(obj[prop]) == 'object') {
      _observable[prop] = MakeObservable(obj[prop], fn, completeProp);
    }

    Object.defineProperty(observable, prop, {
      get: function get() {
        return _observable[prop];
      },
      set: function set(newVal) {
        if (_observable[prop] != newVal) {
          var oldVal = _observable[prop];

          if ((typeof newVal === 'undefined' ? 'undefined' : _typeof(newVal)) == 'object') {
            newVal = MakeObservable(newVal, fn, completeProp);
          }

          _observable[prop] = newVal;

          fn(completeProp, oldVal, newVal);
        }
      },
      enumerable: true,
      configurable: true
    });

    counter++;
  };

  for (var prop in obj) {
    _loop(prop);
  }

  if (Array.isArray(obj)) {
    Object.defineProperty(observable, 'length', {
      value: counter
    });
  }

  Object.defineProperty(observable, 'get', {
    value: function get(prop) {
      var obj = this;
      var parts = prop.split('.');

      if (Array.isArray(parts)) {
        var last = parts.pop();
        var l = parts.length;
        var i = 1;
        var current = parts[0];

        while ((obj = obj[current]) && i < l) {
          current = parts[i];
          i++;
        }

        if (obj) {
          return obj[last];
        }
      } else {
        throw 'parts is not valid array';
      }
    }
  });

  Object.defineProperty(observable, 'set', {
    value: function set(prop, value) {
      var obj = this;
      var parts = prop.split('.');

      if (Array.isArray(parts)) {
        var last = parts.pop();
        var l = parts.length;
        var i = 1;
        var current = parts[0];

        while ((obj = obj[current]) && i < l) {
          current = parts[i];
          i++;
        }

        if (obj) {
          obj[last] = value;
        }
      } else {
        throw 'parts is not valid array';
      }
    }
  });

  if (triggerOnSetup) {
    for (var prop in obj) {
      var _completeProp = (path ? path + '.' : '') + prop;

      fn(_completeProp, undefined, observable.get(_completeProp));
    }
  }

  return observable;
}