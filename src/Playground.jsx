import React, {Component} from 'react'

export default class Playground extends Component {
    render(){
        let tempComp = <p>This is a temporary component to showcase variable based component </p>
        let tempStyle = {
            backgroundColor : 'green',
            padding : '20px',
            color : 'white'
        }
        return ([
            //using plain html tags in component and using class Name
            <h1 key='h1' className="heading">Hello World!</h1>,
            //nesting one component inside another
            <Sample key='h2'/>,
            //inline style along with variable component evaluation
            <div key="div1" style={tempStyle}>{tempComp}</div>,
            <FunctionalComp key="func1"/>, //this is same as FunctionalComp()
            //using a iterator "map"
            [1,2,3,4].map(function(item,index){
                return <FunctionalComp key={'item'+index}/>
            })
        ])
    }
}

class Sample extends Component {
    render(){
        return <h2>Sample Component</h2>
    }
}

function FunctionalComp(){
    return <h3>This is a Functional Component</h3>
}