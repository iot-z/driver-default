const EventEmitter = require('events');

class DriverCore extends EventEmitter {
  /**
  * Constructor
  * @param  {string} IP
  * @return {void}
  */
  constructor(id, name, type, version, client) {
    super();

    this._id      = id;
    this._name    = name;
    this._type    = type;
    this._version = version;
    this._client  = client;

    this._client.on('*', (topic, data) => {
      this.emit(topic, data);
    });

    // UI interface API
    this.state   = {};
    this.actions = {};
  }

  /**
   * Handler for changes on state on the UI
   * @param  {string} prop   Path in dot style of the changed property
   * @param  {any} oldVal    Old value of property
   * @param  {any} newVal    New value of property
   * @return {void}
   */
  onChange(prop, oldVal, newVal) {

  }

  /**
   * Handler of call actions on the UI
   * @param  {string} action   The action/method name
   * @param  {array} params    All params to be passed to the function
   */
  onCall(action, params) {
    this.actions[action].apply(this, params);
  }

  /**
  * Get instance of the client
  * @return {Client} Client instance
  */
  get client() {
    return this._client;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  get version() {
    return this._version;
  }
}

module.exports = DriverCore;
