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