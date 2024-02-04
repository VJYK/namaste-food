import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            count:0,
            count2:2,
            userInfo:null
        }
    }

    render(){

        const {name,location,email} =this.props;
        const {count,count2} = this.state;
        return <>
            <h1>Count{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Count{count2}</button>
            <h2>UserName: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Email: {email}</h3>
        </>
    }
}

export default UserClass;