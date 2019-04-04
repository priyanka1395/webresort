import React, { Component } from 'react'

export default class Playground extends Component {
    render() {
        let tempComp = '<div id="meta"><label for="title" title="Title appears in the browser title bar">Title of the web page:</label>            <input class="lg" name="title" type="text" maxlength="100" placeholder="Title appears in the browser\'s title bar, search results, etc">        <label for="metaDescription" title="Description can appear in search engines\' search results pages">Description of page content:</label>            <textarea name="metaDescription" id="metaDescription" placeholder="Make it nice and short, but descriptive. The description may appear in search engines\' search results pages..."></textarea>        <label for="metaKeywords" title="Keywords may assist in search results">Keywords related to page content:</label>        <textarea name="metaKeywords" id="metaKeywords" placeholder="Separate keywords or phrases with a comma (example: html code generator, generate html, ...)"></textarea></div>'
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
            //nesting one component inside another
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