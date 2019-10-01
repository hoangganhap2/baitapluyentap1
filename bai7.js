let minu=parseFloat(prompt("Số phút đã gọi điện"));
let fare;
if(minu>=10){
    fare=minu*1500;
}else if(minu>=5){
    fare=minu*2000;
}else if(minu>=3){
    fare=minu*2500;
}else if(minu>1){
    fare=minu*3000;
}else {
    fare=minu*3500;
}
document.write("Số tiền cước điện thoại hộ gia đình "+fare);

