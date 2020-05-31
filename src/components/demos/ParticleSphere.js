import React, { Component } from "react";
import * as THREE from "three";
import "./graphics.css";

class GreenCube extends Component {
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            80,
            window.innerWidth / window.innerHeight,
            0.1,
            5000
        );
        camera.position.z = 1500;
        camera.lookAt(0, 0, 0);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(renderer.domElement);
        var geometry = new THREE.IcosahedronGeometry(800, 4).vertices;
        var material = new THREE.PointsMaterial({
            color: "#f2ae0a",
            size: 5,
            opacity: 0.7,
        });
        var points = new THREE.BufferGeometry().setFromPoints(geometry);
        var sphere = new THREE.Points(points, material);
        scene.add(sphere);
        var animate = function () {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        return (
            <div>
                <div className="graphicsTitle">Particle Sphere</div>
                <div ref={(ref) => (this.mount = ref)} />
            </div>
        );
    }
}

export default GreenCube;
