var RandomNums = require("./random");
var rando = new RandomNums();
var Transform = require("./transform");
var trans = new Transform();
var Cache = require("./cache");
var cache = new Cache('test');

rando.pipe(trans);
trans.pipe(cache);

cache.on('finish', function() {
    console.log('Cache store:');
    for (var key in Cache.store) {
        console.log(key, ':', Cache.store[key].toString());
    }
});
