function moreop() {
var section = document.getElementById('otm')
var cart = document.getElementById('cart')
var m = document.getElementById('cmouse')
var t = document.getElementById('cteclado')
var h = document.getElementById('chead')
var g = document.getElementById('cgabi')
var d = document.getElementById('ccombo')
//hardware
var pro = document.getElementById('cpro')
var pv = document.getElementById('cplav')
var ssd = document.getElementById('cssds')
var mother = document.getElementById('cmother')
var rem = document.getElementById('rem')
var f = document.getElementById('cpower')
//pcs
var pca = document.getElementById('cpcg')
var pct = document.getElementById('cpce')
var ps5 = document.getElementById('cps5')
var xbox = document.getElementById('cps4')
//faq
var qum = document.getElementById('polio')
var faq = document.getElementById('polia')
var curs = document.getElementById('poli')

section.style.position = 'absolute'
section.style.height = '100px'
section.style.width = '100%'
section.style.backgroundColor = 'rgb(213, 202, 240)'
section.style.top = '0px'
section.style.left = '0px'
cart.style.display = 'none'

m.innerHTML = 'Mouse'
m.style.left = '5%'
m.style.top = '20px'

t.innerHTML = 'Teclado'
t.style.left = '5%'
t.style.top = '35px'

h.innerHTML = 'Headsets'
h.style.left = '5%'
h.style.top = '50px'

g.innerHTML = 'Gabinetes'
g.style.left = '5%'
g.style.top = '65px'

d.innerHTML = 'Combos'
d.style.left = '5%'
d.style.top = '80px'

pro.innerHTML = 'Processadores'
pro.style.left = '20%'
pro.style.top = '20px'

pv.innerHTML = 'Placas de vídeo'
pv.style.left = '20%'
pv.style.top = '35px'

ssd.innerHTML = 'SSD/HDD'
ssd.style.left = '20%'
ssd.style.top = '50px'

mother.innerHTML = 'Placas-Mãe'
mother.style.left = '20%'
mother.style.top = '65px'

rem.innerHTML = 'Memória Ram'
rem.style.left = '20%'
rem.style.top = '80px'

f.innerHTML = 'Fontes'
f.style.left = '45%'
f.style.top = '20px'

pca.innerHTML = 'Pc Gamer'
pca.style.left = '45%'
pca.style.top = '35px'

pct.innerHTML = 'Pc em Geral'
pct.style.left = '45%'
pct.style.top = '50px'

ps5.innerHTML = 'PS5'
ps5.style.left = '45%'
ps5.style.top = '65px'

xbox.innerHTML = 'Xbox Series'
xbox.style.left = '45%'
xbox.style.top = '80px'

qum.innerHTML = 'Quem Somos'
qum.style.left = '80%'
qum.style.top = '85%'

faq.innerHTML = 'FAQ'
faq.style.left = '80%'
faq.style.top = '70%'

curs.innerHTML = 'Cursos'
curs.style.left = '80%'
curs.style.top = '55%'
curs.style.color = 'black'

var buta = document.getElementById('butao')
buta.style.position = 'absolute'
buta.style.left = '90%'

var text1 = document.getElementById('txt')
var text2 = document.getElementById('txt2')
var aceita = document.getElementById('accept')

text1.style.left = '200px'

}
