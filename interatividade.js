function contar(){
    var t_tn1 = window.document.getElementById('tn1')
    var t_tn2 = window.document.getElementById('tn2')
    var res = window.document.querySelector('div.resultado')

    //as variáveis acima são textos, preciso transformar
    var n1 = Number(t_tn1.value)
    var n2 = Number(t_tn2.value)

    var soma = n1 + n2

    res.innerText = `${soma}`


}