$(function(){


    $("#click").on( "click", function() {
        let type = $("#typeofwrap").val();
        
        $( "li" ).each(function() {
            $( this ).wrap(`<${type}></${type}>`);
          });
      });
});