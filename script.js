(function(){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
try{var p={};new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Sofia',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date()).forEach(function(x){p[x.type]=x.value});
var d=p.weekday,m=(+p.hour%24)*60+ +p.minute,o=null;
if(['Tue','Wed','Thu','Fri'].indexOf(d)>-1)o=11*60;else if(d==='Sat'||d==='Sun')o=13*60;
var open=o!==null&&m>=o&&m<21*60;
document.getElementById('status').textContent=open?'Open now until 21:00':(o===null?'Closed on Mondays':'Closed now');
if(!open)document.getElementById('dot').classList.add('off')}catch(e){}
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var g=document.getElementById('glow'),st=document.getElementById('stage');
addEventListener('pointermove',function(e){g.style.setProperty('--mx',e.clientX+'px');g.style.setProperty('--my',e.clientY+'px');
if(st){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;st.children[1].style.translate=x*-30+'px '+y*-24+'px';st.children[2].style.translate=x*34+'px '+y*26+'px';st.children[4].style.translate=x*22+'px '+y*-18+'px'}});
})();
