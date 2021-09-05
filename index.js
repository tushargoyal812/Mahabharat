var readlineSync=require('readline-sync')
const chalk=require('chalk')
var score=0;
var userName=readlineSync.question("May i have your name please: ")
console.log("NAMASTE! "+userName+" Welcome to the great mahabharat quiz,Lets see your knowledge about mahabharata")
console.log("*******************************************************")
function mahabharat(question,answer)
{

  var userAnswer=readlineSync.question(question)
  if(userAnswer===answer)
  {
    console.log(chalk.green("WOW you are right"))
    score++;
  }
  else
  {
    console.log(chalk.red("SORRY you are wrong"))
    console.log(chalk.blue("Right answer is "+answer))
  }
}

var questionList=
[
  {
    question: "Q.What famous text does Krishna dictate to Arjuna?\na) Vedas\nb) The Mahabharata\nc) Bhagvat Gita\nd) Upanishadas\ntype your answer: ",
    answer: "c"
  },
  {
   
    question: "Q.The great war of mahabharat lasted for ______ days:\na) 16\nb) 18\nc) 20\nd) 17\ntype your answer: ",
    answer: "b"
  },
  {
   
    question: "Q.Who give his thumb to guru dhronacharya:\na) Eklavya\nb) Arjun\nc) Bhim\nd) Abhimanyu\ntype your answer: ",
    answer: "a"
  },
  {
   
    question: "Q.What was the name of Arjun's grand son:\na) Shikhandi\nb) Drupad\nc) Parikshit\nd) Eklavya\ntype your answer: ",
    answer: "c"
  },
  {
    
    question: "Q.What was the name of guru dhronacharya's son:\na) karna\nb) Bhim\nc) Shikhandi\nd) Ashwatthama\ntype your answer: ",
    answer: "d"
  }
]

for(i=0;i<questionList.length;i++)
{
  mahabharat(questionList[i].question,questionList[i].answer)
  console.log("**********************************************************************")
}



console.log("your total score is "+score+" out of 5")
