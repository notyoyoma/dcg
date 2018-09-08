class Logger {
  constructor() {
    this.types = [
      'player',
      'party',
      'character',
      'combat',
      'transaction',
      'general'
    ];
    this.streams = {};
    this.maxStreamLength = 100;
    // TODO -- find alert module
    // this.modal = alert;

    for (let type of this.types) {
      this.streams[type] = [];
    }
  }

  message(data) {
    let stream = this.streams[ data.type || 'general' ];
    stream.push( data.text || "");
    while (stream.length > this.maxStreamLength) {
      stream.pop();
    }
  }

  setModal(modal) {
    this.modal = modal;
  }

  popup(data) {
    //this.modal(data);
  }
}

global.log = new Logger();

export default global.log;
