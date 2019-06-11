var answr = Math.floor(Math.random() * 120) + 19;
console.log("the number is " + answr);
$("#target").text(answr);

var runningtally=0;
$("#total").text(runningtally);
var wins=0;
$("#userwins").text("Wins "+wins);
var losses=0;
$('#userlosses').text("Losses "+losses);
var number1 = Math.floor(Math.random() * 13) + 1;
console.log(number1);
var number2 = Math.floor(Math.random() * 13) + 1;
console.log(number2);
var number3 = Math.floor(Math.random() * 13) + 1;
console.log(number3);
var number4 = Math.floor(Math.random() * 13) + 1;
console.log(number4);

function win(){
    wins++;
    alert("congrats you collected the correct amount of crystals you may exit the mine safely")
    $("#userwins").text("Wins "+wins);
    reset();
};
function youlose(){
    losses++;
    alert("you got greedy the mine collapsed you are stuck here for eternity")
    $('#userlosses').text("Losses "+losses);
    reset();
}
$("#crystal1").attr("randomNumber", number1);
$("#crystal2").attr("randomNumber", number2);
$("#crystal3").attr("randomNumber", number3);
$("#crystal4").attr("randomNumber", number4);

$("#crystal1").on("click", function () {
    runningtally=runningtally+number1;
  $("#total").text(runningtally);
if (runningtally==answr){
    win();
}else if (runningtally>answr){
    youlose();
}
});
$("#crystal2").on("click", function () {
    runningtally=runningtally+number2;
  $("#total").text(runningtally);
  if (runningtally==answr){
    win();
}else if (runningtally>answr){
    youlose();
};
});
$("#crystal3").on("click", function () {
    runningtally=runningtally+number3;
  $("#total").text(runningtally);
  if (runningtally==answr){
    win();
}else if (runningtally>answr){
    youlose();
}
});
$("#crystal4").on("click", function () {
    runningtally=runningtally+number4;
  $("#total").text(runningtally);
  if (runningtally===answr){
    win();
}else if (runningtally>answr){
    youlose();
}
});
function reset(){
answr = Math.floor(Math.random() * 120) + 19;
console.log("the number is " + answr);
$("#target").text(answr);
 runningtally=0;
$("#total").text(runningtally);
 number1 = Math.floor(Math.random() * 13) + 1;
console.log(number1);
 number2 = Math.floor(Math.random() * 13) + 1;
console.log(number2);
 number3 = Math.floor(Math.random() * 13) + 1;
console.log(number3);
 number4 = Math.floor(Math.random() * 13) + 1;
console.log(number4);
};