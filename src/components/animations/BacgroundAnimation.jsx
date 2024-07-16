import React, { useEffect, useRef } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const drops = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let english =
      "Backin2021bullrunwheremoonersareleftandrightDegensarediamondhandsnotfumblingtheirbagsLessjeetsandmorechadsNowletsrunitbackonBasechain";
    english = english.split("");

    const font_size = 15;
    const columns = canvas.width / font_size;

    drops.current = [];
    for (let x = 0; x < columns; x++) {
      drops.current[x] = 1;
    }

    const draw = () => {
      ctx.current.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.current.fillRect(0, 0, canvas.width, canvas.height);

      ctx.current.fillStyle = "rgb(249 115 22)";
      ctx.current.font = `${font_size}px arial`;

      for (let i = 0; i < drops.current.length; i++) {
        const text = english[Math.floor(Math.random() * english.length)];
        ctx.current.fillText(text, i * font_size, drops.current[i] * font_size);

        if (
          drops.current[i] * font_size > canvas.height &&
          Math.random() > 0.975
        ) {
          drops.current[i] = 0;
        }

        drops.current[i]++;
      }
    };

    const intervalId = setInterval(draw, 33);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        background: "#f97316",
        display: "block",
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundAnimation;
