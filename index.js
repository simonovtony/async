
const Event = require('./event');
const Async = require('./async');

const event = new Event();

event.on('something', data => {
    console.log(data);
});

event.emit('something', 'anything');

const async = new Async();

async.parallel([
    callback => {
        callback(1);
    },
    callback => {
        callback(2);
    },
    callback => {
        callback(3);
    }
], data => {
    console.log(data);
});

async.waterfall([
    (data, callback) => {
        console.log(1);
        callback(1);
    },
    (data, callback) => {
        ++data;
        console.log(data);
        callback(data);
    },
    (data, callback) => {
        ++data;
        console.log(data);
    }
]);