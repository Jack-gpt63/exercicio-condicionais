let idade = Number(prompt("Qual é sua idade?"));

if (idade < 16) {
    alert("Você não pode participar");
} else {
    alert("Você passou na primeira etapa");

    if (idade >= 60) {
        let atestado = prompt("Você possui atestado? (sim ou não)").trim().toLowerCase();

        if (atestado === "sim") {
            alert("Você passou na segunda fase!");
        } else {
            alert("Você reprovou na segunda fase");
        }
    }

    let distancia = Number(prompt("Digite a distância que vai percorrer (5, 10, 21 ou 42)"));

    if (distancia === 5 || distancia === 10 || distancia === 21 || distancia === 42) {
        alert("Distância aceita, boa prova!");

        let tempo = Number(prompt("Em quanto tempo você fez sua prova? (em minutos)"));

        if (tempo > 0) {
            let pace = tempo / distancia;
            alert(`Seu pace é: ${pace}`);

            if (pace <= 4) {
                alert("Categoria: Elite");
            } else if (pace <= 6) {
                alert("Categoria: Competitivo");
            } else {
                alert("Categoria: Amador");
            }
        } else {
            alert("Tempo inválido");
        }
    } else {
        alert("Distância inválida");
    }
}

// Extra 1

// let age = Number(prompt("Digite sua idade:"))
// if (isNaN(age)) {
//     alert("Não é um número válido")
// } else if (idade < 16) { 
//     alert("Reprovado na primeira etapa")
// } else {
//     alert("Passou na primeira etapa")
// }

// Extra 2

// let time = Number(prompt("Em quanto tempo você realizou a prova? (em minutos)"))
// if (isNaN(time) || tempo <= 0) {
//     alert("Isso não é um tempo válido")
// } else {
//     let pace = time / distancia
//     alert(`Seu pace é: ${pace}`)
// }

// Extra 3

// if (pace <= 4) {
// alert("Categoria: Elite");
// let premiacao = prompt("Você deseja participar da apresentação?").trim().toLowerCase()
// if (premiacao === "sim") {
// alert("Você entrou na disputa pela premiação")
// } else {
// alert("Você optou por não participar")
// }
// } else if (pace <= 6) {
//  alert("Categoria: Competitivo");
// } else {
// alert("Categoria: Amador");
// }