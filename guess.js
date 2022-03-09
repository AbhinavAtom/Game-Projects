
//By abhinav

const home = () => {

    haveWon = false, haveLost = false;
    guessCount = 1, grtTabInd = 1, lessTabInd = 1;
    grtTabInd_com = 1, lessTabInd_com = 1;

    document.getElementById("game-place").innerHTML = `
    <div class="single-play-div start-type-btn" onclick="playGame('single')">Single Play</div>
    <div class="com-play-div start-type-btn" onclick="playGame('computer')">Play With Computer</div>
    <div class="friend-play-div start-type-btn" onclick="playGame('friend')">Play with Friend</div>
    `;
}


// Level Selection function
const playGame = (playBy) => {

    haveWon = false, haveLost = false;
    guessCount = 1, grtTabInd = 1, lessTabInd = 1;
    grtTabInd_com = 1, lessTabInd_com = 1;
    guessCountUser = 1, guessCountFriend = 1;

    document.getElementById("game-place").innerHTML = `
    <div class="start-type-btn" onclick="play(1, 100, '${playBy}')">Easy [ 1 to 100 ]</div>
    <div class="start-type-btn" onclick="play(1, 500, '${playBy}')">Medium [ 1 to 500 ]</div>
    <div class="start-type-btn" onclick="play(-500, 500,'${playBy}')">Hard [-500 to 500 ]</div>
    
    `;
}


