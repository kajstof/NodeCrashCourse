import EventEmitter from 'events';
import * as uuid from 'uuid';

class LoggerEx extends EventEmitter {
  log(msg: string) {
    // Call event
    this.emit('message', {
      id: uuid.v4(),
      msg
    })
  }
}

const logger = new LoggerEx();
logger.on('message', (data) => console.log('Called Listener', data));
logger.log('Hello World!');