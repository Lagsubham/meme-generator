import React from "react";
import memedata from "../memedata.js";

export default function Meme(props){

    const [memeImage ,setMemeImage]=React.useState({
         
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes,setAllMemes]=React.useState([])

    function handelChange(event){
        const {name,value}=event.target
        setMemeImage(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))

    }


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    

    function getmemeMesssage(){
        const randomNumber=Math.floor(Math.random()*allMemes.length)
        const url=memeArray[randomNumber].url
        setMemeImage(prevMeme=>({
            
                ...prevMeme,
                randomImage:url
            
        }))
    }
    return(
        <main>
            <div className="form">
            <input type="text" 
            placeholder="shut up" 
            className="form--input"
            name="topText"
            value={memeImage.topText}
            onChange={handelChange}
            />
            <input type="text"
             placeholder="and take my money"
             className="form--input"
             name="bottomText"
             value={memeImage.bottomText}
             onChange={handelChange}
            />
            <br/><button className="form--button" onClick={getmemeMesssage}>get a new meme image</button> 
            </div>  
            <div className="meme">
            <img src={memeImage.randomImage} className="meme--image"/> 
            <h2 className="meme--text top">{memeImage.topText}</h2>
            <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
                 
        </main>
    )
}