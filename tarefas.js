function filtrarTarefasPendentes(tarefas) {
  return tarefas
    .filter(tarefa => !tarefa.concluida)
    .map(tarefa => ({ ...tarefa, titulo: tarefa.titulo.toUpperCase() }));
}

const tarefas = [
  { id: 1, titulo: "estudar docker", concluida: true },
  { id: 2, titulo: "configurar pipeline cicd", concluida: false },
  { id: 3, titulo: "atualizar documentacao", concluida: false },
  { id: 4, titulo: "rever logs de producao", concluida: true }
];

console.log(filtrarTarefasPendentes(tarefas));

// Saída:
// [
//   { id: 2, titulo: "CONFIGURAR PIPELINE CICD", concluida: false },
//   { id: 3, titulo: "ATUALIZAR DOCUMENTACAO", concluida: false }
// ]