const ePaisagem = (larg,alt) => larg > alt ? `A imagem esta em modo Paisagem e a largura é : ${larg}` : `A imagem esta em modo Retrato e a altura é : ${alt}`;

console.log(ePaisagem(600,400))