
class Rules {
constructor(moves) {
    this.moves = moves;
    this.CompChooseIndex = this.getCompChooseIndex(moves)   }

getHalfOfArray() {
 return (this.moves.length-1)/2
}

getCompChooseIndex() {
 let rand = Math.random() * (this.moves.length- 1 );
return  Math.floor(rand);
};    

getCompWins() {
 const  halfArr = this.getHalfOfArray()
 if ( this.CompChooseIndex <=halfArr ) {
  const compWins = this.moves.slice((this.CompChooseIndex+1), (halfArr + this.CompChooseIndex+1));  // выбор компа кроет Х последующих и проигрывает Х предыдущим
  return compWins } else {
  const  compWins1 = this.moves.slice(this.CompChooseIndex+1);
  const lastMoves = halfArr - compWins1.length;
  const compWins2 = this.moves.slice(0, lastMoves)
  const compWins = compWins1.concat(compWins2)
  return compWins}
}
}
module.exports = Rules
