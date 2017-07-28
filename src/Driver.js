import { DriverCore } from './DriverDefault';
import { INPUT, OUTPUT, HIGH, LOW } from './DriverDefault';
import { D0, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, SDA, SCL, LED_BUILTIN, BUILTIN_LED } from './utils/NodeMCU.js';

class Driver extends DriverDefault {


  getState() {
    return {
      D0: this.digitalRead(D0) == HIGH,
      LED_BUILTIN: this.digitalRead(LED_BUILTIN) == HIGH,
    }
  }

  handleChange() {
    this.state
  }
}
