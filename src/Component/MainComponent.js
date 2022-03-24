import React from 'react'



function Main(){


    function handleSpin(){
        const random = Math.floor(Math.random()* 16)
        if(random === 7){
            alert("Jackpot!! you won")
        }
        else if (random === 9){
            alert("u rock ")
        }
        else if (random < 9){
            alert("you loss money")
        }
        else {
            alert(" YOU WIN!")
        }
        console.log(random)

    }



   return(
    <>
        <div className='jumbo'>
            <h1 className='jumboh1'>Spin to win a quarter of a million Dollars!</h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Welcome Player</h1>
                    <p>click the button for a chance to win!</p>
                    <p>this</p>
                    <button className='btn' onClick={handleSpin}>SPIN</button>
                    <button className='btn1'>LUCKY</button>
                </div>
            </div>
        </div>
    </>
   )
}
export default Main;