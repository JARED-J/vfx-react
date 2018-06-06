import React, { Component } from 'react';

export default class Canvas extends Component {
    
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.image;

        canvas.onload = () => {
            ctx.drawImage(img, 0, 0);
            ctx.font = "40px Courier"
            ctx.fillText(this.props.text, 210, 75);
        }
    }

    render() {
        return(
            <div>
                <canvas ref="canvas" width={640} height={425} />
                <img ref="image"  className="hidden" />
            </div>
        )
    }
}