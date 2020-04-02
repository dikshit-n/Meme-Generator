import React from 'react'
import {Body,Color} from "./memecomponents"

class State extends React.Component{

    constructor(){
        super()
        this.state={
            head:"",
            foot:"",
            randimage:"https://i.imgflip.com/265j.jpg",
            meme:[],
            Loading:false,
            color:"black"
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(event){
            this.setState({Loading:true})
            fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response =>{
                    const {memes}=response.data
                    this.setState({meme:memes})
                    const randnum= Math.floor( Math.random() * this.state.meme.length)
                    const ri=this.state.meme[randnum].url
                    this.setState({randimage:ri})
                    this.setState({Loading:false})
            })
   }

    handleChange(event){
        const {name,value} = event.target
        this.setState({[name]:value})
    }
    render(){
        return(
                <main>
                <div className="textbox">
                        
                        <input  
                                type="textbox"
                                name="head"
                                value={this.state.head}
                                placeholder="Top Sentence"
                                onChange={this.handleChange}
                        />&emsp;
                        <input  
                                type="textbox"
                                name="foot"
                                value={this.state.foot}
                                placeholder="Bottom Sentence"
                                onChange={this.handleChange}
                        />
               </div><br />
                <div>
                        <div className="button">
                        <button onClick={this.handleClick} name="Loading" className="ni">{this.state.Loading ? "Loading" : "New Image" }</button>
                        &emsp;<Color color={this.state.color} onChange={this.handleChange} />
                        </div><br />
                        
                        <Body Color={this.state.color} Bg_image={this.state.randimage} Head_text={this.state.head} Foot_text={this.state.foot} />
                </div>
                </main>
        )
}
}

export default State