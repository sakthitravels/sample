window.onload = () => {
  const canvas = document.getElementById("bgCanvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const circles = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    vy: Math.random() * 0.5 + 0.2,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(c => {
      c.y -= c.vy;
      if (c.y < 0) c.y = canvas.height;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();

  // GSAP fade-in
  gsap.to(".hero-content", { opacity: 1, y: -10, duration: 1, ease: "power3.out" });
};
