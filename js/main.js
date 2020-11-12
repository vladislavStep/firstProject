// let a = 7;
// let s = '#';

// for(let i = 0; i < a; i++){
//   let str = '';
//   for(let j = 0; j <= i; j++){
//     str += s;
//   }
//   console.log(str)

// }

// let a = 0;
// for(let i = 0; i <= 100; i++){
//   a = (i % 3 == 0);
//   b = (i % 5 == 0);
//   if (a && b){
//     console.log('FizzBizz');
//   }
//   else if(a){
//     console.log('Fizz')
//   }else if(b){
//     console.log('Buzz');
//   }else{
//     console.log(i);
//   }
// }
//-------------------------------------------
// const size = 20;
// let sym1 = '#';
// let sym2 = ' ';
// for(let i = 0; i < size; i++){
//   let str = '';
//   for(let j = 0; j < size; j++){
//     if((i %2 == 0)){
//       if(j % 2 == 0){
//         str += sym2;
//       }else{
//         str += sym1;
//       }
//     }else{
//       if(j%2 == 0){
//         str += sym1;
//       }else{
//         str += sym2;
//       }
//     }
//   }
//   console.log(str);
// }
//------------------------------------------

// const num = (era) =>{
//   const green = (age = 1) => {
//       console.log(`Сейчас - ${era} век и ${age} год.`)
//       return era * 100 + age;
//   }

//   return green();
// }

//   let a = num(12);
//   console.log(a.green(12));

// --------------------------------------------
// function chicken(){
//   return egg();
// }

// function egg(){
//   return chicken();
// }

// console.log(chicken() + ' пришел первым.');
// --------------------------------------------

// function square(x){ return x*x; }
// console.log(square(2, true, 'ёжик'));

// function minus(a, b){
//   if(b === undefined) return -a;
//   else return a - b;
// }

// console.log(minus(10));
// console.log(minus(10, 5));
// if(){
  
// }
// -------------------------

d3.select("body")
  .append("svg")
  .append("rect")
  .attr("width", 50)
  .attr("height", 200)
  .style("fill", "red");

d3.select("p").style("color", "blue");
d3.select("body").style("background-color", '#432919');
d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
  .text(function(d) { return "I’m number " + d + "!"; });

// Update…
var p = d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .text(function(d) { return d; });

// Enter…
p.enter().append("p")
    .text(function(d) { return d; });

// Exit…
p.exit().remove();

d3.select("body").transition()
    .style("background-color", "black");

d3.selectAll("circle").transition()
.duration(750)
.delay(function(d, i) { return i * 10; })
.attr("r", function(d) { return Math.sqrt(d * scale); });