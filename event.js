
class Event {
    constructor() { 
        this._callbacks = {};
    }
    emit(event, data) {
        setTimeout(() => {
            this._callbacks[event](data);
        });
    }
    on(event, callback) {
        this._callbacks[event] = callback;
    }
    off(event) {
        delete this._callbacks[event];
    }
}

module.exports = Event;