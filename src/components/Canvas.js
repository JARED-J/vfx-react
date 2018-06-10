import React, { Component } from 'react';
import { 
    randomIntBetween,
    randomColor,
    distance
} from './utility';

export default class Canvas extends Component {
    
    constructor(props){
        super(props)
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.image;
    }

    handleMouseMove(evt) {
        const canvas = this.refs.canvas;
        const mouse = {
            x: evt.clientX,
            y: evt.clientY
        }
        // console.log("Mouse X", mouse.x, "Mouse.Y", mouse.y) 
    }

    render() {
        return(
            <div>
                <canvas ref="canvas" className="border-3px" width={640} height={425} onMouseMove={this.handleMouseMove}/>
            </div>
        )
    }
}