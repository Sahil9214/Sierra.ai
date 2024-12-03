/* eslint-disable prettier/prettier */
"use client";

import React, { useRef, useEffect } from "react";

const CanvasAnimationImages = () => {
    const canvasRef = useRef(null);

    // Define your images
    const images = [
        "/assets/animation/image1.jpg",
        "/assets/animation/image2.jpg",
        "/assets/animation/image3.jpg",
        "/assets/animation/image4.jpg",
        "/assets/animation/image5.jpg",
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;
        let frameCount = 0;
        const framesPerImage = 60; // Change image every second at 60fps

        // Preload images
        const loadedImages = images.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });

        const render = () => {
            // Set canvas size to match client dimensions
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate which image to show
            const currentImageIndex =
                Math.floor(frameCount / framesPerImage) % loadedImages.length;
            const currentImage = loadedImages[currentImageIndex];

            if (currentImage.complete) {
                // Check if image is loaded
                // Draw image to fill canvas while maintaining aspect ratio
                const scale = Math.max(
                    canvas.width / currentImage.width,
                    canvas.height / currentImage.height,
                );

                const x = (canvas.width - currentImage.width * scale) / 2;
                const y = (canvas.height - currentImage.height * scale) / 2;

                ctx.drawImage(
                    currentImage,
                    x,
                    y,
                    currentImage.width * scale,
                    currentImage.height * scale,
                );
            }

            frameCount++;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full h-full aspect-square">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                aria-label="Changing image animation"
                role="img"
            />
        </div>
    );
};

export default CanvasAnimationImages;
