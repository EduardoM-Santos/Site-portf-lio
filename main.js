const botãoAbrir = document.getElementById('conteudo-sobre')
const conteudoSobre = document.querySelector('.conteudo-oculto')

botãoAbrir.addEventListener('click', () =>{
  conteudoSobre.classList.toggle('mostrar')  
})


