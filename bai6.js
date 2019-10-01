let sale=parseFloat(prompt("Nhập vào doanh số bán hàng"));
let com;
if(sale>=10000000){
    com=(sale*5)/100;
}else if(sale>=5000000){
    com=(sale*3)/100;
    }else{
    com=(sale*2)/100;
}
document.write("Số tiền hoa hồng là "+com);

