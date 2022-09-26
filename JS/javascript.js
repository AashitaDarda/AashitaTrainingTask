var calculated = false;
var queue = [];
var input = 0;
function calculateQueue(value){
    if (input !==0) {
        input = parseFloat(input);
        addToQueue(input);
    }
    var answer = value[0];
    var divideByZero = 0;
    for(var i =2;i<value.length;i=i+2){
        switch (queue[i-1]) {
            case '+':
                answer=answer+value[i];                
                break;
            case '-':
                answer=answer-value[i];
                break;
            case '*':
                answer=answer*value[i];
                break;
            case '/':
                if(value[i] === 0)
                    divideByZero = 1;
                else
                 answer = answer/value[i];
                break;
            default:
                

        }
    }
    answer = answer.toFixed(5);
    answer = parseFloat(answer);
    // clearAll()
    if (divideByZero === 1) {
        clearAll();
        document.getElementById('answer').innerHTML ="ERROR";
    }
    else
    {
        document.getElementById('answer').innerHTML = answer;
        input = answer;
        queue = [];
        return calculated = true;
    }
}

function addToQueue(input){
    queue.push(input);

}

function clearAll(){
    queue=[];
    input=0;
    document.getElementById("answer").innerHTML = "0";
    
    // numericButton(arg).addEventListener('click',clearAll())
}

function numericButton(arg){
    if (document.getElementById("answer").innerHTML === "ERROR" || 
       (document.getElementById('answer').innerHTML == "0" && arg != "."))
    {
        document.getElementById("answer").innerHTML = "";
        
    }
    if (!(arg === ".") || !input.match(/[.]/)) {
        // input = input + arg;
        // document.getElementById("answer").innerHTML +=arg;
        console.log(calculated)
        if(calculated == true){
            document.getElementById("answer").innerHTML = arg
            // return calculated = false;
            location.reload()
        }
        else{
            input = input + arg;
            document.getElementById("answer").innerHTML +=arg;
            // return calculated = true;
        }
    }
}

function operatorButton(arg){
    if(input !== 0 && input !== "-"){
        input = parseFloat(input);
        addToQueue(input);
        addToQueue(arg);
        document.getElementById("answer").innerHTML +=arg;
        input = 0;
        
    }
    if(arg == "-" && isNaN(queue[0]) && input !== "-"){
        input = "-";
            document.getElementById("answer").innerHTML="-";
            
    }
}

//Dropdown Cities

// condition 1 - At least one select
//condition 2 - No duplicate cities
function myfunForSubmitBtn(){
    drop1 = document.getElementById('drop1').value
    drop2 = document.getElementById('drop2').value
    drop3 = document.getElementById('drop3').value

     if (drop1 == ''){
       document.getElementById('showinfo').innerText = 'Select atlest one city from dropdown list' ;  
    }   
    else if(drop2 !='' && drop2==drop3){
        document.getElementById('showinfo').innerText = "Don't select same cities from dropdown list...Please Select another City";
    }
    else if(drop1 !== '' && drop2 == '' && drop3 !== ''){
        document.getElementById('showinfo').innerText = "Don't keep it blank.Please fill city";
    }
    else if(drop1 == drop2 || drop1 == drop3){
        document.getElementById('showinfo').innerText = "Don't select same cities from dropdown list...Please Select another City";
    }
    else{
        document.getElementById('showinfo').innerText = "your data is saved successfully";
    }
}

//condition 3 - In sequence  
function myfunFor1stDropdown(){
    var drop1= document.getElementById('drop1').value;
    
    if(drop1 !== ''){
        document.getElementById('drop2').disabled = false;
    }
}

function myfunFor2ndDropdown(){
    drop2 = document.getElementById('drop2').value;
    
    if(drop2 !== ''){
    
        document.getElementById('drop3').disabled = false;

    }
}

function myfunFor3rdDropdown(){
    drop3 = document.getElementById('drop3').value
}

//TicTacToe

//All Clear Reset function
function ResetAllBox(){
    location.reload();
    document.getElementsByClassName('box').value = '';
}

//Here function is used for turns of which player X or 0;
flag = 1;
function CheckPlayer1(){
    if(flag == 1){
        document.getElementById('box1').value='X'
        document.getElementById('box1').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box1').value='0'
        document.getElementById('box1').disabled = true
        flag = 1;
    }
}

