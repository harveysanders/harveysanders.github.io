if($(".mks-repl-code").length > 0){
  $("head").append("<script src='/repl.js' id='jsrepl-script'></script><link href='/repl.css' rel='stylesheet' type='text/css'>")
  require.config({paths: {
    ace: "ace/ace"
  }})

  require(["ace"],function( ){
    $(document).ready(function(){
      function waitForElement(){
        if(typeof ace !== "undefined"){
          require(["mks-repl"],function( MKSjsrepl ){
            var createMKSREPL = function (element) {
              var scriptEl = $(element).find("script");
              var  code = scriptEl.html();
              var jasmineSetting = scriptEl.attr("jasmine");
              if (jasmineSetting === "true"){
                jasmineSetting = true;
              }else{
                jasmineSetting = false;
              }
              new MKSjsrepl(element.id, code, null, jasmineSetting );
            }
            var arr = $(".mks-repl");
            for (var i=0; i<arr.length; i++){
              $(arr[i]).attr("id","ex"+i)
              createMKSREPL(arr[i]);
            }
          });
        }
        else{
          setTimeout(function(){
            waitForElement();
          },250);
        }
      }
      waitForElement()
    });
  });
}
