
let contador = 0;
function ligar() {
  contador++;
  document.getElementById("contadorLigacoes").innerText = `📞 Ligações: ${contador}`;
}
function resetarContador() {
  contador = 0;
  document.getElementById("contadorLigacoes").innerText = `📞 Ligações: ${contador}`;
}
function importarArquivo() {
  alert("Função de importação ativada.");
}
function colarDados() {
  alert("Colagem de dados ativada.");
}
function adicionarContato() {
  alert("Adicionar contato funcional.");
}
function exportarZapTurbo() {
  alert("Exportando no formato ZapTurbo...");
}
function backupGoogleDrive() {
  alert("Backup para Google Drive iniciado.");
}
