// Reveal animations
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }}), {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('mobile-open')));
// Subtle ambient network canvas
const canvas = document.getElementById('network'); const ctx = canvas.getContext('2d'); let nodes=[]; let w=0,h=0;
function resize(){w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight;nodes=Array.from({length:Math.min(65,Math.round(w/18))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22}));}
function draw(){ctx.clearRect(0,0,w,h);for(const p of nodes){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,1.3,0,Math.PI*2);ctx.fillStyle='rgba(137,173,222,.4)';ctx.fill();}for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.hypot(dx,dy);if(d<115){ctx.strokeStyle=`rgba(105,151,207,${.08*(1-d/115)})`;ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.stroke();}}requestAnimationFrame(draw);}
resize();draw();window.addEventListener('resize',resize);
