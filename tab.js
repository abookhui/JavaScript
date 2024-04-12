var btn = $('.tab-button');
var content = $('.tab-content');

var tab_num = $('.tab-content').length;

for (let i = 0; i < tab_num; i++){

    btn.eq(i).on('click', function(){
        btn.removeClass('orange');
        btn.eq(i).addClass('orange');
        content.removeClass('show');
        content.eq(i).addClass('show');
    })
  
  };
