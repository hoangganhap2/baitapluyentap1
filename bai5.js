let bkt=parseFloat(prompt("Điểm bài kiểm tra"));
let tgk=parseFloat(prompt("Điểm thi giữa kì"));
let tck=parseFloat(prompt("Điểm thu cuối kì"));
sum=bkt+tgk+tck;
ave=sum/3;
if(ave>8){
    document.write("Xếp hạng học sinh là giỏi");
}else if(ave>6.5){
    document.write("Xếp hạng học sinh là khá");
}else if(ave>5){
    document.write("Xếp hạng học sinh là trung bình");
}else if(ave>3){
    document.write("Xếp hạng học sinh là yếu");
}else{
    document.write("Xếp hạng học sinh là kém");
}
