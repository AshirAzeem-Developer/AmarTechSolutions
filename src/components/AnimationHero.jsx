import React, { useEffect } from "react";
import "../Styles/Animation.css"; // Import your CSS file

const ParticleAnimation = () => {
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    let drawArea = canvas.getContext("2d");
    let particles = [];
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let mouse = {};
    let maxDistance = Math.min(w, h) * 0.4;

    document.body.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function resizeReset() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      maxDistance = Math.min(w, h) * 0.4;
    }

    const opts = {
      particleColor: "rgb(200,200,200)",
      lineColor: "rgba(200,200,200,0.5)",
      particleAmount: 30,
      defaultSpeed: 1,
      variantSpeed: 1,
      defaultRadius: 2,
      variantRadius: 2,
    };

    function checkDistance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function Particle(xPos, yPos) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.color = opts.particleColor;
      this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };
      this.update = function () {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      };
      this.border = function () {
        if (this.x >= w || this.x <= 0) {
          this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
      };
      this.draw = function () {
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
      };
    }

    function linkPoints(point1, hubs) {
      for (let i = 0; i < hubs.length; i++) {
        let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        let opacity = 1 - distance / maxDistance;
        if (opacity > 0) {
          drawArea.lineWidth = 0.5;
          drawArea.strokeStyle = opts.lineColor;
          drawArea.beginPath();
          drawArea.moveTo(point1.x, point1.y);
          drawArea.lineTo(hubs[i].x, hubs[i].y);
          drawArea.closePath();
          drawArea.stroke();
        }
      }
    }

    function setup() {
      particles = [];
      canvas.style.backgroundColor = "rgba(0,0,0,0)"; // Adjust the background color
      resizeReset();
      for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
      }
      window.requestAnimationFrame(loop);
    }

    function loop() {
      window.requestAnimationFrame(loop);
      drawArea.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        linkPoints(particles[i], particles.slice(i));
      }
      if (mouse.x && mouse.y) {
        for (let i = 0; i < particles.length; i++) {
          let distance = checkDistance(
            mouse.x,
            mouse.y,
            particles[i].x,
            particles[i].y
          );
          if (distance <= maxDistance) {
            drawArea.lineWidth = 0.5;
            drawArea.strokeStyle = opts.lineColor;
            drawArea.beginPath();
            drawArea.moveTo(mouse.x, mouse.y);
            drawArea.lineTo(particles[i].x, particles[i].y);
            drawArea.closePath();
            drawArea.stroke();
          }
        }
      }
    }

    setup();

    // Cleanup function (optional)
    return () => {
      // Remove event listeners or perform cleanup actions if needed
    };
  }, []);

  return <canvas id="canvas"></canvas>;
};

export default ParticleAnimation;
