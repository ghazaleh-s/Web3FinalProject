

let  res = null;
let finds = [];
let result = {};

////////////////////

function render (data , id){
    let source = document.getElementById(id).innerHTML;
    let template = Handlebars.compile(source);
    return template(data);
}

function loadJSON(m,u,c){
    let xHR = new XMLHttpRequest;
    xHR.onreadystatechange = ()=>{
        if(xHR.readyState === 4 && xHR.status ===200){
            res = JSON.parse(xHR.response);
            c(res);
        }
    }

    xHR.open(m,u,true);
    xHR.send();
}

//////////////////////////////
(function($){

// Initiate the wowjs animation library
  new WOW().init();

  // jQuery counterUp (used in Statistic section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  


})(jQuery);









