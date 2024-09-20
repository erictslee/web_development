/* 게임 변수 3개 선언 */
let startingPokerChips = 100; // points let players = 3;
let noOfStarterCards = 2;
/* 3개의 플레이어 시작 점수 할당 */
let playerOnePoints = startingPokerChips; 
let playerTwoPoints = startingPokerChips; 
let playerThreePoints = startingPokerChips;
/* 점수 배팅 */ q
playerOnePoints -= 50; playerTwoPoints -= 25; playerThreePoints += 75;

let myString1 = "Hello";
let myString2 = "World";
myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen"

console.log(`Welcome! 챔피언십 타이틀은 ${playerOneName}, ${playerTwoName}, ${playerThreeName} 중 한 명에게 주어집니다. 각 선수는 ${STARTING_POKER_CHIPS} 의 칩을 가지고 시작합니다. 흥미진진한 경기가 될 것입니다. 최고의 선수가 승리하길 바랍니다!`);

let gameHasEnded = false;
gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // 플레이어3 우승 ((playerTwoPoints + playerThreePoints) == 0) || // 플레이어1 우승 ((playerOnePoints + playerThreePoints) == 0); // 플레이어2 우승
console.log("Game has ended: ", gameHasEnded);
