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

        function Object(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        }

        Object.prototype.update = function() {
            this.draw()
        }

        Object.prototype.draw = function() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            ctx.fillStyle = this.color
            ctx.fill()
            ctx.closePath()
        }

        let objects
        function init() {
            objects = []

            for (let i = 0; i < 400; i++) {
                // objects.push();
            }
        }

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            //ctx.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
            // objects.forEach(object => {
            //  object.update();
            // });
        }

        init()
        animate()
    }

    handleMouseMove(evt) {
        const canvas = this.refs.canvas;
        const mouse = {
            x: evt.clientX,
            y: evt.clientY
        }
    }

    render() {
        return(
            <div>
                <canvas ref="canvas" className="border-3px" width={640} height={425} onMouseMove={this.handleMouseMove}/>
            </div>
        )
    }
}