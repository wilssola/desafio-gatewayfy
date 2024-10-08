# Bem-vindo ao repositório do BotAI!

- 🤖 [BotAI](https://botai.tecwolf.com.br)

## 📝 Sobre o Projeto

O BotAI é uma plataforma de automação de atendimento ao cliente que utiliza inteligência artificial para automatizar as
interações com os usuários. Através de um chatbot, os usuários podem obter respostas rápidas e precisas para suas
dúvidas ou solicitações, melhorando a experiência do cliente e reduzindo o tempo de resposta.

Este projeto foi desenvolvido como um desafio de vaga na [Gatewayfy](https://gatewayfy.com) e foi idealizado por mim,
[Wilson Oliveira Lima](https://github.com/wilssola). Como o desafio se tratava de desenvolver uma solução SaaS para um
problema do cotidiano, decidi criar uma plataforma de automação de atendimento ao cliente utilizando inteligência
artificial e que seja barata, eficiente e personalizável.

Como o projeto foi desenvolvido em um curto período de tempo, algumas funcionalidades ainda estão em desenvolvimento,
sendo assimo projeto ainda não está pronto para produção. No entanto, a base do projeto está pronta e funcional,
permitindo a adição de novas funcionalidades e melhorias no futuro. Além disso o projeto é completamente escalável,
permitindo a adição de novosrecursos e integrações de forma simples e eficiente.

## 📦 Funcionalidades

- 🌐 Automatização de atendimento ao cliente
- 🤖 Chatbot com inteligência artificial
- 📧 Visualização de conversas e interações em tempo real (em desenvolvimento)
- 📊 Análise de dados e métricas (em fase de planejamento)
- 📱 Suporte a outras plataformas de mensagens além do WhatsApp (em fase de planejamento)

## ❓ Como Funciona

Para o projeto funcionar de maneira eficiente e escalável, fazemos bastante uso do Redis para cacheamento de respostas e
bloqueios distribuídos. No back-end atualmente temos um Manager responsável por gerenciar as sessões de cada Bot, além
disso temos o Express com Remix para servir a aplicação e interagir com o banco de dados relacional. As credenciais de
autenticação de cada Bot são armazenadas em um banco de dados não relacional, devido a flexibilidade que ele oferece.

## 📚 Bibliotecas Principais

Este projeto utiliza várias bibliotecas importantes para garantir sua funcionalidade e desempenho. Aqui estão algumas
das principais:

- **🌐 Remix**: Framework full-stack para React que facilita a construção de aplicações web com renderização no servidor
  e no cliente.
- **⚛️ React**: Utilizado para construir a interface do usuário de forma declarativa e eficiente.
- **🟢 Node.js**: Plataforma de execução para o servidor, permitindo a construção de aplicações escaláveis.
- **🔗 Prisma**: ORM utilizado para interagir com o banco de dados de forma segura e eficiente.
- **🚀 Express**: Framework para Node.js que facilita a criação de APIs e manipulação de requisições HTTP.
- **💬 Socket.io**: Biblioteca para comunicação em tempo real entre o servidor e o cliente.
- **🧠 Redis**: Utilizado para armazenamento em cache e gerenciamento de sessões, melhorando a performance da aplicação.
- **🐘 PostgreSQL**: Banco de dados relacional utilizado para armazenar dados de forma estruturada e eficiente.
- **🍃 MongoDB**: Banco de dados NoSQL utilizado para armazenar dados de forma flexível e escalável.
- **🎨 TailwindCSS**: Framework de CSS utilitário para estilização rápida e eficiente da interface.
- **🔷 TypeScript**: Superset de JavaScript que adiciona tipagem estática, ajudando a evitar erros e melhorar a
  manutenção do código.
- **⚡ Vite**: Ferramenta de build rápida e moderna para projetos front-end.
- **🔍 Zod**: Biblioteca de validação de esquemas para TypeScript e JavaScript, garantindo a integridade dos dados.
- **🧪 Jest**: Framework de testes utilizado para garantir a qualidade e funcionalidade do código.
- **☁️ Fly.io**: Plataforma de hospedagem recomendada para deploy da aplicação, com suporte a Docker e integração com
  PostgreSQL e Redis.

Essas bibliotecas foram escolhidas para garantir que o projeto seja robusto, escalável e fácil de manter.

## Requisitos

Esse projeto faz uso de várias tecnologias e serviços, então é necessário ter algumas coisas instaladas e configuradas.

Para obter as chaves de API do hCaptcha, crie uma conta e siga as instruções
do [hCaptcha](https://dashboard.hcaptcha.com/).

Para obter as chaves de API do OpenAI, siga as instruções da [OpenAI](https://openai.com/).

- Obs.: A API do OpenAI é paga, então é necessário ter uma conta com créditos disponíveis. Sendo assim, recomendamos o
  uso do [Groq](https://console.groq.com/).

Para obter as chaves de API do Sentry, crie uma conta e siga as instruções do [Sentry](https://sentry.io/).

Para hospedar um banco de dados MongoDB, recomendamos o uso do [MongoDB Atlas](https://mongodb.com/cloud/atlas/).

Para hospedar um banco de dados PostgreSQL, recomendamos o uso
do [Fly](https://fly.io/docs/postgres/connecting/connecting-external/) ou do [Supabase](https://supabase.com/).

Para hospedar um banco de dados Redis, recomendamos o uso do [Fly](https://fly.io/docs/upstash/redis/) que facilita a
criação de uma instância no [Upstash](https://upstash.com/).

Para hospedar a aplicação, recomendamos o uso do [Fly](https://fly.io/).

Para o envio de e-mails, você pode usar qualquer provedor de mail que suporte o SMTP.

- Obs.: Caso não defina nenhum provedor de e-mail, o envio de e-mails não será possível, mas mesmo assim a aplicação
  funcionará normalmente, na teoria, pois a verificação de email será desativada (não testado).

## 🛠️ Modo de Desenvolvimento

Primeiro, instale as dependências:

```sh
npm install
```

Defina todas as variáveis de ambiente em `.env.default` e salve em `.env`.
Depois disso, inicie a aplicação no modo de desenvolvimento:

```sh
npm run dev
```

## 🚀 Modo de Produção

Inicie a aplicação no modo de produção:

```sh
npm start
```

Agora você precisará escolher um host para subir a aplicação.

Recomendamos o uso do [Fly](https://fly.io/).

## 🌍 Deploy no Fly (Recomendado)

Antes de tudo você precisa instalar o [Fly CTL](https://fly.io/docs/getting-started/installing-flyctl/).

Para criar um novo app no Fly, sem fazer o deploy da aplicação logo em seguida, use o seguinte comando:

```sh
flyctl launch --no-deploy
```

Para configurar as variáveis de ambiente no Fly, faça uso do comando `flyctl secrets set`:

```sh
flyctl secrets set APP_URL="0.0.0.0"
flyctl secrets set PORT=3000
flyctl secrets set APP_DOMAIN=""

flyctl secrets set DATABASE_URL=""
flyctl secrets set MONGO_URI=""
flyctl secrets set REDIS_URL=""

flyctl secrets set SESSION_SECRET=""

flyctl secrets set HCAPTCHA_SITEKEY=""
flyctl secrets set HCAPTCHA_SECRET=""

flyctl secrets set SMTP_HOST=""
flyctl secrets set SMTP_PORT=587
flyctl secrets set MAIL_USER=""
flyctl secrets set MAIL_PASS=""

flyctl secrets set SENTRY_DSN=""
flyctl secrets set SENTRY_AUTH_TOKEN=""

flyctl secrets set OPENAI_BASE_URL="https://api.groq.com/openai/v1"
flyctl secrets set OPENAI_MODEL="llama3-8b-8192"
flyctl secrets set OPENAI_API_KEY=""
```

Para fazer o deploy da aplicação no Fly, usando uma build do Docker feita localmente na sua máquina, use o comando:

```sh
fly deploy --local-only --ha=false
```

Para fazer o deploy da aplicação no Fly, usando uma build do Docker feita na nuvem por uma máquina do Fly, use o
comando:

```sh
fly deploy --ha=false
```

### 🛠️ Configurando o PostgresSQL [(Saiba mais)](https://fly.io/docs/postgres/connecting/connecting-external/)

Para alocar um IP público e permitir conexões externas com o PostgresSQL, você pode usar o comando
`fly ips allocate-v6`:

```sh
fly ips allocate-v6 --app <pg-app-name>
```

Para se conectar bastar usar a URL no seguinte padrão:

```
DATABASE_URL="postgres://<username>:<password>@<pg-app-name>.fly.dev:5432/<app-name>?sslmode=require"
```

Caso queira se conectar diretamente ao PostgresSQL no Fly, você pode usar o comando `fly pg connect`:

```sh
fly pg connect --app <pg-app-name>
```

Ou, caso tenha o PostgresSQL instalado na sua máquina, você pode se conectar localmente ao PostgresSQL do Fly.
Para isso é necessário rodar um proxy localmente, usando o comando `fly proxy`:

```sh
fly proxy 5432:5432 --app <pg-app-name>
```

E então, você pode se conectar ao PostgresSQL localmente, usando a URL no seguinte padrão ou o comando `psql`:

```
DATABASE_URL="postgres://<username>:<password>@localhost:5432/<app-name>"
psql "sslmode=require host=<pg-app-name>.fly.dev dbname=<db-name> user=<username> password=<password>"
```

### 🛠️ Configurando o Realtime (Prisma Pulse) [(Saiba mais)](https://www.prisma.io/docs/pulse/database-setup/general-database-instructions)

- Obs.: No momento, o Prisma Pulse não é mais necessário para o funcionamento do projeto.

Para usar o realtime no PostgresSQL funcionar corretamente, por exemplo fazendo o uso Prisma Pulse, é necessário
configurar o PostgresSQL no Fly.
Primeiro, verifique se o `wal_level` do PostgresSQL no Fly está configurado para `logical`:

```sh
fly postgres config show --app <pg-app-name>
```

Caso o `wal_level` do PostgresSQL no Fly não esteja configurado para `logical`, faça a alteração:

```sh
fly postgres config update --wal-level logical --app <pg-app-name>
```

### 🛠️ Configurando o Redis [(Saiba mais)](https://fly.io/docs/upstash/redis/)

Para criar um novo Redis no Fly, use o seguinte comando:

```sh
fly redis create
```

Para se conectar bastar usar a URL no seguinte padrão:

```
redis://<user>:<password>@fly-<redis-app-name>.upstash.io:6379
```

Para acessar o Redis localmente, você pode usar o comando `fly proxy`:

```sh
fly redis proxy
```

E então, você pode se conectar ao Redis localmente, usando a URL no seguinte padrão:

```
REDIS_URL="redis://<user>:<password>@localhost:16379"
```

## 🌍 Deploy na Vercel (Não recomendado)

Para fazer um deploy na Vercel, você precisa instalar o CLI da Vercel:

```sh
npm i -g vercel
```

E então, você pode fazer o login na CLI da Vercel e em seguida o deploy usando:

```sh
vercel
```

O CLI vai perguntar se desejar alterar os comandos do projeto, aceite e defina o comando de build para:

```sh
npm run db-generate && npm run build
```

Faça o mesmo para o comando de dev, definindo como:

```sh
npm run dev
```

Depois disso defina as variáveis de ambiente no painel da Vercel em:

```
https://vercel.com/<org-name>/<app-name>/settings/environment-variables
```

### 🛠️ Configurando o PostgresSQL

Como a Vercel não oferece soluções de banco de dados, você pode usar o [Supabase](https://supabase.com/).

Basta criar um projeto e configurar o banco de dados, e então você pode usar a URL de conexão no seguinte padrão:

```
DATABASE_URL="postgres://<user>:<password>@<project-name>.supabase.co:5432/<db-name>"
```

### 🛠️ Configurando o Redis

Como a Vercel não oferece soluções de chave-valor, você pode usar o [Upstash](https://upstash.com/).

Basta criar um projeto e então você pode usar a URL de conexão no seguinte padrão:

```
REDIS_URL="redis://<user>:<password>@<project-name>.upstash.io:6379"
```

### 🛠️ DIY

Se você está familiarizado com o deploy de aplicações Node, o servidor de aplicativos Remix embutido está pronto para
produção.

Certifique-se de fazer o deploy do output do comando `npm run build`

- `build/server`
- `build/client`

- Obs.: O remix não vai "compilar" o back-end do Bot, então você precisa fazer isso manualmente.
