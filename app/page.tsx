import Image from "next/image";

export default function Home() {

const bonecas = [
["Ritinha","Delicada e cheia de afeto."],
["Clara","Doce e acolhedora."],
["Maria","Leve e encantadora."],
["Netinho","Autêntico e divertido."]
];

const whatsapp =
"https://wa.me/5516982294288?text=Olá%20vim%20pelo%20site%20da%20Pomar%20de%20Pano%20e%20quero%20fazer%20uma%20encomenda";

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
padding:"100px 70px"
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
para guardar afeto,
memórias e histórias.

</p>

<br/>

<div
style={{
display:"flex",
alignItems:"center",
gap:"12px"
}}
>

<div
style={{
width:"50px",
height:"1px",
background:"#C8B29A"
}}
/>

<p
style={{
fontSize:"20px",
fontStyle:"italic",
color:"#8A6A4A",
letterSpacing:"1px",
margin:"0"
}}
>

Cheiro de café, tecido e infância.

</p>

<div
style={{
width:"50px",
height:"1px",
background:"#C8B29A"
}}
/>

</div>

<br/><br/>

<div
style={{
display:"flex",
gap:"20px",
flexWrap:"wrap"
}}
>

<a
href={whatsapp}
target="_blank"
style={{
background:"#6F7550",
color:"white",
padding:"18px 40px",
borderRadius:"40px",
fontSize:"18px",
textDecoration:"none"
}}
>

ENCOMENDAR

</a>

<a
href="#colecao"
style={{
background:"#FFF8F1",
border:"2px solid #6F7550",
padding:"18px 40px",
borderRadius:"40px",
fontSize:"18px",
color:"#6F7550",
textDecoration:"none"
}}
>

COLEÇÃO

</a>

<a
href="https://instagram.com/pomardepano.oficial"
target="_blank"
style={{
background:"#C8B29A",
color:"white",
padding:"18px 40px",
borderRadius:"40px",
fontSize:"18px",
textDecoration:"none"
}}
>

INSTAGRAM

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
boxShadow:"0 20px 40px rgba(0,0,0,.08)"
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
padding:"60px",
borderRadius:"35px",
display:"flex",
gap:"50px",
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

{/* RODAPÉ */}

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

{/* BOTÃO FLUTUANTE */}

<a
href={whatsapp}
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
