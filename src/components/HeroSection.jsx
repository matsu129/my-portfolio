import { useEffect, useRef, useState } from "react";

export default function HeroSectionBlockGame() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Typewriter state
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Rinko! Welcome to my Portfolio.";
  const typewriterIndex = useRef(0);

  // Game state
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Game refs
  const blocksRef = useRef([]);
  const particlesRef = useRef([]);
  const paddleRef = useRef(null);
  const ballRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    function typeWriter() {
      if (typewriterIndex.current < fullText.length) {
        setText(fullText.slice(0, typewriterIndex.current + 1));
        typewriterIndex.current += 1;
        timeout = setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
    return () => clearTimeout(timeout);
  }, []);

  // Game initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 600;

    const cols = 25;
    const rows = 6;
    const blockSize = canvas.width / cols;

    // Initialize blocks
    const blocks = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        blocks.push({
          x: c * blockSize,
          y: r * blockSize,
          size: blockSize - 2,
          color: `rgb(${150 + r * 10}, ${200 + c * 2}, 255)`,
          alive: true,
        });
      }
    }
    blocksRef.current = blocks;

    // Initialize paddle
    paddleRef.current = {
      width: 120,
      height: 15,
      x: canvas.width / 2 - 60,
      y: canvas.height - 30,
    };

    // Initialize ball
    ballRef.current = {
      x: canvas.width / 2,
      y: canvas.height - 50,
      radius: 8,
      vx: 4,
      vy: -4,
    };

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function draw() {
      ctx.fillStyle = "#cce7ff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw blocks
      blocksRef.current.forEach((b) => {
        if (b.alive) {
          ctx.fillStyle = b.color;
          ctx.fillRect(b.x, b.y, b.size, b.size);
          ctx.strokeStyle = "#99ccff";
          ctx.strokeRect(b.x, b.y, b.size, b.size);
        }
      });

      // Draw particles
      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.03;
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        if (p.alpha <= 0) particlesRef.current.splice(i, 1);
      });

      // Draw paddle
      const paddle = paddleRef.current;
      ctx.fillStyle = "#004080";
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

      // Draw ball
      const ball = ballRef.current;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#004080";
      ctx.fill();
      ctx.closePath();

      if (gameStarted && !gameOver) {
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Wall collisions
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0)
          ball.vx *= -1;
        if (ball.y - ball.radius < 0) ball.vy *= -1;

        // Paddle collision
        if (
          ball.y + ball.radius > paddle.y &&
          ball.x > paddle.x &&
          ball.x < paddle.x + paddle.width
        ) {
          ball.vy *= -1;
        }

        // Block collisions
        blocksRef.current.forEach((b) => {
          if (
            b.alive &&
            ball.x + ball.radius > b.x &&
            ball.x - ball.radius < b.x + b.size &&
            ball.y + ball.radius > b.y &&
            ball.y - ball.radius < b.y + b.size
          ) {
            b.alive = false;
            ball.vy *= -1;

            for (let i = 0; i < 5; i++) {
              particlesRef.current.push({
                x: ball.x,
                y: ball.y,
                vx: random(-2, 2),
                vy: random(-2, -0.5),
                size: random(4, 8),
                alpha: 1,
                r: 150 + Math.random() * 50,
                g: 200 + Math.random() * 55,
                b: 255,
              });
            }
          }
        });
                
        // Complete
        if (blocksRef.current.every(b => !b.alive)) {
          setGameOver(true);
          setText("CONGRATULATIONS! 🎉");
        }

        // Game over
        if (ball.y - ball.radius > canvas.height) {
          setGameOver(true);
          setText("GAME OVER");
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    // Mouse paddle control
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      const paddle = paddleRef.current;
      paddle.x = e.clientX - rect.left - paddle.width / 2;
      if (paddle.x < 0) paddle.x = 0;
      if (paddle.x + paddle.width > canvas.width)
        paddle.x = canvas.width - paddle.width;
    }
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [gameStarted, gameOver]);

  function handleStart() {
    setGameStarted(true);
    setGameOver(false);
    blocksRef.current.forEach((b) => (b.alive = true));
    const ball = ballRef.current;
    ball.x = window.innerWidth / 2;
    ball.y = 550;
    ball.vx = 6;
    ball.vy = -6;
  }

  function handleReset() {
    handleStart();
    setText(fullText.substring(0, typewriterIndex.current));
  }

  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        minHeight: "600px",
        position: "relative",
        fontFamily: "'Press Start 2P', monospace",
        color: "#004080",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />

      <h1
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          zIndex: 2,
          position: "relative",
        }}
      >
        {text}
      </h1>

      {/* 注釈 */}
      <div
        style={{
          marginTop: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          color: "#004080",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "0.9rem",
          textAlign: "center",
          maxWidth: "90%",
          zIndex: 2,
          position: "relative",
        }}
      >
        {!gameStarted && !gameOver && (
          <>Use mouse to move the paddle | Break all the blocks | Don’t let the ball fall!</>
        )}
        {gameOver && <>Game Over! Click RESET to try again.</>}
      </div>

      {/* START ボタン */}
      {!gameStarted && !gameOver && (
        <button
          onClick={handleStart}
          style={{
            zIndex: 2,
            position: "relative",
            fontFamily: "'Press Start 2P', monospace",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#004080",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginTop: "0.5rem",
          }}
        >
          START
        </button>
      )}

      {/* RESET ボタン */}
      {gameOver && (
        <button
          onClick={handleReset}
          style={{
            zIndex: 2,
            position: "relative",
            fontFamily: "'Press Start 2P', monospace",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#004080",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginTop: "0.5rem",
          }}
        >
          RESET
        </button>
      )}

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </section>
  );
}
