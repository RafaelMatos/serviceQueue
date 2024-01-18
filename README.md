# Service Queue🏥

Projeto em desenvolvimento como proposta de desafio da HigIA;



<!-- <img src='./src/assets/tela.gif' alt='gif da tela da aplicação Ignite Call'> -->

<!-- <details>
    <summary>Responsivo</summary>
    <img src='./src/assets/responsive.png' alt='print da tela da aplicação Ignite Call'>
</details> -->

## Tecnologias usadas ⚙

- Next.js
- React.js
- Typescript
- Zod
- React Hook Form
- Prisma
- Axios
<!-- - Ignite-ui -->
<!-- - Nookies -->
<!-- - NextAuth.js
- DayJs
- Google Apis -->

## Atualizações 🔃

  <!-- <details>
    <summary>Histórico</summary>

      - Adicionado a configuração pageExtensions do Next.js;

      - Começando a construção do componente Home;

      - Adicionando componente ClaimUsernameForm à Home;

      - Adicionada validação com zod em ClaimUsernameForm;

      - Construindo página de registro;

      - Salvando usuário no banco utilizando o Prisma;

      - Utilizando o Nookies para pegar nos cookies os dados de usuário salvo;

      - Construindo página de conexão com Google Calendar;

      - Fazendo autenticação oAuth2 para acessar APIs do Google  utilizando o NextAuth.js;

      - Criado um novo Prisma Adapter para o NextAuth;

      - Finalizado autenticação com Google, com permissão ao Calendar.

      - Criada página de intervalo de horários;

      - Adicionada validação do checkbox;

      - Adicionada validação do input de horario inicial e final;

      - Salvando intervalo de horário em banco de dados;

      - Criada pagina de atualização do usuário;

      - Salvando bio do usuário no banco de dados.

    
</details> -->

  - Criando página de agendamento;

  - Tela de acesso de funcionário e paciente
  - Cadastro de paciente
  - Confirmação de consulta
  - Listagem de consultas
  - Acesso de funcionario pelo CPF
  - Criado layout padrão da aplicação
  - Redefinindo páginas de funcionário


  <!-- <img src='./src/assets/update.gif' alt='gif da tela da aplicação Ignite Call'> -->
  
  

## Como utilizar

- Clone o projeto do repositório

```
git clone https://github.com/RafaelMatos/serviceQueue
```

- Acesse a pasta do projeto

```
cd serviceQueue
```

- Instale as dependências

```
npm install
```
- Criar arquivo .env com as chaves necessarias( seguir arquivo .envExample)

- Inicializa o Prisma( Usar banco de dados de sua preferencia, no exemplo é usado o mysql)

```
npx prisma init --datasource-provider mysql
```
- Realiza as migrations do Prisma

```
npx prisma migrate dev --name init
```

- Execute o projeto

```
npm run dev
```

- Acesse no navegador o endereço indicado no terminal
