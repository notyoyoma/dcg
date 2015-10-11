export class Logger {
  constructor() {
    this.types = [
      'player',
      'party',
      'combat',
      'transaction',
      'general'
    ];
    this.streams = {};
    this.maxStreamLength = 100;
    this.modal = alert;

    for (let type in this.types) {
      this.streams[type] = [];
    }
  }

  message(data) {
    let stream = this.streams[ data.type || 'general' ];
    stream.push( data.text || "");
    while (stream.length > maxStreamLength) {
      stream.pop();
    }
  }

  setModal(modal) {
    this.modal = modal;
  }

  popup(data) {
    this.modal(data);
  }
}

export const log = new Logger();
