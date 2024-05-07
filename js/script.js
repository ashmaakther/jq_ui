// jq
$(document).ready(function(){
    // draggable
    $( "#draggable" ).draggable();

    // accordian
    $( "#accordion" ).accordion({
        collapsible: true
    });
    
    // autocomplete
    var data= ["Full Stack Web Development",
        "graphics Design",
        "Desital Marketing"
    ];
    $( "#c_name" ).autocomplete({
        source: data
      });

    // datepicker
    $( "#datepicker" ).datepicker();

    // tabs
    $( "#tabs" ).tabs();

    // tooltip
    var tooltips = $( "[title]" ).tooltip({
        position: {
          my: "left top",
          at: "right+5 top-5",
          collision: "none"
        }
      });
      $( "<button>" )
        .text( "Show help" )
        .button()
        .on( "click", function() {
          tooltips.tooltip( "open" );
        })
        .insertAfter( "form" );

    // Toggle
     // run the currently selected effect
     function runEffect() {
        // get effect type from
        var selectedEffect = $( "#effectTypes" ).val();
   
        // Most effect types need no options passed by default
        var options = {};
   
        // Run the effect
        $( "#effect" ).toggle( selectedEffect, options, 500 );
      };
   
      // Set effect from select menu value
      $( "#button" ).on( "click", function() {
        runEffect();
      });
      
    // droppable
    $( "#drag" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // sortable
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    
    // resizable
    $( "#resizable" ).resizable();

    // menu
    $( "#menu" ).menu();

    // dialog
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
    
});