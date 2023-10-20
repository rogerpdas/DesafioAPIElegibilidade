# Desafio Itaú

## Sobre
Abaixo, foi adicionado algumas instruções de execução do projeto, pois o mesmo possui dados mocados para os testes.
Referente ao desafio de questionamento esta localizado mais abaixo na documentação.

O projeto foi criado e seguindo os critérios definidos:

**1.** Realizar a modelagem do teste utilizando BDD

**2.** Detalhar os testes que vão ser automatizados

**3.** Automatizar os testes utilizando Java (11+) + Maven + Junit + Cucumber

**4.** Analisar a story e realizar questionamentos que podem contribuir para o entendimento da mesma e ajudar na sua modelagem

### Pré-requisitos:
- Caso queira executar o teste do projeto com dados mockados, será necessário o uso do Docker e instalado em sua maquina local.

### Instalação
- Baixe o [Docker](https://docs.docker.com/desktop/windows/install/), em caso de executar o teste local.

### Uso
Dentro do projeto em sua pasta raiz, contem a pasta (__files) e (mappings) que são utilizados na execução dos testes com os dados mockados através do [Wiremock](https://wiremock.org/). 
Estou utilizando um arquivo **docker-compose.yaml** que tambem se encontra na raiz do proejeto.

- Para executar a massa de dados mockado:
1. Abra um terminal e aponte o caminho para a localização do **docker-compose.yaml**.
2. Execute o comando **docker-compose up -d** para inicializar o serviço do Wiremock.
3. Para finalizar **docker-compose down**, serviço será encerrado.

Se tudo estiver conforme o esperado, o docker retorna a mensagem **done**, isso significa que o ambiente está apto para uso.

![image](https://github.com/rogerpdas/DesafioAPIElegibilidade/assets/50201131/ed9cea83-b37a-4026-885e-3e0d96c5da2d)

Caso queira executar um pré-teste, abra a ferramenta desejada e realize o envio request seguir:

```
curl --location 'http://localhost:8080/1.0/elegibilidade_cliente' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data '{
   "elegibilidade_cliente_entrada":{
      "contratos":[
         {
            "indicador_conta_ativa":"S",
            "indicador_cliente_correntista":"S",
            "codigo_tipo_produto_oferta":"DC",
            "codigo_produto_origem":5561
         }
      ]
   }
}'
```

Será apresentado como resultado:
```
{
    "elegibilidade_cliente_saida": {
        "indicador_elegibilidade_cliente": "S"
    }
}
```

Exemplo realizando o envio da request via POSTMAN:

![image](https://github.com/rogerpdas/DesafioAPIElegibilidade/assets/50201131/a64451ab-fa88-4b91-a5ee-553cbaaeb069)

Observação: No projeto em **(package com.itau.api.elegibilidade.core/Constantes)** a URL_Base está definida como localhost, justamente para facilitar na execução, caso necessário tambem inserir um comentário.
 
### Desafio - Questionários Story
Analisando o User Story, tenho várias dúvidas sobre o produto, porém estou seguindo no princípio, onde a tela de Login/Cadastro são existentes, não contemplando apenas a validação de senha.
```
Story:
Como Product Analytics
Gostaria de ter um validador de senha
Para não permitir que nossos clientes cadastrem senhas inválidas
```

- Resumo da análise:
Analisando o User Story, tenho várias dúvidas sobre o produto, porém estou seguindo no princípio, onde a tela de Login/Cadastro são existentes, não contemplando apenas a validação de senha.

- Lista de questionários para análise da User Story:
1. Qual são os critérios de aceite, para considerarmos o produto como pronto?
2. Existe algum protótipo (figma) de forma que apresente os fluxos, telas, comportamento de cada componete/evento?

Caso nenhumas das questões anteriores sejam válidas, será necessário fazer um refinamento detalhado sobre o produto.

- Questionário detalhado:

1. No momento em que o cliente for cadastrar a senha, quais as validações de segurança precisam implementar?
Exemplo:
- Qual o número mínimo de caracteres para essa senha?
- Precisa ter pelo menos 1 letra maiúscula?
- Precisa ter pelo menos 1 número?
- Precisa ter pelo menos 1 caractere especial?
- Precisa ter pelo menos 1 letra minúscula?
- Não permitir 4 caracteres repetido na mesma sequência?

2. Caso o usuário não informe a senha, o botão de submit terá qual comportamento?
Exemplo:
- O botão (Cadastrar) ficará habilitado?
- E caso o cliente efetue o (Click), qual será o evento disparado quando o usuário não informa a senha?
- Deve ser apresentado alguma mensagem em tela?
- Qual mensagem?
- O botão (Cadastrar) ficará desabilitado, até que o usuário informe a senha atendendo os critérios de segurança?
- A senha deve ser mascarada?
- Precisa ser adicionado alguma opção para possibilitar que os clientes visualizem a senha?
- Precisamos adicionar campo para confirmação de senha?

#### Referentes as melhorias no processo:

- Precisamos definir o DOR (Definition of Ready/definição de preparado) contendo a listagem como:
```
- As tarefas que serão desenvolvidas em checklist
- Histórias escritas em BDD
- Critérios de aceite de forma detalhada
```


- Definir DOD (Definition of Done/definição de feito):
Será considerado como pronto, a partir que a listagem esteja concluída, como exemplo:
```
- Atividades concluídas
- Código validado e revisado
- Teste executados e validados conforme os critérios de aceite
- Conclusão dos testes automatizados e integrados em (pipeline/CICD).
```

