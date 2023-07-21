$(function(){


    $("#click").on( "click", function() {
        $( "li" ).each(function() {
            $( this ).css('font-weight', 'bold');
          });
      });
});