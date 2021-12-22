const crypto = require('crypto');
const secureRandom = require('secure-random');

class Encrypt {
  constructor(move) {
    this.move = move;
  }

  get key () {
    return secureRandom.randomBuffer(32).toString('hex')}

  get cryptoMove (){
    const hmac =  crypto.createHmac('sha256', this.key).update(this.move).digest('hex');
    return hmac
  }
}

module.exports = Encrypt