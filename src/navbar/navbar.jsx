import React from "react";

export default class Navbar extends React.Component {
    constructor() {
        super()

        console.log('Navbar constructor');
        this.state = {
            name: 'Navbar'
        }
    }

    render() {
        console.log('render');
        return <>
         <h1>this is from navbar  is {this.state.name}</h1>
         <button onClick={()=>{this.setState({name:"ddddd"})}} >change name</button>
        </>
    }

    componentDidMount() { console.log('componentDidMount '); 
        this.setState({name:"ggggggg"});
     }
    componentDidUpdate() {
        console.log('componentDidUpdate ');

    }

    //clean up destory

    componentWillUnmount() { console.log('componentWillUnmount '); }

}