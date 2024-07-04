import React, { useState } from "react";
import { Link } from "react-router-dom";
const Gamezone = () => {
  const diceImages = [
    "src/pic/one.png", // Update with actual path to dice image 1
    "src/pic/2.png", // Update with actual path to dice image 2
    "src/pic/3.png", // Update with actual path to dice image 3
    "src/pic/4.png", // Update with actual path to dice image 4
    "src/pic/5.png", // Update with actual path to dice image 5
    "src/pic/6.png", // Update with actual path to dice image 6
  ];

  const addval = (val) => {
    setguess(val);
    setselect(true);
    setwarning(false);
    setresult(false); // Reset result when a number is selected
  };

  const resetscore = () => {
    setscore(0);
    setwarning(false);
    setresult(false); // Reset result when the score is reset
  };

  const rolldice = () => {
    if (select === true) {
      let roll = Math.floor(Math.random() * 6) + 1;
      setdiceroll(roll);
      console.log("Roll:", roll);
      console.log("Guess:", guess);
      if (roll === guess) {
        setscore((prevScore) => prevScore + roll);
        setmessage(`Yeah.. You won you achieved ${roll} points`);
      } else {
        setscore((prevScore) => prevScore - 2);
        setmessage(`Lose: You lost, your points have been deducted by -2`);
      }
      setguess(null); // Reset guess to null after rolling the dice
      setselect(false);
      setresult(true); // Set result to true after rolling the dice
    } else {
      setwarning(true);
      setresult(false);
    }
  };

  const showrul =()=>{
    setshowrule(true)
  }

  const ok =()=>{
    setshowrule(false)
  }
  const [score, setscore] = useState(0);
  const [guess, setguess] = useState(null);
  const [diceroll, setdiceroll] = useState(null);
  const [select, setselect] = useState(false);
  const [warning, setwarning] = useState(false);
  const [result, setresult] = useState(false);
  const [message, setmessage] = useState("");
  const [showrule, setshowrule] = useState(false)

  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between px-32">
          <div>
            <div className="text-8xl">{score}</div>
            <p className="text-2xl">Total Score</p>
          </div>
          <div className="flex flex-col items-end">
            {warning && (
              <div className="text-red-600 text-2xl mb-2">
                You have not selected the Number Yet
              </div>
            )}
            <div className="flex gap-10">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div 
                  className={`h-16 hover:cursor-pointer hover:bg-slate-900 hover:text-white w-16 border-solid border-black border-[2px] flex justify-center items-center ${
                    guess === item ? "bg-black text-white" : ""
                  }`}
                  onClick={() => addval(item)}
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 text-2xl">Select Number</div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center ">
        <div className=" flex gap-7 mt-20 flex-col items-center  h-[700px]   ">
          <div className="flex gap-7 mt-10 flex-col items-center ml-[500px] h-[700px] w-[700px]  ">
            {diceroll !== null ? (
            <img onClick={rolldice}
              src={diceImages[diceroll - 1]}
              alt={`Dice ${diceroll}`}
              className="mb-4"
            />
          ) : (
            <img onClick={rolldice} src="src/pic/one.png" alt="" />
          )}
          <span className="text-xl"> Click Dice or Roll Button to roll Dice</span>
          <button
            className="border-solid hover:bg-slate-100 border-black border-[1px] w-[230px] rounded-lg py-2"
            onClick={rolldice}
          >
            Roll
          </button>
          <button
            className="bg-black hover:bg-slate-800 text-white w-[230px] rounded-lg py-2"
            onClick={resetscore}
          >
            Reset Score
          </button>
          {result && (
            <p
              className={` text-2xl  ${
                message.includes("won") ? "text-green-600" : "text-red-600"
              }`}
            >
              {" "}
              {message}
            </p>
          )}
          </div>
          
        </div>

        <div className="mt-20 w-1/3  flex flex-col justify-center items-center ">
         
         <div className="flex flex-col justify-center items-center  mb-10">
           <button className="bg-black  hover:bg-slate-800 text-white w-[230px] rounded-lg py-2" onClick={showrul}>Show Rules</button>
         
         { (showrule === true) && <div className=" mr-10 ml-16 bg-[#FBF1F1] py-2 px-10 mt-10 " >
            <h1 className="text-2xl mt-10 mb-5 font-bold "> How to play dice game</h1>
            
          <li className="text-black font-bold mb-2 ">Select any Number</li> 
          <li className="text-black font-bold  mb-2">Click on dice image or Roll button to roll</li> 
           <li className="text-black font-bold mb-2">After click on dice or roll button </li>  
           <li className="text-black font-bold mb-2"> if rolled dice number is equal to dice number you will get same point as you picked </li> 
           <li className="text-black font-bold mb-2">if you get wrong guess then 2 point will be deducted </li>  
           <li className="text-black font-bold mb-2">Your Score is shown on  top left corner as Total Score </li>  
           <li className="text-black font-bold mb-2"> Message will be shown below the button whether you lose or win points</li>  
            
          
            
            <button onClick={ok} className="mb-2 border-solid border-[1px] border-black bg-black text-white px-5 py-1 mt-4 rounded-md"> OK</button>
          </div>
          
         } 
         </div>
         
      
        <Link to="/"><button className="mr-4 mt-5  flex justify-center items-center gap-3 group absolute bottom-[100px]  right-16 border-solid border-[1px] border-black hover:bg-slate-700 hover:text-white text-black px-5 py-1 rounded-md">
          Go back to Dashboard
          <img  className="group-hover:visible invisible h-5" src="src/pic/arr.svg" alt="" />
          </button>
        
      </Link>
     
       
     
     </div>
      </div>
    </>
  );
};

export default Gamezone;
