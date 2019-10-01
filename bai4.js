let a=parseInt(prompt("Nhập số a"));
let b=parseInt(prompt("Nhập số b"));
let c=parseInt(prompt("Nhập số c"));
let max=a;
if(max<b){
    max=b;
    if(max<c){
        max=c;
    }
}
document.write("Số lớn nhất là "+max)