function panggilforEach(){
  var data = "Saya ingin belajar bersama";
  var result = data.split(" ");
  result.forEach(function (item,index,array){
    console.log("Item :",item,"Index ke",index);
  })
}
panggilforEach();
