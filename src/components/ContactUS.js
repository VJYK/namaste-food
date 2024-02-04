import { Component } from "react";

class ContactUs extends Component{

    constructor(){
        super()
        this.state={
            userInfo:{}
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/VJYK");
        const json = await data.json();
        this.setState({
            userInfo:json
        })
        console.log(json)
    }    
    render(){
        const {name,location,avatar_url} = this.state.userInfo;

        return <>
                <img src={avatar_url} height={200} width={200}/>
                <h3>User : {name}</h3>
                <p>Location : {location}</p>
        </>
    }
}

export default ContactUs;