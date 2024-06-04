async function getAlunos() {
    const resp = await fetch("http://localhost:8080/ProjetoAlunoWeb/rest/aluno")
    return await resp.json()
}

const listaDeAlunos = getAlunos().then(alunos => {
    alunos.forEach(aluno => {
        const content = `
            <header>${aluno.nome}</header>
            <p>Turma: ${aluno.turma}</p>
            <p>nota: ${aluno.nota}</p>
        `

        const card = document.createElement("article")
        card.innerHTML = content

        document.querySelector("#lista-de-alunos").appendChild(card)

    })
})