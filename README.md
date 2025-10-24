# Módulo 33 - React Testing Library

## Menu
[Aula 1 - Conheça os tipos de testes](#aula-1---conheça-os-tipos-de-testes)   
[Aula 2 - Escreva os primeiros testes ](#aula-2---escreva-os-primeiros-testes)   
[Aula 3 - Explore testes no React](#aula-3---explore-testes-no-react)   
[Aula 4 - Faça testes com React e Redux](#aula-4---faça-testes-com-react-e-redux)   
[Aula 5 - Teste o componente de produto](#aula-5---teste-o-componente-de-produto)   
[Aula 6 - Conheça o Mock Service Worker](#aula-6---conheça-o-mock-service-worker)   


## Aula 1 - Conheça os tipos de testes
### Objetivos
* Conceituar teste unitário;
* Definir teste integrado;
* Descrever teste E2E.

### Anotações
Criamos testes para validar o funcionamento da aplicação e garantir que alterações não afetem outras partes do código.

Testes unitários — forma de validação de uma funcionalidade isolada; enquanto os testes estiverem aprovados, a funcionalidade continuará funcionando.

Vamos utilizar o Jest e o React Testing Library para escrever esses testes.

Tipos de teste:
* Teste unitário — testamos uma parte isolada do código.
  Exemplo: um botão. No React, podemos testar o componente isoladamente.

* Teste de integração — testamos uma parte maior do código.
  Exemplo: quando testamos todos os componentes de um formulário (inputs, labels e botões) para verificar se tudo funciona como deveria.

* Teste end-to-end (E2E) — testa o comportamento do usuário; o sistema como um todo.
  Esses testes simulam a utilização da aplicação por um usuário.

Neste módulo vamos estudar os dois primeiros tipos de teste (unitário e de integração). 

## Aula 2 - Escreva os primeiros testes
### Objetivos
* Conhecer o framework Jest;
* Instalar o Jest no terminal e no VScode;
* Usar plugins para realizar testes;
* Testar variáveis e arrays.

### Anotações
Criamos uma pasta para trabalhar com o Jest.

1. Inicializar o projeto:
   - npm init --yes

2. Instalar o Jest como dependência de desenvolvimento:
   - npm i -D jest

3. Atualizar o package.json para rodar o Jest:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

4. Arquivos:
   - Crie um arquivo JavaScript chamado calculadora.js com as funções aritméticas.
   - Crie o arquivo de testes: calculadora.test.js ou calculadora.spec.js (os dois padrões são aceitos — siga o padrão do projeto).

5. Exportar/importar:
   - Em CommonJS (JS): use module.exports = { ... } e require('./calculadora') nos testes.
   - Em ESM: use export/ import e configure o Jest para ESM se necessário.

6. Exemplo de teste:
   ```js
   // calculadora.test.js
   const calc = require('./calculadora');

   test('Somar 2 + 2 deve resultar em 4', () => {
     const minhaSoma = calc.soma(2, 2);
     expect(minhaSoma).toBe(4);
   });
   ```

7. Agrupando testes:
   - Use describe() para agrupar testes relacionados:
   ```js
   describe('Testes para a calculadora', () => {
     test('Somar 2 e 2 deve resultar em 4', () => {
       expect(calc.soma(2, 2)).toBe(4);
     });

     test('Multiplicar 3 e 3 deve resultar em 9', () => {
       expect(calc.multiplicacao(3, 3)).toBe(9);
     });
   });
   ```

8. Executar os testes:
   - npm run test

9. Autocomplete e TypeScript:
   - Para projetos TypeScript, instale as definições: npm i -D @types/jest

10. Matchers comuns:
    - toBe, toEqual, toContain, toBeTruthy, toBeFalsy, toHaveLength

Para mais informações, consulte a documentação: https://jestjs.io/docs/getting-started
## Aula 3 - Explore testes no React
### Objetivos
* Relacionar o teste jest no react;
* Conhecer a Testing Library;
* Executar script de testes no terminal;
* Aplicar funções, métodos e atributos para a realização dos testes;
* Realizar a cobertura de testes.

### Anotações
Iniciar projeto react com o `npm create vite@latest`, eu estava fazendo o projeto com o vite, mas o professor estava fazendo com o create-react-app, acabei optando por refazer do começo para ficar igual como está na aula os comandos.

Uma das coisas ruins dessa aula é que ela está bastante desatualizada, seria bom se tivesse sendo feito com o vite ou outro mais moderno. 

Nós apagamos a estrutura inical do projeto e constriomos uma lista de tarefas com o useState, depois disso começamos a fazer os testes no app.test.js





## Aula 4 - Faça testes com React e Redux
### Objetivos


### Anotações


## Aula 5 - Teste o componente de produto
### Objetivos


### Anotações


## Aula 6 - Conheça o Mock Service Worker
### Objetivos


### Anotações

