const pergunta7 = document.querySelector('.pergunta7');
const pergunta7A = document.querySelector('.pergunta7A');
const pergunta7Sim = document.querySelector('#pergunta7Sim');
const pergunta7Nao = document.querySelector('#pergunta7Nao');

pergunta7.addEventListener('mouseover', ()=>{
    pergunta7Sim.textContent = 'Sim'
    pergunta7Nao.textContent = 'Não'
})

pergunta7.addEventListener('mouseout', ()=>{
    pergunta7Sim.textContent = 'Não'
    pergunta7Nao.textContent = 'Sim'
})

pergunta7A.addEventListener('mouseover', ()=>{
    pergunta7Sim.textContent = 'Sim'
    pergunta7Nao.textContent = 'Não'
})

pergunta7A.addEventListener('mouseout', ()=>{
    pergunta7Sim.textContent = 'Não'
    pergunta7Nao.textContent = 'Sim'
})
