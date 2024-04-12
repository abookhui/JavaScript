var btn = $('.tab-button');
var content = $('.tab-content');

var tab_num = $('.tab-content').length;

// for (let i = 0; i < tab_num; i++){
//     btn.eq(i).on('click', function(){
//         tabOpen(i);
//     })  
//   };

function tabOpen(i){
    btn.removeClass('orange');
    btn.eq(i).addClass('orange');
    content.removeClass('show');
    content.eq(i).addClass('show');
}

// $('.list').click(function(e){ 이벤트 버블링을 이용함 이벤트 리슨너 1번만 사용 >> 램 절약
//     if(e.target == document.querySelectorAll('.tab-button')[0]) tabOpen(0);
//     else if (e.target == document.querySelectorAll('.tab-button')[1]) tabOpen(1);
//     else if(e.target == document.querySelectorAll('.tab-button')[2]) tabOpen(2);
// });

$('.list').click(function(e){
     tabOpen(Number(e.target.dataset.id)); // 지금 누른 버튼의 data id Number() string to number
});

console.log(typeof Number('12'));