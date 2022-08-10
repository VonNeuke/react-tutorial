import React,{ Component } from "react";

class App extends Component{
    state={
        data:[]
    }

    // 当组件被mount/insert到DOM时会调用
    componentDidMount(){
        const url = 'http://127.0.0.1:8888/'
        fetch(url)
            .then((result)=>result.json())
            .then((result)=>{
                this.setState({
                    data:result,
                })
        })
    }

    render(){
        const { data } = this.state;
        const result = data.map((entry,index)=>{
            return <li key={index}>{entry}</li>
        })
        return <ul>{result}</ul>
    }
}

export default App

