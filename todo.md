# Migração independente do Manus

- [x] Estudar o commit do GitHub autorizado e comparar com o estado local.
- [x] Preservar a base autorizada sem reset destrutivo ou reescrita de histórico.
- [x] Criar checkpoint de segurança antes das alterações.
- [x] Remover plugins, proxy, analytics e hosts exclusivos do Manus.
- [x] Copiar e preservar os assets usados dentro do projeto.
- [x] Atualizar caminhos independentes dos assets.
- [x] Remover arquivos e diretórios exclusivos do ambiente Manus.
- [x] Remover variáveis específicas do Manus sem alterar NODE_ENV e PORT.
- [x] Remover somente a dependência específica do Manus presente na base.
- [x] Preservar o GitHub como remoto principal sem force push.
- [x] Instalar dependências, executar typecheck e build.
- [x] Rodar a aplicação independente e verificar imagens, favicon, Open Graph, Home, formulário, links e responsividade.
- [ ] Remover apenas `client/public/images/logo_Base.png`, asset grande não utilizado autorizado pelo usuário.
- [ ] Salvar checkpoint final e preparar relatório.
