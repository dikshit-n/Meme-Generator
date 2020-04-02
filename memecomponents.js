import React from "react"

function Header(props){
    return(
        <div  className="header">
            <header>{props.Header_text}</header>
        </div>
    );
}
function Foot(props){
    return(
        <div className="memefooter" style={{color:props.Color}} >{props.Foot_text}</div>
    )
}
function Head(props){
    return(
        <div className="memeheader" style={{color:props.Color}} >{props.Head_text}</div>
    )
}
function Color(props){
    return(
        <select className="size" name="color" onChange={props.onChange} value={props.color}  >
                <option >Color</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Orange">Orange</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Violet">Violet</option>
                <option value="Grey">Grey</option>
                <option value="LightBlue">LightBlue</option>
                <option value="Lightgreen">Lightgreen</option>
                <option value="Whitesmoke">Whitesmoke</option>
                <option value="Pink">Pink</option>
                <option value="Blueviolet">Blueviolet</option>
                <option value="Gold">Gold</option>
                <option value="Darkblue">Darkblue</option>
                <option value="Lawngreen">Lawngreen</option>
                <option value="Lime">Lime</option>
                <option value="Royalblue">Royalblue</option>
                <option value="Yellowgreen">Yellowgreen</option>
                <option value="Dodgerblue"> Dodgerblue</option>
        </select>
       
    )
}
function Body(props){
    var back= props.Bg_image
    return(
        <div className="memebody">
            <div className="memearea" style={{backgroundImage:"url("+back+")"}}>
                <Head Head_text={props.Head_text} Color={props.Color} />
                <Foot Foot_text={props.Foot_text} Color={props.Color} />
            </div>
             
        </div>
    )
}

export default Header
export {Body,Color}