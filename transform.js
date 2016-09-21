var stream = require("stream");

function Transform(options){
    stream.Transform.call(this, options);
    
}

Transform.prototype = Object.create(stream.Transform.prototype);
Transform.prototype.constructor = Transform;

Transform.prototype._transform = function(chunk, encoding, callback) {
     if(parseInt(chunk) < 100){
         this.push(chunk, encoding);
     }
  callback();
}

module.exports = Transform;