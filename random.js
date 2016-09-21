var stream = require("stream");

function RandomNums(options) {
    stream.Readable.call(this, options);
    this._start = 1;
    this._end = 10;
    this._curr = this._start;
    
}

RandomNums.prototype = Object.create(stream.Readable.prototype);
RandomNums.prototype.constructor = RandomNums;

RandomNums.prototype._read = function() {
  
   var ranNum = Math.floor((Math.random() * 200) + 1);
   var str = " " + ranNum;
   var buff = new Buffer(str);
   this.push(buff);
   this._curr++;
   if(this._curr === this._end){
       this.push(null);
   }
};

module.exports = RandomNums;