function CheckPlayer2(){
    if(flag == 1){
        document.getElementById('box2').value='X'
        document.getElementById('box2').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box2').value='0'
        document.getElementById('box2').disabled = true
        flag = 1;
    }
}

function CheckPlayer3(){
    if(flag == 1){
        document.getElementById('box3').value='X'
        document.getElementById('box3').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box3').value='0'
        document.getElementById('box3').disabled = true
        flag = 1;
    }
}

function CheckPlayer4(){
    if(flag == 1){
        document.getElementById('box4').value='X'
        document.getElementById('box4').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box4').value='0'
        document.getElementById('box4').disabled = true
        flag = 1;
    }
}

function CheckPlayer5(){
    if(flag == 1){
        document.getElementById('box5').value='X'
        document.getElementById('box5').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box5').value='0'
        document.getElementById('box5').disabled = true
        flag = 1;
    }
}

function CheckPlayer6(){
    if(flag == 1){
        document.getElementById('box6').value='X'
        document.getElementById('box6').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box6').value='0'
        document.getElementById('box6').disabled = true
        flag = 1;
    }
}

function CheckPlayer7(){
    if(flag == 1){
        document.getElementById('box7').value='X'
        document.getElementById('box7').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box7').value='0'
        document.getElementById('box7').disabled = true
        flag = 1;
    }
}

function CheckPlayer8(){
    if(flag == 1){
        document.getElementById('box8').value='X'
        document.getElementById('box8').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box8').value='0'
        document.getElementById('box8').disabled = true
        flag = 1;
    }
}

function CheckPlayer9(){
    if(flag == 1){
        document.getElementById('box9').value='X'
        document.getElementById('box9').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box9').value='0'
        document.getElementById('box9').disabled = true
        flag = 1;
    }
}

//Checking who is Winner
function Winner(){
    var box1,box2,box3,box4,box5,box6,box7,box8,box9;
    box1 = document.getElementById('box1').value;
    box2 = document.getElementById('box2').value;
    box3 = document.getElementById('box3').value;
    box4 = document.getElementById('box4').value;
    box5 = document.getElementById('box5').value;
    box6 = document.getElementById('box6').value;
    box7 = document.getElementById('box7').value;
    box8 = document.getElementById('box8').value;
    box9 = document.getElementById('box9').value;

    //check Weteher X is win or not and after that all box will be disabled
    //checking for X is Winner
    if((box1 == 'X' && box2 == 'X' && box3 == 'X') || (box4 == 'X' && box5 == 'X' && box6 == 'X') || 
       (box7 == 'X' && box8 == 'X' && box9 == 'X') || (box1 == 'X' && box4 == 'X' && box7 == 'X') ||
       (box2 == 'X' && box5 == 'X' && box8 == 'X') || (box3 == 'X' && box6 == 'X' && box9 == 'X') ||
       (box1 == 'X' && box5 == 'X' && box9 == 'X') || (box3 == 'X' && box5 == 'X' && box7 == 'X')){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box4').disabled = true;
        document.getElementById('box5').disabled = true
        document.getElementById('box6').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;        
    }
    
    //checking for 0 is Winner
    else if((box1 == '0' && box2 == '0' && box3 == '0') || (box4 == '0' && box5 == '0' && box6 == '0') ||
            (box7 == '0' && box8 == '0' && box9 == '0') || (box1 == '0' && box4 == '0' && box7 == '0') ||
            (box2 == '0' && box5 == '0' && box8 == '0') || (box3 == '0' && box6 == '0' && box9 == '0') ||
            (box1 == '0' && box5 == '0' && box9 == '0') || (box3 == '0' && box5 == '0' && box7 == '0')){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box4').disabled = true;
        document.getElementById('box5').disabled = true
        document.getElementById('box6').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;
    }

    //When Match is Tie
    else if((box1 == 'X' || box1 =='0') && (box2 == 'X' || box2 == '0') &&
            (box3 == 'X' || box3 =='0') && (box4 == 'X' || box4 == '0') &&
            (box5 == 'X' || box5 =='0') && (box6 == 'X' || box6 == '0') &&
            (box7 == 'X' || box7 =='0') && (box8 == 'X' || box8 == '0') &&
            (box9 == 'X' || box9 =='0') ){
        document.getElementById('result').innerHTML="OMG !!! The Match is tie "
    }

    else{
        if(flag == 1){
            document.getElementById('result').innerHTML="Player X chance"
        }
        else
        {
            document.getElementById('result').innerHTML="Player 0 chance"
        }
    }
}