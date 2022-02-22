//b1: xác định input của đề bài
var n = 586;
var hundred = Math.floor(n/100);
var ten = Math.floor(n%100/10);
var unit = n % 10;
var sum = unit + ten + hundred;
console.log('Kết quả là :',sum)
