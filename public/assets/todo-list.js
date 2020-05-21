$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('#item');
      var name = $('#name');
      var todo = {item: item.val(), name : name.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      let el =  $(this);
      var id = $(this).attr("data-item");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + id,
        success: function(data){
          //do something with the data via front-end framework
          el.remove();
        }
      });
  });

});
