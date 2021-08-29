$(document).ready(function(){
//hide
$('.hide').click(function(){
    $('#hidec').hide();
});
//show
$('.show').click(function(){
    $('#hidec').show();
});

//fade all start
//fadeout
$('#f01').click(function(){
    $("#fcontent").fadeOut();
});
//fadein
$('#f02').click(function(){
    $("#fcontent").fadeIn();
})
//fadetoggle
$('#f03').click(function(){
    $('#fcontent').fadeToggle(2000);
});

//according 

$('#pan').click(function(){

    $('#acont').slideToggle(1000);
});
$('#pan02').click(function(){

    $('#acont02').slideToggle(1000);
});

//ui according
$( "#accordion" ).accordion({
    collapsible: true
  });

  //ui autocomplate
  var jajatagace =[
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
    "cat",
    "dog"
  ];
  
  $('#tags').autocomplete({
    source:jajatagace
  });

  //date picker
  $('#date').datepicker();
  //dialog
  
  $('#dialog').dialog({
    autoOpen:false,
    show:{
        effect:"blind",
        duration:1000
    },
    hide:{
        effect:"explode",
        duration:1000
    },  

  });

  $('#opener').on("click",function(){
      $('#dialog').dialog("open");
  });

  //menu
  $( "#menu" ).menu();
  //progressbar
  $( "#progressbar" ).progressbar({
    value: 50
  });


  //tooltrip start
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//tooltrip end


});

