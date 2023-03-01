//배열에 담긴 객체 key값으로 정렬시키기
let sample = [
    {name :'apple', price : 10000},
    {name :'banana', price : 1500},
    {name :'pineapple', price : 2000},
    {name :'mango', price : 1200}
];

sample.sort((a,b) => {
    if(a.price > b.price){
        return 1;
    }else if(a.price<b.price){
        return -1;
    }
});
console.log(sample);
//(4) [{…}, {…}, {…}, {…}]
    // 0: {name: 'mango', price: 1200}
    // 1: {name: 'banana', price: 1500}
    // 2: {name: 'pineapple', price: 2000}
    // 3: {name: 'apple', price: 10000}
