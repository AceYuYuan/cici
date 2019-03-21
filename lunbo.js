
function aaa(){
var index=0;
var timer;
function time(){
 timer = setInterval(() => {
index++;
if (index>2) {
    index=0;
}
    $("#img-box li").removeClass("img1");
    $("#img-box li").eq(index).addClass("img1");
    $("#button-box li").removeClass("btn1");
    $("#button-box li").eq(index).addClass("btn1");
}, 1500);};
time();
$("#button-box button").on("mouseover",function(){
    clearInterval(timer);
    index=$(this).parent().index();
    $("#button-box li").removeClass("btn1");
    $(this).parent().addClass("btn1");
    $("#img-box li").removeClass("img1");
    $("#img-box li").eq(index).addClass("img1");
});
$("#button-box button").on("mouseout",function(){
    time();
})
}
define(function(){
return aaa;
});