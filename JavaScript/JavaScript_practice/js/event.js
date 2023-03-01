const kwanButton2 = document.getElementById("kwanButton");


kwanButton.addEventListener('click', showConsole);
function showConsole() {
    console.log("콘솔로그 Hello!");
};

kwanButton.onclick = showThis;
function showThis() {
    console.log(this);
};


$(function () {

    $("#kwanButton").click(function () {
        alert("event111");
    });

});

$(function () {
    /* 일반 함수 this => 이벤트 호cnf 요소 출력 */
    $('#kwanButton').click(function() {
        console.log(this);
    });
    // 출력값: <button> 요소
});

$(function () {
    /* 화살표 함수 this => 전역 객체 출력 */
    $('#kwanButton').click(() => {
        console.log(this);
    });
    // 출력값: #document 
});


