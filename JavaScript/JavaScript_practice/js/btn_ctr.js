
const bigBtn = document.getElementById('bigBtn');
const mBtn = document.getElementById('mBtn');
const sBtn = document.getElementById('sBtn');


//Section 이벤트 생성
bigBtn.addEventListener('click', e => {
    alert('section 클릭!');
});

//Div 클릭 이벤트 생성
mBtn.addEventListener('click', e => {
    alert('div 클릭!');
});

//Input 버튼 클릭 이벤트 생성
sBtn.addEventListener('click', e => {

    // e.stopPropagation();
    // .stopPropagation(): 상위 엘리먼트들로의 이벤트 전파를 중단

    alert('button 클릭!');
});



