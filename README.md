# React Native Expo Boilerplate

Este repositório serve como um boilerplate para iniciar projetos em React Native utilizando o Expo. Ele está configurado com três principais estratégias de navegação - Stack, Drawer e Bottom Tabs Navigation - e inclui um exemplo de passagem de dados entre telas para facilitar o desenvolvimento de aplicações mais complexas.

## Status do desenvolvimento

- [x] Configuração do ambiente
- [x] Estrutura de pastas
- [x] Estrutura de navegação
- [x] Exemplo de passagem de dados entre telas

## Iniciando o projeto

Aqui estão as instruções detalhadas para configurar o ambiente de desenvolvimento e começar a trabalhar com este boilerplate em sua máquina local.

### Pré-requisitos

Para utilizar este boilerplate, é essencial ter o ambiente NodeJS/React Native já configurado. Caso ainda não tenha realizado essa configuração, siga as orientações disponíveis [neste link](https://www.notion.so/Windows-f715073fc7c446dbaaee2bc313f8741c) para preparar seu ambiente.

### Configuração e Instalação

1. **Fork do Repositório:** Primeiramente, faça um fork deste repositório para sua conta no GitHub.

2. **Clone Local:** Depois, clone o repositório forkado para sua máquina.

3. **Instale as Dependências:** Entre na pasta do projeto e instale as dependências necessárias.

4. **Inicie o Projeto:** Com as dependências instaladas, inicie o projeto.

5. **Dispositivo ou Emulador:** Finalmente, abra o projeto em seu dispositivo físico ou em um emulador.

## Estrutura de arquivos

O projeto segue uma organização lógica de arquivos, facilitando a manutenção e a compreensão do código:

```
react-native-expo-boilerplate/
├── src/
│   ├── components/
│   ├── data/
│   ├── routes/
│   ├── screens/
└── App.jsx
```

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)

## Contribuindo

Contribuições são sempre bem-vindas para melhorar o boilerplate. Veja como você pode contribuir:

1. **Fork:** Inicie fazendo um fork do projeto.
2. **Branch de Feature:** Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. **Commit:** Faça commits das suas alterações: `git commit -m "feat: minha feature"`.
4. **Push:** Envie suas alterações para o GitHub: `git push origin minha-feature`.
5. **Pull Request:** Abra um pull request para a branch principal.

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

# README

Este README oferece uma visão detalhada do projeto, incluindo sua estrutura de pastas, descrição dos arquivos e uma explicação dos principais componentes e funcionalidades implementadas.

## Estrutura de Pastas

```
├── assets
├── src
│   ├── components
│   │   ├── EasyNavigation
│   │   ├── HandleHelperText
│   │   ├── Logo
│   │   ├── NewFooter
│   │   ├── Title
│   │   └── TouchButton
│   ├── data
│   ├── routes
│   │   └── Navegacao
│   └── screens
├── .gitignore
├── App.jsx
├── LICENSE
├── README.md
├── app.json
├── babel.config.js
├── package-lock.json
└── package.json
```

- **assets**: Contém imagens utilizadas no projeto.
- **src**: Contém o código-fonte do projeto.
  - **components**: Armazena componentes reutilizáveis em todo o aplicativo.
  - **data**: Contém possíveis dados estáticos ou de configuração.
  - **routes**: Configurações de navegação no aplicativo.
  - **screens**: Contém as telas visíveis para o usuário.
- **.gitignore**: Especifica quais arquivos e diretórios devem ser ignorados pelo controle de versão Git.
- **App.jsx**: Ponto de entrada principal do aplicativo.
- **LICENSE**: Contém a licença do projeto.
- **README.md**: Este arquivo, contendo informações sobre o projeto.
- **app.json**: Configurações do aplicativo.
- **babel.config.js**: Configurações do Babel para transpilação do código.
- **package-lock.json**: Lista exata das dependências instaladas.
- **package.json**: Metadados do projeto e dependências npm.

## Descrição dos Componentes

### `EasyNavigation`

Componente responsável pela navegação fácil entre diferentes partes do aplicativo.

- Utiliza o `react-native` para criar os componentes visuais.
- Usa o `@react-navigation/native` para gerenciar a navegação.
- Inclui botões para navegar para as seções de Hoteis, Voos e Pacotes.

### `HandleHelperText`

Componente para exibir um texto de ajuda ou título.

- Aceita um parâmetro `title` para exibir o texto desejado.
- Usa estilos definidos no arquivo `styles.js`.

### `Logo`

Componente para exibir a logo do aplicativo.

- Possui uma estilização fixa para a logo.

### `NewFooter`

Componente para finalizar a página e oferecer navegação pelas redes sociais.

- Provavelmente inclui links para redes sociais e outras páginas relevantes.

### `Title`

Componente para exibir um título na página.

### `TouchButton`

Componente para navegação, possivelmente um botão com funcionalidade de navegação.

## Sobre as Pastas

- **Data**: Contém arquivos de modelo para criar o usuário.
- **Routes**: Configurações de navegação, possivelmente usando um Drawer Navigator com páginas como Perfil, Cadastro, Voos, Hoteis, Termos, Equipe, Empresa, entre outras.
- **Screens**: Contém as telas visíveis para o usuário.

Este README fornece uma visão geral do projeto, incluindo sua estrutura e componentes principais. Para obter mais detalhes sobre implementações específicas ou funcionalidades, consulte o código-fonte do projeto.


