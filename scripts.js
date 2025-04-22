let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Tiago', number: '(11) 98201-5140' },
    { name: 'Anny', number: '(11) 93661-5540' },
    { name: 'Gabriel', number: '(11) 95501-5140' },
    { name: 'Liliane', number: '(11) 98201-5140' },
    { name: 'Pai', number: '(11) 90001-5140' },
    { name: 'Mãe', number: '(11) 98201-5666' },
]

function search(){
    for(let i = 0; i< contacts.length;i++){

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()){
            p.innerHTML = `Contato Encontrado Nome: ${contacts[i].name}
             <br>Tel: ${ contacts[i].number}`
            break
        }else {
            p.innerHTML="contato não encontrado, tente novamente"
        }
    }

        
}