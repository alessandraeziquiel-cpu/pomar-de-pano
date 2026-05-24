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
color:"#5E5244"
}}
>

{/* HERO */}

<div
style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"80px",
padding:"100px 70px",
background:"#FFF8F1",
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
fontSize:"28px",
lineHeight:"1.8",
maxWidth:"520px"
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
gap:"20px"
}}
>

<button
style={{
background:"#6F7550",
color:"white",
padding:"18px 35px",
borderRadius:"40px",
border:"none",
fontSize:"18px"
}}
>

ENCOMENDAR

</button>

<button
style={{
background:"#FFF8F1",
border:"2px solid #6F7550",
padding:"18px 35px",
borderRadius:"40px",
fontSize:"18px",
color:"#6F7550"
}}
>

COLEÇÃO

</button>

</div>

</div>

<Image
src="/Bonecas/Ritinha.png"
alt="Ritinha"
width={420}
height={520}
style={{
borderRadius:"35px",
objectFit:"cover"
}}
/>

</div>

{/* PERSONAGENS */}

<div
style={{
padding:"80px"
}}
>

<h2
style={{
fontSize:"62px",
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

<h3>

{nome}

</h3>

<p>

{texto}

</p>

</div>

))}

</div>

</div>

{/* DONA POMAR */}

<div
style={{
maxWidth:"1100px",
margin:"80px auto",
background:"#FFF8F1",
padding:"50px",
borderRadius:"35px",
display:"flex",
gap:"50px",
alignItems:"center",
flexWrap:"wrap"
}}
>

<Image
src="/Dona Pomar/Dona Pomar.png"
alt="Dona Pomar"
width={220}
height={280}
style={{
borderRadius:"25px",
objectFit:"cover"
}}
/>

<div>

<h2
style={{
fontSize:"60px",
color:"#6F7550"
}}
>

Conheça a Dona Pomar

</h2>

<p
style={{
fontSize:"24px",
lineHeight:"1.8",
maxWidth:"520px"
}}
>

Sou Alessandra.

Cada boneca nasce entre linhas,
tecidos, afeto e histórias
costuradas com carinho.

</p>

</div>

</div>

</main>

);

}
