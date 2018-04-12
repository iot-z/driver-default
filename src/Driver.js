const a = require('./DriverDefault');
const { D0, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, SDA, SCL, LED_BUILTIN, BUILTIN_LED } = require('./utils/NodeMCU.js');

class Driver extends DriverDefault {
  constructor(id, name, type, version, client) {
    super(id, name, type, version, client);

    this.state = {
      LED_BUILTIN: false,
    };

    setInterval(() => {
        this.state.LED_BUILTIN != this.state.LED_BUILTIN;
    }, 1000);
  }

  onChange(prop, oldVal, newVal) {
    this.digitalWrite(global[prop], newVal ? HIGH : LOW);
  }
}
