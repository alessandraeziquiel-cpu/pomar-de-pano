import Image from "next/image";

export default function Home() {

const bonecas = [
["Ritinha","Delicada e cheia de afeto."],
["Clara","Doce e acolhedora."],
["Maria","Leve e encantadora."],
["Netinho","Autêntico e divertido."]
];

return (

<main
style={{
background:"#F6F0E7",
minHeight:"100vh",
fontFamily:"Georgia",
color:"#5A4D3F"
}}
>

{/* HERO */}

<section
style={{
background:"#FFF8F1",
padding:"60px 70px 100px"
}}
>

<div
style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"90px",
flexWrap:"wrap"
}}
>

<div>

<h1
style={{
fontSize:"110px",
lineHeight:"0.9",
color:"#6F7550",
marginBottom:"35px"
}}
>

Pomar
<br/>
de Pano

</h1>

<p
style={{
fontSize:"30px",
maxWidth:"540px",
lineHeight:"1.8",
color:"#67594A"
}}
>

Bonecas artesanais criadas ponto a ponto
para guardar afeto, memórias e histórias.

</p>

<div
style={{
display:"flex",
flexDirection:"column",
alignItems:"flex-start",
gap:"10px",
marginTop:"20px"
}}
>

<p
style={{
fontSize:"18px",
color:"#B89A78",
letterSpacing:"3px",
margin:"0"
}}
>

🌿 ─── ☕ ─── 🌿

</p>

<p
style={{
fontSize:"20px",
fontStyle:"italic",
color:"#8A6A4A",
margin:"0"
}}
>

Cheiro de café, tecido e infância.

</p>

<p
style={{
marginTop:"10px",
fontSize:"16px",
color:"#9B8B78",
letterSpacing:"1px"
}}
>

🧺 Linhas • tecidos • memórias

</p>

</div>

<br/>

<div
style={{
display:"flex",
gap:"20px",
flexWrap:"wrap"
}}
>

<a
href="https://wa.me/5516982294288"
target="_blank"
>

<button
style={{
background:"#6F7550",
color:"white",
padding:"18px 40px",
border:"none",
borderRadius:"40px",
fontSize:"18px",
cursor:"pointer",
boxShadow:"0 8px 18px rgba(111,117,80,.15)"
}}
>

ENCOMENDAR

</button>

</a>

<a href="#colecao">

<button
style={{
background:"#FFF8F1",
border:"2px solid #6F7550",
padding:"18px 40px",
borderRadius:"40px",
fontSize:"18px",
color:"#6F7550",
cursor:"pointer",
boxShadow:"0 8px 18px rgba(111,117,80,.15)"
}}
>

COLEÇÃO

</button>

</a>

<a
href="https://instagram.com/pomardepano.oficial"
target="_blank"
>

<button
style={{
background:"#C8B29A",
color:"white",
padding:"18px 40px",
border:"none",
borderRadius:"40px",
fontSize:"18px",
cursor:"pointer",
boxShadow:"0 8px 18px rgba(111,117,80,.15)"
}}
>

INSTAGRAM

</button>

</a>

</div>

</div>

<Image
src="/Bonecas/Ritinha.png"
alt="Ritinha"
width={430}
height={540}
style={{
width:"430px",
height:"540px",
objectFit:"cover",
borderRadius:"35px",
padding:"10px",
background:"#FFF8F1",
border:"1px solid #E8DED1",
boxShadow:"0 25px 45px rgba(92,72,50,.12)"
}}
/>

</div>

</section>

{/* COLEÇÃO */}

<section
id="colecao"
style={{
padding:"90px 70px"
}}
>

<h2
style={{
fontSize:"64px",
textAlign:"center",
color:"#6F7550",
marginBottom:"70px"
}}
>

Conheça os personagens do Pomar

</h2>

<div
style={{
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap"
}}
>

{bonecas.map(([nome,texto])=>(

<div
key={nome}
style={{
width:"260px",
background:"#FFF8F1",
padding:"20px",
borderRadius:"30px",
boxShadow:"0 10px 25px rgba(92,72,50,.06)",
textAlign:"center"
}}
>

<Image
src={`/Bonecas/${nome}.png`}
alt={nome}
width={220}
height={260}
style={{
width:"220px",
height:"260px",
objectFit:"cover",
borderRadius:"20px"
}}
/>

<h3
style={{
fontSize:"28px",
marginTop:"15px",
color:"#6F7550"
}}
>

{nome}

</h3>

<p>

{texto}

</p>

</div>

))}

</div>

</section>

{/* DONA POMAR */}

<section
style={{
maxWidth:"1100px",
margin:"auto",
background:"#FFF8F1",
padding:"60px",
borderRadius:"35px",
display:"flex",
gap:"50px",
alignItems:"center",
flexWrap:"wrap",
boxShadow:"0 12px 30px rgba(92,72,50,.05)"
}}
>

<Image
src="/Dona Pomar/Dona Pomar.png"
alt="Alessandra"
width={220}
height={280}
style={{
width:"220px",
height:"280px",
objectFit:"cover",
borderRadius:"30px"
}}
/>

<div>

<h2
style={{
fontSize:"62px",
color:"#6F7550"
}}
>

Conheça a Dona Pomar

</h2>

<p
style={{
fontSize:"24px",
lineHeight:"1.9",
maxWidth:"550px"
}}
>

Sou Alessandra.

Cada boneca nasce entre tecidos,
linhas, afeto e histórias
costuradas manualmente.

O Pomar de Pano carrega
o aconchego do interior,
cheiro de café passado
e carinho feito ponto a ponto.

</p>

</div>

</section>

<footer
style={{
marginTop:"90px",
background:"#6F7550",
padding:"50px",
color:"white",
textAlign:"center"
}}
>

<h3
style={{
fontSize:"42px"
}}
>

Pomar de Pano

</h3>

<p>

Bonecas artesanais feitas à mão
com afeto e memória.

</p>

<br/>

<p>

Instagram:
@pomardepano.oficial

</p>

<p>

WhatsApp:
(16) 98229-4288

</p>

</footer>

<a
href="https://wa.me/5516982294288"
target="_blank"
style={{
position:"fixed",
bottom:"25px",
right:"25px",
width:"70px",
height:"70px",
background:"#6F7550",
borderRadius:"50%",
display:"flex",
justifyContent:"center",
alignItems:"center",
fontSize:"32px",
textDecoration:"none",
color:"white",
boxShadow:"0 12px 25px rgba(0,0,0,.2)"
}}
>

🟢

</a>

</main>

);

}
