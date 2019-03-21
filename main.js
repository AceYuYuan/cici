require.config({
  paths:{
    "jquery":"jquery-1.11.3.min",
    "lun":"lunbo",
  }
})

require(["jquery","lun"],function($,iii){

  var result=[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]
  // console.log($("#img-box").children().children().length)
  function int(){
    var str="<ul>";
    var li1="<li>";
    var li2="</li>"

          for(i=0;i<result.length;i++){
  
          // $("#img-box img").
          str+=li1+`<img src="${result[i].src}">`+li2;
          }
      str+="</ul>";
      return str;
 
  }
  // $("#")
  // img.src
  $("#img-box").append(int());
  $("#img-box li").eq(0).addClass("img1");




  iii()
  // iii.show("#menu",result);

})