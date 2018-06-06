import React, { Component } from 'react';

export default class WaterDrop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // local state
        }
    }

    componentDidMount() {
        // start logic
    }

    componentDidUnmount() {
        // stop logic cycle
    }

    render() {
        return (
            <div className="vfx-component">
                <p>This is the water drop canvas placeholder</p>
            </div>
        )
    }
}