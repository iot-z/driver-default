const { DriverArduino, HIGH, LOW, INPUT, OUTPUT } = require('./driver-core/driver-arduino');
const pins = require('./utils/node-mcu.js');

class DriverDefault extends DriverArduino {
  constructor(client) {
    super(client);

    this.state = {
      LED_BUILTIN: false,
      D3: false,
    };

    this.actions = {
      on() {},
      off() {},
    };
  }

  async setup() {
    for (let prop in this.state) {
      await this.pinMode(pins[prop], OUTPUT);
    }
  }

  async onChange(prop, oldVal, newVal) {
    console.log('onChange', prop, oldVal, newVal)
    await this.digitalWrite(pins[prop], newVal ? HIGH : LOW);
  }

  async onCall(action, params) {
    console.log('onCall', action, params)
  }
}

module.exports.Driver = Driver;
