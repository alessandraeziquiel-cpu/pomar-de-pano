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
padding:"60px 25px"
}}
>

<div
style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"35px",
flexWrap:"wrap"
}}
>

<div>

<h1
style={{
fontSize:"clamp(52px,14vw,110px)",
lineHeight:"0.9",
color:"#6F7550",
marginBottom:"30px"
}}
>

Pomar
<br/>
de Pano

</h1>

<p
style={{
fontSize:"clamp(22px,5vw,30px)",
maxWidth:"100%",
lineHeight:"1.7",
color:"#67594A"
}}
>

Bonecas artesanais criadas ponto a ponto
para guardar afeto, memórias e histórias.

</p>

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
cursor:"pointer"
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
cursor:"pointer"
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
cursor:"pointer"
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
width:"100%",
maxWidth:"360px",
height:"auto",
objectFit:"cover",
borderRadius:"35px",
boxShadow:"0 20px 40px rgba(0,0,0,.08)"
}}
/>

</div>

</section>

{/* COLEÇÃO */}

<section
id="colecao"
style={{
padding:"80px 25px"
}}
>

<h2
style={{
fontSize:"clamp(42px,8vw,64px)",
textAlign:"center",
color:"#6F7550",
marginBottom:"60px"
}}
>

Conheça os personagens do Pomar

</h2>

<div
style={{
display:"flex",
justifyContent:"center",
gap:"25px",
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
boxShadow:"0 8px 20px rgba(0,0,0,.04)",
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
padding:"50px",
borderRadius:"35px",
display:"flex",
gap:"40px",
alignItems:"center",
flexWrap:"wrap"
}}
>

<Image
src="/Dona Pomar 2.png"
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
fontSize:"clamp(42px,10vw,62px)",
color:"#6F7550"
}}
>

Conheça a Dona Pomar

</h2>

<p
style={{
fontSize:"24px",
lineHeight:"1.8",
maxWidth:"700px"
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
marginTop:"80px",
background:"#6F7550",
padding:"45px",
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

Bonecas artesanais feitas à mão.

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

💬

</a>

</main>

);

}