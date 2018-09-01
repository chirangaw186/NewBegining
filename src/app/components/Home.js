import React from 'react';

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLink
           
        };

        setTimeout(() => {
            this.setState({
                status:status+1
            });
        }
    
        ,3000);
      
    }

    
    


    onMakeOlder(){
      this.setState({
            age: this.state.age + 3
      });

    

        console.log(this.state.status);
      
    }


    onMyLinkChange(){
        this.props.onLinkChange(this.state.homeLink);
    }

    onValueChange(event){
        this.setState({
            homeLink: event.target.value
        });

    }



    render(){ 
       
      
        return(
           
            <div>
                <p>In home component</p>
                
                <p>user's name is : {this.props.name}</p>
                <p>user's age is : {this.state.age}</p>
                <p>status : {this.state.status}</p>
             
                    <button onClick={() => this.onMakeOlder()} className="btn btn-primary">
                        Make me Older!
                    </button>

                    <hr/>
                    <button className="btn btn-primary" onClick={this.props.greet}>Greet!</button>
                    <hr/>
                    <input type="text" value={this.state.homeLink} onChange={(event) => this.onValueChange(event)}></input>
                    <button className="btn btn-primary" onClick={this.onMyLinkChange.bind(this)}>Change Header Link</button>

            </div>
            
               
            

        );
    }

}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    greet: React.PropTypes.func,
    onChange: React.PropTypes.func,
    initialLink: React.PropTypes.string
};