var randomNum = 0, guessCount = 1;
const play = (min, max, playBy) => {
    minValue = min;
    maxValue = max;

    
    guessCountUser = 1, guessCountFriend = 1;

    randomNum =  Math.floor(Math.random() * (max - min + 1)) + min;

    if(playBy == 'single'){
        document.getElementById("game-place").innerHTML = `
            

        <input type="number" name="" id="single-player">

        <div id="control-btns">
            <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="guessVerify('single', ${min}, ${max})">Guess</button>
        </div>

    <div class="status-div" id="status-div"> Start Guessing</div>

    <table> 
        <tr>
            <td class="greater-than-head">Greater Than</td>
            <td class="less-than-head">Less Than</td>
        </tr>
        <tr>
            <td><hr style="border:1px solid #33c0da8a;"></td>
            <td><hr style="border:1px solid #33c0da8a;"></td>
        </tr>
        <tr>
            <td class="great-num" id="great-num1">-</td>
            <td class="less-num" id="less-num1">-</td>
        </tr>
        <tr>
            <td class="great-num" id="great-num2">-</td>
            <td class="less-num" id="less-num2">-</td>
        </tr>
        <tr>
            <td class="great-num" id="great-num3">-</td>
            <td class="less-num" id="less-num3">-</td>
        </tr>
        <tr>
            <td class="great-num" id="great-num4">-</td>
            <td class="less-num" id="less-num4">-</td>
        </tr>
        <tr>
            <td class="great-num" id="great-num5">-</td>
            <td class="less-num" id="less-num5">-</td>
        </tr>
    </table>
    `;
    }

    else if(playBy == 'computer'){
        document.getElementById("game-place").innerHTML = `
        <input type="number" name="" id="single-player">
        <div id="control-btns">
        <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="guessVerify('computer', ${min}, ${max})">Guess</button>
        </div>

        <div class="status-div" id="status-div"> Start Guessing</div>

        <table> 
          
            <tr>
                <td class="greater-than-head">Computer


                    <table id="inner-greater-table">
                        <tr>
                            <td class="great-num" id="great-com-num">Greater</td>
                            <td class="less-num" id="less-com-num">Less</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-com-num1">-</td>
                            <td class="less-num" id="less-com-num1">-</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-com-num2">-</td>
                            <td class="less-num" id="less-com-num2">-</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-com-num3">-</td>
                            <td class="less-num" id="less-com-num3">-</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-com-num4">-</td>
                            <td class="less-num" id="less-com-num4">-</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-com-num5">-</td>
                            <td class="less-num" id="less-com-num5">-</td>
                        </tr>
                    </table>
                </td>
                <td class="less-than-head">You

                    <table id="inner-lesser-table">
                        <tr>
                            <td class="great-num" id="great-user-num">Greater</td>
                            <td class="less-num" id="less-user-num">Less</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-user-num1">-</td>
                            <td class="less-num" id="less-user-num1">-</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-user-num2">-</td>
                            <td class="less-num" id="less-user-num2">-</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-user-num3">-</td>
                            <td class="less-num" id="less-user-num3">-</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-user-num4">-</td>
                            <td class="less-num" id="less-user-num4">-</td>
                        </tr>
                        <tr>
                            <td class="great-num" id="great-user-num5">-</td>
                            <td class="less-num" id="less-user-num5">-</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        
        `;
    }
    else if(playBy == 'friend'){
        
        document.getElementById("game-place").innerHTML = `
    <div class="fri-play-div">
        <input type="number" name="friend" class="fri-num-input-fri-time" id="friend-num-input-fri-time" disabled>
        <input type="number" name="User" class="fri-num-input-fri-time" id="user-num-input-fri-time">
    </div>
    
    <div id="control-btns">
        <button class="fri-guess-btn-fri-play"  id="fri-guess-btn-fri-play" onclick="guessVerifyFriend('friend', ${min}, ${max})" disabled>Guess</button>
        <button class="user-guess-btn-fri-play" id="user-guess-btn-fri-play" onclick="guessVerifyFriend('user', ${min}, ${max})">Guess</button>
    </div>
        
    <div class="status-div" id="status-div"> Start Guessing</div>

    <table id="user-table-side"> 
  
        <tr>
            <td class="greater-than-head">Friend


                <table id="inner-greater-table">
                    <tr>
                        <td class="great-num" id="great-fri-num">Greater</td>
                        <td class="less-num" id="less-fri-num">Less</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-fri-num1">-</td>
                        <td class="less-num" id="less-fri-num1">-</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-fri-num2">-</td>
                        <td class="less-num" id="less-fri-num2">-</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-fri-num3">-</td>
                        <td class="less-num" id="less-fri-num3">-</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-fri-num4">-</td>
                        <td class="less-num" id="less-fri-num4">-</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-fri-num5">-</td>
                        <td class="less-num" id="less-fri-num5">-</td>
                    </tr>
                </table>
            </td>
            <td class="less-than-head">You

                <table id="inner-lesser-table">
                    <tr>
                        <td class="great-num" id="great-user-num">Greater</td>
                        <td class="less-num" id="less-user-num">Less</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-user-num1">-</td>
                        <td class="less-num" id="less-user-num1">-</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-user-num2">-</td>
                        <td class="less-num" id="less-user-num2">-</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-user-num3">-</td>
                        <td class="less-num" id="less-user-num3">-</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-user-num4">-</td>
                        <td class="less-num" id="less-user-num4">-</td>
                    </tr>
                    <tr>
                        <td class="great-num" id="great-user-num5">-</td>
                        <td class="less-num" id="less-user-num5">-</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
        
        `;
    }


}

