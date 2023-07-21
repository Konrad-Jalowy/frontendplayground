$(function(){


    $("#click").on( "click", function() {
        let type = $("#typeofwrap option:selected").val();
        
        $( "li" ).each(function() {
            $( this ).wrap(`<${type}></${type}>`);
          });
      });
});