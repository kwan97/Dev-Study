const kwanButton3 = document.getElementById("kwanButton");

console.time('test3 time');
/*함수 선언문(공통)*/
kwanButton3.addEventListener("click", func1);
function func1(test1) {
    console.log('테스트3: '+test1);
};
func1('3번');
console.timeEnd('test3 time');