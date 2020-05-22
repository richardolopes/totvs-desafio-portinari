# Certificados
* HTTP: Entendendo a web por baixo dos panos - https://cursos.alura.com.br/user/richard-lopes0/course/http-fundamentos/certificate
* HTML5 e CSS3 Parte 1: Primeira página da web - https://cursos.alura.com.br/user/richard-lopes0/course/html5-css3-primeiros-passos/certificate
* HTML5 e CSS3 Parte 2: Posicionamento, listas e navegação - https://cursos.alura.com.br/user/richard-lopes0/course/html5-css3-posicionamento-listas-navegacao/certificate
* JavaScript: Programando na linguagem da web - https://cursos.alura.com.br/user/richard-lopes0/course/javascript-programando-na-linguagem-web/certificate
* JavaScript avançado I: ES6, orientação a objetos e padrões de projetos - https://cursos.alura.com.br/user/richard-lopes0/course/javascript-es6-orientacao-a-objetos-parte-1/certificate

# Para iniciar o projeto digite os seguintes comandos:
* npm install
* ng serve

# Abrir um segundo terminal e digitar:
* npm run apis

# Abrir a página http://localhost:4200/login
* Usuário: a@a
* Senha: 1

# Desafio Portinari:
- [x] Realizar login 
- [x] Criar uma tarefa
- [x] Lista de tarefas
- [x] Marcar a tarefa como concluida
- [x] Histórico de tarefas
- [ ] Barra de busca 
- [x] Excluir tarefas
- [x] Editar tarefas


# Orientações do desafio:
# Desafio Portinari - 1ºsemetre 2020

A TOTVS quer lançar um site de lista de tarefas. Foi feita uma planning com o time o qual você é integrante e a sprint começou. Suas tarefas são as seguintes:

## Eu, enquanto usuário, quero poder fazer login e senha na aplicação para visualizar as minhas tarefas

A página de login deve respeitar as seguintes características:

* Validação do formato de e-mail.
* Senha não deve ficar visível enquanto digitada.
* Deve validar o acesso através da API fake.

Bônus:

Inserir uma opção "Lembrar-me" que, quando marcada no momento do login, consiste as informações do usuário para que ele não precise fazer login toda vez que a tela recarregar.

## Eu, enquanto usuário, dado que já estou autenticado no sistema, quero poder visualizar uma lista de tarefas pendentes criadas por mim

As tarefas pendentes são todas as tarefas criadas por mim que ainda não foram concluídas.

* Preciso conseguir buscar uma tarefa pelo nome, categoria ou data limite
* Preciso conseguir visualizar o nome da tarefa
* Preciso conseguir visualizar a data limite da tarefa
* Preciso conseguir visualizar se a tarefa está atrasada ou não
* Preciso conseguir visualizar a categoria da tarefa
* As tarefas que são para hoje ou estão atrasadas, devem ser exibidas com destaque das demais tarefas

Bônus:

Caso eu tenha mais que 10 tarefas pendentes, mostrar apenas as 10 mais antigas e exibir uma opção de "Carregar Mais", para evitar sobrecarga no servidor. (Paginação)

## Eu, enquanto usuário, dado que já estou autenticado no sistema, quero poder criar uma nova tarefa em determinada categoria, e definir uma data limite para sua execução

As categorias podem ser "hard-coded", não é necessário um cadastro específico para elas. Mas tenha em mente que esta informação é usada em diversas partes do sistema.

É necessário haver ao menos duas categorias.

* Preciso conseguir colocar um nome para a tarefa, este nome não pode ser vazio
* Preciso conseguir colocar um deadline para a tarefa, esta data não pode ser no passado
* Preciso conseguir definir uma categoria para a tarefa, selecionando de uma lista pré-existente de categorias

## Eu, enquanto usuário, dado que já estou autenticado no sistema e já tenho tarefas criadas, quero poder marcar uma tarefa pendente como concluída

Ao marcar uma tarefa pendente como concluída, ele deve sumir da minha lista de tarefas pendentes. Eu posso concluir uma tarefa no passado ou no futuro, mas esta informação deve ser mantida como histórico.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e já tenho tarefas concluídas, quero poder visualizar um histórico das tarefas concluídas

O histórico deve ter as mesmas caracterísitcas que a lista de tarefas pendentes (busca, filtro, dados), com os seguintes complementos:

* Devo conseguir visualizar a data prevista e a data em que a tarefa foi realizada.
* A lista não deve mostrar tarefas pendentes

## Eu, enquanto usuário, dado que já estou autenticado no sistema e já tenho tarefas concluídas, quero poder excluir tarefas do meu histórico

Somente tarefas concluídas podem ser excluídas, e deve apresentar uma confirmação ao excluir, questionando se tenho certeza desta ação.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e tenho tarefas pendentes, quero poder alterar uma tarefa pendente, alterando seu prazo, categoria ou nome

Posso alterar apenas as tarefas pendentes.

Ao alterar o prazo, não deve ser permitido utilizar uma data no passado.



## Algumas orientações:

* Utilize uma fake API (http://www.fabricadecodigo.com/json-server/), para simular integração com um servidor REST.
* Seja criativo no layout de suas telas, mas sempre que possível use como base o Guideline de Interfaces da TOTVS.
* O desafio é sobre interação, não precisa fazer tudo, basta ir fazendo os pedaços que se sente mais confortável e entregando aos poucos.
* Organize seus commits. Sua utilização do git faz parte do desafio.
