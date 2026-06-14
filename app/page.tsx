{/* TÍTULO PERSONAGENS */}

<h2
className="personagensTitulo"
style={{
fontSize:"64px",
color:"#6F7550",
textAlign:"center",
marginBottom:"40px"
}}
>

Conheça os personagens do Pomar

</h2>

{/* TÍTULO DONA POMAR */}

<h2
className="donaTitulo"
style={{
fontSize:"62px",
color:"#6F7550",
marginBottom:"30px"
}}
>

Conheça a Dona Pomar

</h2>

{/* AJUSTE SOMENTE MOBILE */}

<style jsx>{`
@media (max-width:768px){

.personagensTitulo{
font-size:32px !important;
line-height:1.2 !important;
max-width:320px !important;
margin:0 auto 30px auto !important;
text-align:center !important;
padding:0 12px !important;
}

.donaTitulo{
font-size:34px !important;
line-height:1.2 !important;
max-width:320px !important;
margin:0 auto 24px auto !important;
text-align:center !important;
padding:0 12px !important;
}

}

`}</style>
