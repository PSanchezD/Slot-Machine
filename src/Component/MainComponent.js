import React from 'react'
import { useSpring, animated } from 'react-spring'




function Main(){



    function handleSpin(){
        const random = Math.floor(Math.random()* 16)
        if(random === 7){
            alert("JACKPOT!! YOU WON")
        }
        else if (random === 9){
            alert("BIG WIN")
        }
        else if (random < 9){
            alert("NO WIN")
        }
        else {
            alert(" YOU WIN!")
        }
        console.log(random)

    }

    const props = useSpring({from:{ opacity:0}, to:{opacity: 1}, delay:1000})
    const props1 = useSpring({from:{ opacity:0}, to:{opacity: 1}, delay:2000})
    const props2 = useSpring({from:{ opacity:0}, to:{opacity: 1}, delay:3000})



   return(
    <>
        <div className='jumbo'>
            <h1 className='jumboh1'>Spin to win a quarter of a million Dollars!</h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <animated.h1 style={props}>Welcome Player</animated.h1>
                    <animated.p style={props1}>click the button for a chance to win!</animated.p>
                    <animated.button style={props2} className='btn' onClick={handleSpin}>SPIN</animated.button>
                </div>
            </div>
        </div>
    </>
   )
}
export default Main;