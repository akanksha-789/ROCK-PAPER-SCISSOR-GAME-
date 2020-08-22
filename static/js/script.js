

// challenge-3 : rock paper scissors game
function rpsGame(YourChoice) {
    console.log(YourChoice);
    var humanChoice, botChoice;
    humanChoice = YourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice: ', botChoice);

    results = decideWinner(humanChoice, botChoice); //(0,1) human lost ! bot won
    console.log(results);

    message = finalMessage(results);//{'message':'You Won!','color':'green'}
    console.log(message);
    rpsFrontEnd(YourChoice.id, botChoice, message);

}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}
function decideWinner(YourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'rock': 0, 'scissors': 0.5 }

    }
    var yourScore = rpsDatabase[YourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][YourChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {

    if (yourScore == 0) {
        return { 'message': 'You Lost!', 'color': 'red' };
    } else if (yourScore == 0.5) {
        return { 'message': 'You Tied!', 'color': 'yellow' };
    } else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // create element to find the front end soltuion of the game 
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height:150 width:150 style='box-shadow : 0px 10px 50px rgba(25, 28, 247, 0.5);'>";
    messageDiv.innerHTML = "<h1 style ='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height:150 width:150 style='box-shadow : 0px 10px 50px rgba(255, 0, 0, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}