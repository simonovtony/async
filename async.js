
const Event = require('./event');

const event = Symbol();

class Async {
    waterfall(callbacks) {
        const event = new Event();
        for (let i = 0; i < callbacks.length; i++) {
            event.on(i, data => {
                callbacks[i](data, (data, callback) => {
                    event.emit(i + 1, data);
                });
            });   
        }
        event.emit(0, null);
    }

    parallel(callbacks, callback) {
        const event = new Event();
        let count = 0;
        let results = [];
        for (let i = 0; i < callbacks.length; i++) {
            event.on(i, data => {
                callbacks[i](data => {
                    results[i] = data;
                    if (++count === callbacks.length) {
                        callback(results);
                    }
                });
            });
            event.emit(i);
        }
    }
}

module.exports = Async;