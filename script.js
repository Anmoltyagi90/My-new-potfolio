

const canvas = document.getElementById("bgCanvas");
    const ctx = canvas.getContext("2d");
    let W, H;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    // particle lines
    class Particle {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "cyan";
        ctx.fill();
      }
    }

    const particles = Array.from({length: 80}, () => new Particle());

    function animate() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(0,255,255,0.3)";
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          let q = particles[j];
          let dx = p.x - q.x;
          let dy = p.y - q.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}



var typed = new Typed(".text", {
  strings: ["Frontend Developer", "BCA Student", "Web Development"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});