import React from 'react';
import { render } from 'react-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component{


    constructor(props){
        super();
        this.state = {
            homeLink:"Home"
        };

    }

    onChangeLink(newLink){
        this.setState({
            homeLink: newLink
        });
    }

    onGreet(){
        alert("Hello!");
    }

    render(){
        var user={
                address: "Galle",
             hobbies : ["sports","cycling","collecting stamps"]  
        }
        return(

            <div className="container">
                <div className="row">
                    <div className="col-s-10 col-xs-offset-1">
                       <Header myLink={this.state.homeLink}/>
                    </div>
                 </div>     
                 <div className="row">
                    <div className="col-s-10 col-xs-offset-1">
                        <Home name={"Chiranga"} initialAge={25} greet={this.onGreet} onLinkChange={this.onChangeLink.bind(this)} initialLink={this.state.homeLink}/>             
                    </div>
                 </div>  
            </div>
        );

    }

}

render(<App/>,window.document.getElementById("app"));

