const { DriverCore, INPUT, OUTPUT, HIGH, LOW } = require('./DriverDefault');
const { D0, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, SDA, SCL, LED_BUILTIN, BUILTIN_LED } = require('./utils/NodeMCU.js');

class Driver extends DriverDefault {
  constructor(id, name, type, version, client) {
    super(id, name, type, version, client);

    this.state = {
      LED_BUILTIN: false,
    };
  }

  handleChange(prop, oldVal, newVal) {
    this.digitalWrite(global[prop], newVal ? HIGH : LOW);
  }
}