var userGuessNum = 0, computerGuess = 0, friendGuess=0;
var grtTabInd = 1, lessTabInd = 1, haveWon = false, haveLost = false;
var grtTabInd_com = 1, lessTabInd_com = 1;
var level_btn;
var minValue=0, maxValue=0;
const guessVerify = (playBy, min, max) => {

    if(playBy == 'single'){
        console.log("Prime1");
        userGuessNum =  parseInt(document.getElementById("single-player").value);
        document.getElementById("single-player").value = "";
            if(haveWon || haveLost){
                play(min, max, playBy);
                haveWon = false, haveLost = false;
                guessCount = 1, grtTabInd = 1, lessTabInd = 1;
        }


        else if(!Number.isNaN(userGuessNum) && !haveWon){
            console.log("Prime2");
            if(guessCount <= 5){
                if(userGuessNum > max || userGuessNum < min) {
                    document.getElementById("status-div").innerText = `Out of Range!`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                }
                else if(userGuessNum < randomNum){
                    document.getElementById(`great-num${grtTabInd}`).innerText = userGuessNum;
                    document.getElementById("status-div").innerText = `Number is Greater than ${userGuessNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    grtTabInd++;
                } else if(userGuessNum > randomNum){
                    document.getElementById(`less-num${lessTabInd}`).innerText = userGuessNum;
                    document.getElementById("status-div").innerText = `Number is Less than ${userGuessNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    lessTabInd++;
                } 
                else {
                    document.getElementById("status-div").innerText = `You Won!`;
                    document.getElementById("status-div").style.backgroundColor = "#67e61e";
                    document.getElementById("single-player").disabled = true;
                    document.getElementById("control-btns").innerHTML =`
                    <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                    <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="guessVerify('single', ${min}, ${max})">Restart</button>
                    <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick="playGame('single')">Level</button>
                    `;
                    haveWon = true;
                }

                if(guessCount == 5 && userGuessNum != randomNum){
                    document.getElementById("status-div").innerText = `You Lose! Number is ${randomNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    document.getElementById("single-player").disabled = true;
                    document.getElementById("control-btns").innerHTML =`
                    <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                    <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="guessVerify('single', ${min}, ${max})">Restart</button>
                    <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick="playGame('single')">Level</button>
                    `;
                    haveLost = true;
                }
            }
            else{
                document.getElementById("status-div").innerText = `Max Limit Reached!`;
                document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
            }
            guessCount+=1;
        } else {
            document.getElementById("status-div").innerText = `Please Guess a number!`;
            document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
        }

    } 
    // Computer is guessing...

    else if(playBy == 'computer'){
        userGuessNum =  parseInt(document.getElementById("single-player").value);
        document.getElementById("single-player").value = "";
    
        computerGuess = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        if(haveWon || haveLost){
                play(min, max, playBy);
                haveWon = false, haveLost = false;
                guessCount = 1, grtTabInd = 1, lessTabInd = 1;
                grtTabInd_com = 1, lessTabInd_com = 1;
        }

        

        else if(!Number.isNaN(userGuessNum) && !haveWon){
            if(guessCount <= 5){
                if(userGuessNum > max || userGuessNum < min) {
                    document.getElementById("status-div").innerText = `Out of Range!`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                }
                else if(userGuessNum < randomNum){
                    document.getElementById(`great-user-num${grtTabInd}`).innerText = userGuessNum;
                    document.getElementById("status-div").innerText = `Number is Greater than ${userGuessNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    grtTabInd++;
                } else if(userGuessNum > randomNum){
                    document.getElementById(`less-user-num${lessTabInd}`).innerText = userGuessNum;
                    document.getElementById("status-div").innerText = `Number is Less than ${userGuessNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    lessTabInd++;
                } 
                else {
                    document.getElementById("status-div").innerText = `You Won!`;
                    document.getElementById("status-div").style.backgroundColor = "#67e61e";
                    document.getElementById("single-player").disabled = true;
                    document.getElementById("control-btns").innerHTML =`
                    <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                    <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="guessVerify('computer', ${min}, ${max})">Restart</button>
                    <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick="playGame('computer')">Level</button>
                    `;
                    haveWon = true;
                }

                // Computer choices...
                if(!haveWon){
                    
                    if(computerGuess > max || computerGuess < min) {
                        document.getElementById("status-div").innerText = `Out of Range!`;
                        document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    }
                    else if(computerGuess < randomNum){
                        minValue = computerGuess;
                        document.getElementById(`great-com-num${grtTabInd_com}`).innerText = computerGuess;
                        document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                        grtTabInd_com++;
                    } else if(computerGuess > randomNum){
                        maxValue = computerGuess;
                        document.getElementById(`less-com-num${lessTabInd_com}`).innerText = computerGuess;
                        document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                        lessTabInd_com++;
                    }
                    else {
                        document.getElementById("status-div").innerText = `Computer Won!`;
                        document.getElementById("status-div").style.backgroundColor = "#67e61e";
                        document.getElementById("single-player").disabled = true;
                        document.getElementById("control-btns").innerHTML =`
                        <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                        <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="guessVerify('computer', ${min}, ${max})">Restart</button>
                        <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick="playGame('computer')">Level</button>
                        `;
                        haveWon = true;
                    }
                }
               
                if(guessCount == 5 && userGuessNum != randomNum){
                    document.getElementById("status-div").innerText = `Draw! Number is ${randomNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    document.getElementById("single-player").disabled = true;
                    document.getElementById("control-btns").innerHTML =`
                    <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                    <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="guessVerify('computer', ${min}, ${max})">Restart</button>
                    <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick ="playGame('computer')">Level</button>
                    `;
                    haveLost = true;
                }
            }
            else{
                document.getElementById("status-div").innerText = `Max Limit Reached!`;
                document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
            }
            guessCount+=1;
        }else {
            document.getElementById("status-div").innerText = `Please Guess a number!`;
            document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
        }

    }
    
}


var guessCountUser = 1 ,guessCountFriend = 1;
const guessVerifyFriend = (playBy, min, max) => {

        if(playBy == 'friend'){
            friendGuess =  parseInt(document.getElementById("friend-num-input-fri-time").value);
            document.getElementById("friend-num-input-fri-time").value = "";

            if(haveWon || haveLost){
                play(min, max, playBy);
                haveWon = false, haveLost = false;
                grtTabInd = 1, lessTabInd = 1;
                guessCountUser = 1, guessCountFriend = 1;
                grtTabInd_com = 1, lessTabInd_com = 1;
        }


        // friend choices...
        if(!Number.isNaN(userGuessNum) && !haveWon && !Number.isNaN(friendGuess)){

            document.getElementById("friend-num-input-fri-time").disabled = true;
            document.getElementById("fri-guess-btn-fri-play").disabled = true;  
            document.getElementById("user-num-input-fri-time").disabled = false;
            document.getElementById("user-guess-btn-fri-play").disabled = false;

            if(guessCountFriend <= 5){
                if(friendGuess > max || friendGuess < min) {
                    document.getElementById("status-div").innerText = `Out of Range!`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                }
                else if(friendGuess < randomNum){
                    minValue = friendGuess;
                    document.getElementById(`great-fri-num${grtTabInd_com}`).innerText = friendGuess;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    grtTabInd_com++;
                } else if(friendGuess > randomNum){
                    maxValue = friendGuess;
                    document.getElementById(`less-fri-num${lessTabInd_com}`).innerText = friendGuess;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    lessTabInd_com++;
                }
                else {
                    document.getElementById("status-div").innerText = `Friend Won!`;
                    document.getElementById("status-div").style.backgroundColor = "#67e61e";
                    document.getElementById("fri-guess-btn-fri-play").disabled = true;  
                    document.getElementById("user-guess-btn-fri-play").disabled = true;
                    document.getElementById("control-btns").innerHTML =`
                    <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                    <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="play( ${min}, ${max}, 'friend')">Restart</button>
                    <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick="playGame('friend')">Level</button>
                    `;
                    haveWon = true;
                }
                if(guessCountFriend == 5 && userGuessNum != randomNum){
                    document.getElementById("status-div").innerText = `Draw! Number is ${randomNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    document.getElementById("fri-guess-btn-fri-play").disabled = true;  
                    document.getElementById("user-guess-btn-fri-play").disabled = true;
                    document.getElementById("control-btns").innerHTML =`
                    <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                    <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="play(${min}, ${max}, 'friend')">Restart</button>
                    <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick ="playGame('friend')">Level</button>
                    `;
                    haveLost = true;
                    }
            }
            else{
                document.getElementById("status-div").innerText = `Max Limit Reached!`;
                document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
            }
            guessCountFriend++;
        }
        else {
                document.getElementById("status-div").innerText = `Please Guess a number!`;
                document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
            }
        }










        //user-------------------
        else {
            userGuessNum =  parseInt(document.getElementById("user-num-input-fri-time").value);
            document.getElementById("user-num-input-fri-time").value = "";


            if(haveWon || haveLost){
                play(min, max, playBy);
                haveWon = false, haveLost = false;
                grtTabInd = 1, lessTabInd = 1;
                guessCountUser = 1, guessCountFriend = 1;
                grtTabInd_com = 1, lessTabInd_com = 1;
            }
             
         if(!Number.isNaN(userGuessNum) && !haveWon && !Number.isNaN(friendGuess)){

            document.getElementById("friend-num-input-fri-time").disabled = false;
            document.getElementById("fri-guess-btn-fri-play").disabled = false;
            document.getElementById("user-num-input-fri-time").disabled = true;
            document.getElementById("user-guess-btn-fri-play").disabled = true;

            if(guessCountUser <= 5){
                if(userGuessNum > max || userGuessNum < min) {
                    document.getElementById("status-div").innerText = `Out of Range!`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                }
                else if(userGuessNum < randomNum){
                    document.getElementById(`great-user-num${grtTabInd}`).innerText = userGuessNum;
                    document.getElementById("status-div").innerText = `Number is Greater than ${userGuessNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    grtTabInd++;
                } else if(userGuessNum > randomNum){
                    document.getElementById(`less-user-num${lessTabInd}`).innerText = userGuessNum;
                    document.getElementById("status-div").innerText = `Number is Less than ${userGuessNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    lessTabInd++;
                } 
                else {
                    document.getElementById("status-div").innerText = `You Won!`;
                    document.getElementById("status-div").style.backgroundColor = "#67e61e";
                    document.getElementById("fri-guess-btn-fri-play").disabled = true;  
                    document.getElementById("user-guess-btn-fri-play").disabled = true;
                    document.getElementById("control-btns").innerHTML =`
                    <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                    <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="play(${min}, ${max}, 'friend')">Restart</button>
                    <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick="playGame('friend')">Level</button>
                    `;
                    haveWon = true;
                }
               
                if(guessCountUser == 5 && userGuessNum != randomNum && guessCountFriend != 5){
                    document.getElementById("status-div").innerText = `Draw! Number is ${randomNum}`;
                    document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
                    document.getElementById("fri-guess-btn-fri-play").disabled = true;  
                    document.getElementById("user-guess-btn-fri-play").disabled = true;
                    document.getElementById("control-btns").innerHTML =`
                    <button class="guess-btn-com-play"  id = "home-btn-com-play" onclick="home()">Home</button>
                    <button class="guess-btn-com-play"  id = "guess-btn-com-play" onclick="play(${min}, ${max}, 'friend')">Restart</button>
                    <button class="guess-btn-com-play"  id = "level-btn-com-play" onclick ="playGame('friend')">Level</button>
                    `;
                    haveLost = true;
                }
            }
            else{
                document.getElementById("status-div").innerText = `Max Limit Reached!`;
                document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
            }
            guessCountUser +=1;
        }
            else {
                document.getElementById("status-div").innerText = `Please Guess a number!`;
                document.getElementById("status-div").style.backgroundColor = "#87ceeb8a";
            }
        }


}

// <div class="start-type-btn setter-btn" >From <input type="number" class="setter setter-from" value="1" onclick="this.select()"> to <input type="number" class="setter setter-to" value="100" onclick="this.select()"> <button class="setter-ok-btn" onclick="play()">OK</button></div>






