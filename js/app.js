console.log("OMG IM FUCKING ALIVE");



$(document).ready(function(){

    var player = 1;

    $('.square').on('click', function(event){

        var squareSelected = $(this);

        if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')){  

            alert('Already Been Selected.');
        } else {
            if (player === 1) {
                squareSelected.addClass('ex');
                if(checkIfPlayerWon('ex')) {
                    alert('Congrats! Player ' + player + ' has won!');
                } else {
                    player = 2;
                }
                
            } else {
                squareSelected.addClass('oh');
                if(checkIfPlayerWon('oh')) {
                    alert('Congrats! Player ' + player + ' has won!');
                } else {
                    player = 1;
                }
            }
                // if (player === 1) {
                // squareSelected.addClass('ex');
                // if(checkIfPlayerWon('ex')) {
                //     aler ('Congrats! Player ' + player + ' has won!');
                // }
                // player = 1;
            
        }
    });

    function checkIfPlayerWon(symbol) {

           if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
            return true;
         } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)){
                return true;
         } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){
                return true;
         } else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
            return true;
         } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){
                return true;
         } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){
                return true;
         } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){
                return true;
         } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)){
                return true;
         } else {
            return false;
         }

    }
});














// var turn=0;

// $('.cell').on("click" ,function(){
    
    
//     if(turn % 2 === 0){
//         $(this).text('X');         
//     } else {
//        $(this).text('O');
//     }
//     turn++;
// });










/*$('#board').find('td').on('click', function(){
            if (turnCount % 2 === 0){
              $(this).text('X'); 
              checkVictory('X');
            } else {
           //player 2's turn (O)
              $(this).text('O');
              checkVictory('O');
            }
          turnCount++;
          
      });*/



/*$('#cell2').click(function(){
    var $this = $(this);
    $this.toggleClass('cell2');
    if($this.hasClass('cell2')){
        $this.text('O');         
    } else {
        $this.text('X');
    }
});

$('#cell3').click(function(){
    var $this = $(this);
    $this.toggleClass('cell3');
    if($this.hasClass('cell3')){
        $this.text('X');         
    } else {
        $this.text('O');
    }
});

$('#cell4').click(function(){
    var $this = $(this);
    $this.toggleClass('cell4');
    if($this.hasClass('cell4')){
        $this.text('O');         
    } else {
        $this.text('X');
    }
});

$('#cell5').click(function(){
    var $this = $(this);
    $this.toggleClass('cell5');
    if($this.hasClass('cell5')){
        $this.text('X');         
    } else {
        $this.text('O');
    }
});

$('#cell6').click(function(){
    var $this = $(this);
    $this.toggleClass('cell6');
    if($this.hasClass('cell6')){
        $this.text('X');         
    } else {
        $this.text('O');
    }
});

$('#cell7').click(function(){
    var $this = $(this);
    $this.toggleClass('cell7');
    if($this.hasClass('cell7')){
        $this.text('X');         
    } else {
        $this.text('O');
    }
});

$('#cell8').click(function(){
    var $this = $(this);
    $this.toggleClass('cell8');
    if($this.hasClass('cell8')){
        $this.text('X');         
    } else {
        $this.text('O');
    }
});

$('#cell9').click(function(){
    var $this = $(this);
    $this.toggleClass('cell9');
    if($this.hasClass('cell9')){
        $this.text('X');         
    } else {
        $this.text('O');
    }
});*/