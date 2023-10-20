#language:pt
Funcionalidade: Elegibilidade de multiplos contratos
  Essa Funcionalidade valida a regra e o comportamento da aplicação quando o envio da requests conter multiplos contratos.
  - Regras:
    Se todas as condições forem verdadeiras:
    indicador cliente correntista = “S”
    indicador conta ativa = “S”
    código tipo produto oferta está entre (“AB”, “CB”, “DC”)
    código tipo produto oferta produto oferta não está entre (“CC”, “CD”, “AC”)
    codigo produto origem está entre (1234, 5678, 7722, 5564, 2286, 5561)
    Como resultado o indicador_elegibilidade_cliente será "S"

  @Api-Elegibilidade-Contrato
  Esquema do Cenário: Validar regra para multiplos contratos - Obter Status de Elegibilidade
    Dado que obtenho os registros do primeiro contrato "<indicador_conta_ativa_1>" "<indicador_cliente_correntista_1>" "<codigo_tipo_produto_oferta_1>" <codigo_produto_origem_1>
    E obtenho os registros do segundo contrato "<indicador_conta_ativa_2>" "<indicador_cliente_correntista_2>" "<codigo_tipo_produto_oferta_2>" <codigo_produto_origem_2>
    E obtenho os registros do terceito contrato "<indicador_conta_ativa_3>" "<indicador_cliente_correntista_3>" "<codigo_tipo_produto_oferta_3>" <codigo_produto_origem_3>
    Quando for realizado o envio desses contratos através de um payload valido
    Entao serei informado sobre o status do indicador de elegibilidade do cliente "<indicador_elegibilidade_cliente>"
    E retornando o status code apos o envio da request <status_code>
    Exemplos:
      | indicador_conta_ativa_1 | indicador_cliente_correntista_1 | codigo_tipo_produto_oferta_1 | codigo_produto_origem_1 | indicador_conta_ativa_2 | indicador_cliente_correntista_2 | codigo_tipo_produto_oferta_2 | codigo_produto_origem_2 | indicador_conta_ativa_3 | indicador_cliente_correntista_3 | codigo_tipo_produto_oferta_3 | codigo_produto_origem_3 | indicador_elegibilidade_cliente |status_code|
      | S                       | S                               | AC                           | 8888                    | S                       | S                               | AB                           | 2286                    | S                       | S                               | CB                           | 5561                    | N                               |404        |
      | S                       | S                               | AB                           | 2286                    | S                       | S                               | CB                           | 5561                    | S                       | S                               | CC                           | 5555                    | N                               |404        |
      | S                       | S                               | CC                           | 5555                    | S                       | S                               | CD                           | 7777                    | S                       | S                               | AC                           | 8888                    | N                               |404        |
      | S                       | S                               | AB                           | 1234                    | S                       | S                               | CB                           | 5678                    | S                       | S                               | DC                           | 2286                    | S                               |201        |
      | S                       | S                               | CB                           | 5678                    | S                       | S                               | DC                           | 7722                    | S                       | S                               | CB                           | 5561                    | S                               |201        |
