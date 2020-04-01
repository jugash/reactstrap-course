import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <footer>
                <a href="/schedule-test-flight">Schedule a test flight. No pilot's license required!</a>
            </footer>
        )
    }
}
export default Footer