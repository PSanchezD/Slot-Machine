import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'




function Main(){

    const [data,setData]=useState("")
    let [total,setTotal]=useState(0)

    function handleSpin(){
        const random = Math.floor(Math.random()* 100)
        let result = "";
        if(random === 1){
            result += "JACKPOT!! YOU WON $250,000"
           setTotal(total + 250000)
        }
        else if (random === 93){
            result +="BIG WIN $100"
            setTotal(total + 100)
        }
        else if (random < 50){
            result += "NO WIN -$70"
             setTotal(total - 70)
        }
        else if (random > 50){
            result += "NICE! $5"
             setTotal(total + 5)
        }
        else {
            result +=" You Won $10!"
            setTotal(total + 10)
        }
        setData(result);
        console.log(random)

    }

    const props = useSpring({from:{ opacity:0}, to:{opacity: 1}, delay:1000})
    const props1 = useSpring({from:{ opacity:0}, to:{opacity: 1}, delay:2000})
    const props2 = useSpring({from:{ opacity:0}, to:{opacity: 1}, delay:3000})
    const props3 = useSpring({from:{opacity:0},to:{opacity:1},delay:4000})


   return(
    <>
        <div className='jumbo'>
            <h1 className='jumboh1'>Spin to win a quarter of a million Dollars!</h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col intro'>
                    <animated.h1 style={props}>Welcome Player</animated.h1>
                    <animated.p style={props1}>Click the button for a chance to win!</animated.p>
                </div>
                <div className='btn-c'>
                    <animated.button style={props2} className='btn' onClick={handleSpin}>SPIN</animated.button>
                </div>
            </div>
        </div>
        <div className='result-c'>
            <animated.p style={props3} className='money'>You Current have is : ${total}</animated.p>
            <p className='result'>{data}</p>
        </div>
    </>
   )
}
export default Main;