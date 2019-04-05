import React, { Component } from 'react'
import Timer from './Timer'
import Card from './Card'

export default class Playground extends Component {
    render() {
        let tempComp = '<p>This is a component declared as variable</p>'
        let tempStyle = {
            backgroundColor: 'green',
            padding: '20px',
            color: 'white'
        }
        let markup = {
            __html: tempComp
        }
        return ([
            //using plain html tags in component and using class Name
            <h1 key='h1' className="heading">Hello World!</h1>,
            //statefull component
            <Timer key='sc' color="orange"/>,
            <Timer key='sc1' color="green"/>,
            <Timer key='sc2' color="blue"/>,
            //nesting one component inside another
            <Card key='card1'/>,
            <Sample key='h2' />,
            //inline style along with variable component evaluation
            <div key="div1" style={tempStyle} dangerouslySetInnerHTML={markup}></div>,
            <FunctionalComp key="func1" no={1} flag="true" />, //this is same as FunctionalComp()
            //using a iterator "map"
            [1, 2, 3, 4].map(function (item, index) {
                return <FunctionalComp key={'item' + index} no={item} name="sabareesh" />
            })
        ])
    }
}

class Sample extends Component {
    render() {
        return <h2>Sample Component</h2>
    }
}

function FunctionalComp(props) {
    let text = 'This is a string concat'
    //let fullText = text+' '+ props.no
    let fullText = `${text} ${props.no}`
    return (
        <div>
            <h3>This is a Functional Component {props.no}</h3>
            <h4>{fullText}</h4>
        </div>
    )
}