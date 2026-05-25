{/* COLEÇÃO */}

<section
id="colecao"
style={{
padding:"60px 70px"
}}
>

<h2
style={{
fontSize:"clamp(38px,8vw,64px)",
textAlign:"center",
color:"#6F7550",
marginBottom:"40px",
lineHeight:"1.1"
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
maxWidth:"1300px",
margin:"auto",
background:"#FFF8F1",
padding:"65px",
borderRadius:"35px",
display:"flex",
gap:"50px",
alignItems:"center",
justifyContent:"center",
textAlign:"center",
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
fontSize:"clamp(42px,8vw,62px)",
lineHeight:"1.1",
color:"#6F7550"
}}
>

Conheça a Dona Pomar

</h2>

<p
style={{
fontSize:"clamp(20px,5vw,24px)",
lineHeight:"1.7",
maxWidth:"850px"
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