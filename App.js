import React from 'react'
import Header from "./memecomponents"
import State from "./state"

class App extends React.Component{

        
        render(){
                return(
                        <div>
                                <Header Header_text="MEME GENEARATOR" /><br />
                                <State /><br />
                        </div>
                )
        }
}

export default App