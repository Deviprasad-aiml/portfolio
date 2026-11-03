document.querySelectorAll('[data-filter]').forEach(function(button){button.addEventListener('click',function(){var filter=button.dataset.filter;var count=0;document.querySelectorAll('[data-filter]').forEach(function(item){item.setAttribute('aria-pressed',String(item===button));});document.querySelectorAll('[data-category]').forEach(function(card){card.hidden=filter!=='all'&&card.dataset.category!==filter;if(!card.hidden)count++;});document.getElementById('filter-status').textContent=filter==='all'?'Showing all 9 skill categories':'Showing '+count+' skill '+(count===1?'category':'categories');});});

(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var $=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var bar=document.createElement('div');bar.className='progress';document.body.appendChild(bar);
function prog(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?scrollY/h:0)+')'}
addEventListener('scroll',prog,{passive:true});prog();
if(rm)return;
/* cursor glow */
if(matchMedia('(hover:hover)').matches){var g=document.createElement('div');g.className='glow';document.body.appendChild(g);var tx=innerWidth/2,ty=300,x=tx,y=ty;addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY});(function loop(){x+=(tx-x)*.08;y+=(ty-y)*.08;g.style.transform='translate('+x+'px,'+y+'px)';requestAnimationFrame(loop)})();}
/* service ticker */
var hero=$('.hero')[0];
if(hero){var items=['EC2','Lambda','Auto Scaling','EBS','S3','S3 Glacier','VPC','Route 53','Amplify','RDS','IAM','Load Balancer','CloudWatch','Git','GitHub'];var h=items.map(function(t){return '<span>'+t+'</span>'}).join('');var m=document.createElement('div');m.className='marquee';m.setAttribute('aria-hidden','true');m.innerHTML='<div>'+h+h+'</div>';hero.parentNode.insertBefore(m,hero.nextSibling);}
/* scroll reveal with stagger */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.classList.remove('rv','in');t.style.removeProperty('--d')},1700)}})},{threshold:.12});
$('.section-heading,.about-quote,.about-copy,.skill-card,.training,.soft-skills,.featured-project,.roadmap article,.certificate,.job,.edu>div,.journey h2,.contact>*').forEach(function(el){var i=Array.prototype.indexOf.call(el.parentNode.children,el);el.style.setProperty('--d',(i%3)*.1+'s');el.classList.add('rv');io.observe(el)});
/* card spotlight */
document.addEventListener('pointermove',function(e){var c=e.target.closest&&e.target.closest('.skill-card');if(c){var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
/* filter re-animation */
$('[data-filter]').forEach(function(b){b.addEventListener('click',function(){var n=0;$('.skill-card').forEach(function(c){if(!c.hidden){c.classList.remove('pop');void c.offsetWidth;c.style.animationDelay=(n++%3*70)+'ms';c.classList.add('pop')}})})});
/* active nav link */
var links=$('nav a[href*="#"]');
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href').split('#')[1]===e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
$('main section[id]').forEach(function(s){so.observe(s)});
/* CGPA count-up */
$('.hero-meta strong').forEach(function(s){if(/^8\.25/.test(s.textContent)){var st=performance.now();(function f(n){var p=Math.min(Math.max((n-st-900)/1400,0),1);s.textContent=(8.25*(1-Math.pow(1-p,3))).toFixed(2)+' CGPA';if(p<1)requestAnimationFrame(f)})(st)}});
})();

(function(){
var boxes=[].slice.call(document.querySelectorAll('.arch'));if(!boxes.length)return;
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,all=[];
boxes.forEach(function(box){
var svg=box.querySelector('svg'),steps=[].slice.call(box.querySelectorAll('.arch-steps li')),cur=-1,run=false;
var map=JSON.parse(box.dataset.map),cyc=+box.dataset.cycle,slot=cyc/steps.length;
var tg=document.querySelector('.arch-toggle[href="#'+box.id+'"]'),cl=box.querySelector('.arch-close');
function set(i){if(i===cur)return;cur=i;[].slice.call(box.querySelectorAll('.on')).forEach(function(el){el.classList.remove('on')});steps[i].classList.add('on');map[i].forEach(function(id){var el=box.querySelector('#'+id);if(el)el.classList.add('on')})}
function tick(){if(!run)return;set(Math.min(steps.length-1,Math.floor((svg.getCurrentTime()%cyc)/slot)));requestAnimationFrame(tick)}
function openIt(){all.forEach(function(o){if(o.box!==box)o.close()});box.classList.add('open');if(tg){tg.setAttribute('aria-expanded','true');tg.textContent='Hide how it works ↑'}if(!rm&&!run){run=true;svg.setCurrentTime(0);svg.unpauseAnimations();tick()}}
function closeIt(){box.classList.remove('open');run=false;svg.pauseAnimations();if(tg){tg.setAttribute('aria-expanded','false');tg.textContent='See how it works ↓'}}
svg.pauseAnimations();set(0);
steps.forEach(function(li,i){function go(){svg.setCurrentTime(i*slot+.35);set(i)}li.addEventListener('click',go);li.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}})});
if(tg)tg.addEventListener('click',function(e){e.preventDefault();if(box.classList.contains('open')){closeIt()}else{openIt();setTimeout(function(){box.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'})},120)}});
if(cl)cl.addEventListener('click',function(){closeIt();if(tg)tg.scrollIntoView({behavior:rm?'auto':'smooth',block:'center'})});
all.push({box:box,close:closeIt});
if(location.hash==='#'+box.id)openIt();
});
})();
