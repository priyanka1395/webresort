import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        let me = this
        setInterval(function () {
            me.setState({
                date: new Date()
            })
        }, 1000)
    }

    render() {
        let date = this.state.date
        let color = this.props.color
        return (
            <h1 style={{ color: color }}>{date.toString()}</h1>
        )
    }
}