var test = []

// 추가
test.push({ "name": 1, "id": 2 });
test.push({ "name": 2, "id": 3 });
test.push({ "name": 3, "id": 4 });
test.push({ "name": 4, "id": 5 });

// Object 추가
var obj = new Object()
obj.name = 5;
obj.id = 6;
test.push(obj);

test.forEach(function (item) {
    console.log(item.name + ", " + item.id);
});

// slice 시작할 index, slice로 가져올 오브젝트 갯수
console.log('==0,1 인덱스 값 가져오기');
test.splice(0, 2).forEach(function (item) {
    console.log(item.name + ", " + item.id);
});

console.log('==0,1 인덱스 사라지고 남은 값만 test에 남음==');
test.forEach(function (item) {
    console.log(item.name + ", " + item.id);
});

// 값 변경
console.log('==이름이 4인 object의 name 변경==');
var test3 = test.find(function (item) {
    return item.name == '4';
});
test3.name = '변경!!!';
test.forEach(function (item) {
    console.log(item.name + ", " + item.id);
});

// 값 삭제
console.log('==이름이 변경!!!인 object 삭제==');
var index = test.indexOf(test3)
test.splice(index, 1);
test.forEach(function (item) {
    console.log(item.name + ", " + item.id);
});