@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#0a0a0a;
    color:white;
}

header{
    height:100vh;
    background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.70)),
    url("https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=80");
    background-size:cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
}

header h1{
    font-size:6rem;
    letter-spacing:15px;
}

header p{
    font-size:1.4rem;
    margin-top:15px;
    letter-spacing:5px;
}

.btn{
    display:inline-block;
    margin-top:40px;
    padding:15px 40px;
    border:2px solid white;
    color:white;
    text-decoration:none;
    transition:.3s;
}

.btn:hover{
    background:white;
    color:black;
}

section{
    max-width:1200px;
    margin:auto;
    padding:90px 25px;
}

h2{
    text-align:center;
    font-size:2.2rem;
    margin-bottom:50px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.card{
    background:#151515;
    border-radius:18px;
    overflow:hidden;
    transition:.4s;
}

.card:hover{
    transform:translateY(-10px);
    box-shadow:0 15px 35px rgba(255,255,255,.12);
}

.card img{
    width:100%;
    height:350px;
    object-fit:cover;
}

.card h3{
    text-align:center;
    padding:20px;
}

footer{
    background:#111;
    padding:60px;
    text-align:center;
}

footer p{
    margin-top:10px;
}
