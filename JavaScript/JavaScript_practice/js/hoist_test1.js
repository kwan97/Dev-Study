const kwanButton2 = document.getElementById("kwanButton");

console.time('test2 time');
/*함수 선언문(공통)*/
kwanButton2.addEventListener("click", func1);

function func1(test1) {
    console.log('테스트2: '+test1);
};

func1('2번');
console.timeEnd('test2 time');