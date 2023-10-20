#language:pt
Funcionalidade: Elegibilidade contratos
  Essa Funcionalidade valida a regra e o comportamento da aplicação quando o envio das requests conter o codigo do produto de oferta e produto de origem validos,
  retornando assim o indicador_elegibilidade_cliente com status "S", caso contrário será retornado "N".
  - Regras:
    Se todas as condições forem verdadeiras:
    indicador cliente correntista = “S”
    indicador conta ativa = “S”
    código tipo produto oferta está entre (“AB”, “CB”, “DC”)
    código tipo produto oferta produto oferta não está entre (“CC”, “CD”, “AC”)
    codigo produto origem está entre (1234, 5678, 7722, 5564, 2286, 5561)
    Como resultado o indicador_elegibilidade_cliente será "S"

  @Api-Elegibilidade-Contrato
  Esquema do Cenário: 1 - Elegibilidade - contrato com codigo produto de oferta e origem validos
    Dado que obtenho os registros de um unino contrato validos "<indicador_conta_ativa>" "<indicador_cliente_correntista>" "<codigo_tipo_produto_oferta>" <codigo_produto_origem>
    Quando for realizado o envio desse contrato através de um payload
    Então serei informado sobre o status atual atraves do indicador de elegibilidade do cliente "<indicador_elegibilidade_cliente>"
    E retornando o status code 201 apos o envio da request
    Exemplos:
      | indicador_conta_ativa | indicador_cliente_correntista | codigo_tipo_produto_oferta | codigo_produto_origem | indicador_elegibilidade_cliente |
      | S                     | S                             | AB                         | 1234                  | S                               |
      | S                     | S                             | CB                         | 1234                  | S                               |
      | S                     | S                             | DC                         | 1234                  | S                               |
      | S                     | S                             | AB                         | 5678                  | S                               |
      | S                     | S                             | CB                         | 5678                  | S                               |
      | S                     | S                             | DC                         | 5678                  | S                               |
      | S                     | S                             | AB                         | 7722                  | S                               |
      | S                     | S                             | CB                         | 7722                  | S                               |
      | S                     | S                             | DC                         | 7722                  | S                               |
      | S                     | S                             | AB                         | 5564                  | S                               |
      | S                     | S                             | CB                         | 5564                  | S                               |
      | S                     | S                             | DC                         | 5564                  | S                               |
      | S                     | S                             | AB                         | 2286                  | S                               |
      | S                     | S                             | CB                         | 2286                  | S                               |
      | S                     | S                             | DC                         | 2286                  | S                               |
      | S                     | S                             | AB                         | 5561                  | S                               |
      | S                     | S                             | CB                         | 5561                  | S                               |
      | S                     | S                             | DC                         | 5561                  | S                               |

  @Api-Elegibilidade-Contrato
  Esquema do Cenario: 2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos
    Dado que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem "<indicador_conta_ativa>" "<indicador_cliente_correntista>" "<codigo_tipo_produto_oferta>" <codigo_produto_origem>
    Quando for realizado o envio desse contrato através de um payload
    Então serei informado sobre o status atual atraves do indicador de elegibilidade do cliente "<indicador_elegibilidade_cliente>"
    E retornando o status code 404 apos o envio da request
    Exemplos:
      | indicador_conta_ativa | indicador_cliente_correntista | codigo_tipo_produto_oferta | codigo_produto_origem | indicador_elegibilidade_cliente |
      | S                     | S                             | AC                         | 1010                  | N                               |
      | S                     | S                             | CD                         | 1010                  | N                               |
      | S                     | S                             | CC                         | 1010                  | N                               |
      | S                     | S                             | AC                         | 9999                  | N                               |
      | S                     | S                             | CD                         | 9999                  | N                               |
      | S                     | S                             | CC                         | 9999                  | N                               |
      | S                     | S                             | AC                         | 8888                  | N                               |
      | S                     | S                             | CD                         | 8888                  | N                               |
      | S                     | S                             | CC                         | 8888                  | N                               |
      | S                     | S                             | AC                         | 7777                  | N                               |
      | S                     | S                             | CD                         | 7777                  | N                               |
      | S                     | S                             | CC                         | 7777                  | N                               |

  @Api-Elegibilidade-Contrato
  Esquema do Cenario: 3 - Status indicador de conta inativo
    Dado que obtenho os registros de um unico contrato com a conta inativa "<indicador_conta_ativa>" "<indicador_cliente_correntista>" "<codigo_tipo_produto_oferta>" <codigo_produto_origem>
    Quando for realizado o envio desse contrato através de um payload
    Então serei informado sobre o status atual atraves do indicador de elegibilidade do cliente "<indicador_elegibilidade_cliente>"
    E retornando o status code 404 apos o envio da request
    Exemplos:
      | indicador_conta_ativa | indicador_cliente_correntista | codigo_tipo_produto_oferta | codigo_produto_origem | indicador_elegibilidade_cliente |
      | N                     | S                             | DC                         | 5564                  | N                               |

  @Api-Elegibilidade-Contrato
  Esquema do Cenario: 4 - Status indicador cliente correntista inativo
    Dado que obtenho os registros de um unico contrato com o indicador do cliente correntista inativo "<indicador_conta_ativa>" "<indicador_cliente_correntista>" "<codigo_tipo_produto_oferta>" <codigo_produto_origem>
    Quando for realizado o envio desse contrato através de um payload
    Então serei informado sobre o status atual atraves do indicador de elegibilidade do cliente "<indicador_elegibilidade_cliente>"
    E retornando o status code 404 apos o envio da request
    Exemplos:
      | indicador_conta_ativa | indicador_cliente_correntista | codigo_tipo_produto_oferta | codigo_produto_origem | indicador_elegibilidade_cliente |
      | S                     | N                             | AB                         | 2286                  | N                               |
