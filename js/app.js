console.log("OMG IM FUCKING ALIVE");



var turn=0;

$('.cell').on("click" ,function(){
    
    
    if(turn % 2 === 0){
        $(this).text('X');         
    } else {
       $(this).text('O');
    }
    turn++;
});





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