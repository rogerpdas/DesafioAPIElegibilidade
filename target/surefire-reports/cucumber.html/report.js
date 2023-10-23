$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ElegibilidadeCliente.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Elegibilidade contratos",
  "description": "Essa Funcionalidade valida a regra e o comportamento da aplicação quando o envio das requests conter o codigo do produto de oferta e produto de origem validos,\r\nretornando assim o indicador_elegibilidade_cliente com status \"S\", caso contrário será retornado \"N\".\r\n- Regras:\r\n  Se todas as condições forem verdadeiras:\r\n  indicador cliente correntista \u003d “S”\r\n  indicador conta ativa \u003d “S”\r\n  código tipo produto oferta está entre (“AB”, “CB”, “DC”)\r\n  código tipo produto oferta produto oferta não está entre (“CC”, “CD”, “AC”)\r\n  codigo produto origem está entre (1234, 5678, 7722, 5564, 2286, 5561)\r\n  Como resultado o indicador_elegibilidade_cliente será \"S\"",
  "id": "elegibilidade-contratos",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"\u003cindicador_conta_ativa\u003e\" \"\u003cindicador_cliente_correntista\u003e\" \"\u003ccodigo_tipo_produto_oferta\u003e\" \u003ccodigo_produto_origem\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"\u003cindicador_elegibilidade_cliente\u003e\"",
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;",
  "rows": [
    {
      "cells": [
        "indicador_conta_ativa",
        "indicador_cliente_correntista",
        "codigo_tipo_produto_oferta",
        "codigo_produto_origem",
        "indicador_elegibilidade_cliente"
      ],
      "line": 21,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;1"
    },
    {
      "cells": [
        "S",
        "S",
        "AB",
        "1234",
        "S"
      ],
      "line": 22,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;2"
    },
    {
      "cells": [
        "S",
        "S",
        "CB",
        "1234",
        "S"
      ],
      "line": 23,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;3"
    },
    {
      "cells": [
        "S",
        "S",
        "DC",
        "1234",
        "S"
      ],
      "line": 24,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;4"
    },
    {
      "cells": [
        "S",
        "S",
        "AB",
        "5678",
        "S"
      ],
      "line": 25,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;5"
    },
    {
      "cells": [
        "S",
        "S",
        "CB",
        "5678",
        "S"
      ],
      "line": 26,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;6"
    },
    {
      "cells": [
        "S",
        "S",
        "DC",
        "5678",
        "S"
      ],
      "line": 27,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;7"
    },
    {
      "cells": [
        "S",
        "S",
        "AB",
        "7722",
        "S"
      ],
      "line": 28,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;8"
    },
    {
      "cells": [
        "S",
        "S",
        "CB",
        "7722",
        "S"
      ],
      "line": 29,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;9"
    },
    {
      "cells": [
        "S",
        "S",
        "DC",
        "7722",
        "S"
      ],
      "line": 30,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;10"
    },
    {
      "cells": [
        "S",
        "S",
        "AB",
        "5564",
        "S"
      ],
      "line": 31,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;11"
    },
    {
      "cells": [
        "S",
        "S",
        "CB",
        "5564",
        "S"
      ],
      "line": 32,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;12"
    },
    {
      "cells": [
        "S",
        "S",
        "DC",
        "5564",
        "S"
      ],
      "line": 33,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;13"
    },
    {
      "cells": [
        "S",
        "S",
        "AB",
        "2286",
        "S"
      ],
      "line": 34,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;14"
    },
    {
      "cells": [
        "S",
        "S",
        "CB",
        "2286",
        "S"
      ],
      "line": 35,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;15"
    },
    {
      "cells": [
        "S",
        "S",
        "DC",
        "2286",
        "S"
      ],
      "line": 36,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;16"
    },
    {
      "cells": [
        "S",
        "S",
        "AB",
        "5561",
        "S"
      ],
      "line": 37,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;17"
    },
    {
      "cells": [
        "S",
        "S",
        "CB",
        "5561",
        "S"
      ],
      "line": 38,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;18"
    },
    {
      "cells": [
        "S",
        "S",
        "DC",
        "5561",
        "S"
      ],
      "line": 39,
      "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;19"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 22,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"AB\" 1234",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "AB",
      "offset": 63
    },
    {
      "val": "1234",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 258211200,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 2391727800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 365911300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 205000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"CB\" 1234",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "CB",
      "offset": 63
    },
    {
      "val": "1234",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 436900,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 50293700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 18914000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 200500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"DC\" 1234",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "DC",
      "offset": 63
    },
    {
      "val": "1234",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 320000,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 47055000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9248200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"AB\" 5678",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "AB",
      "offset": 63
    },
    {
      "val": "5678",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 241700,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 43747500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 7084600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 91500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"CB\" 5678",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "CB",
      "offset": 63
    },
    {
      "val": "5678",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 282300,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 35604800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 8453900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 97600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"DC\" 5678",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "DC",
      "offset": 63
    },
    {
      "val": "5678",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 257700,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 43044700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 11274700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 203300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;8",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"AB\" 7722",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "AB",
      "offset": 63
    },
    {
      "val": "7722",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 429400,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 63871200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 10885600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 130400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;9",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"CB\" 7722",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "CB",
      "offset": 63
    },
    {
      "val": "7722",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 341600,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 66440200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 14281900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 459300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;10",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"DC\" 7722",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "DC",
      "offset": 63
    },
    {
      "val": "7722",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 328200,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 55993500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 15014500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 155500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;11",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"AB\" 5564",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "AB",
      "offset": 63
    },
    {
      "val": "5564",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 333600,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 40120800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 10668400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 120400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;12",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"CB\" 5564",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "CB",
      "offset": 63
    },
    {
      "val": "5564",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 383400,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 58705800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 11613300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 128400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;13",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"DC\" 5564",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "DC",
      "offset": 63
    },
    {
      "val": "5564",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 361700,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 33210000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 12042100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 112300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;14",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"AB\" 2286",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "AB",
      "offset": 63
    },
    {
      "val": "2286",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 300000,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 40181200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 10395400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 103100,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;15",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"CB\" 2286",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "CB",
      "offset": 63
    },
    {
      "val": "2286",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 1584300,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 40235400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 11704900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 151700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;16",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"DC\" 2286",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "DC",
      "offset": 63
    },
    {
      "val": "2286",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 290500,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 35857200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 12953200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 181100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;17",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"AB\" 5561",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "AB",
      "offset": 63
    },
    {
      "val": "5561",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 1045300,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 48730400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 14718700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 510900,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;18",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"CB\" 5561",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "CB",
      "offset": 63
    },
    {
      "val": "5561",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 367100,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 28907000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 11766900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 115700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "1 - Elegibilidade - contrato com codigo produto de oferta e origem validos",
  "description": "",
  "id": "elegibilidade-contratos;1---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-validos;;19",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que obtenho os registros de um unino contrato validos \"S\" \"S\" \"DC\" 5561",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "retornando o status code 201 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 55
    },
    {
      "val": "S",
      "offset": 59
    },
    {
      "val": "DC",
      "offset": 63
    },
    {
      "val": "5561",
      "offset": 67
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoValido(String,String,String,int)"
});
formatter.result({
  "duration": 313300,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 24356700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 11411200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 113300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"\u003cindicador_conta_ativa\u003e\" \"\u003cindicador_cliente_correntista\u003e\" \"\u003ccodigo_tipo_produto_oferta\u003e\" \u003ccodigo_produto_origem\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"\u003cindicador_elegibilidade_cliente\u003e\"",
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;",
  "rows": [
    {
      "cells": [
        "indicador_conta_ativa",
        "indicador_cliente_correntista",
        "codigo_tipo_produto_oferta",
        "codigo_produto_origem",
        "indicador_elegibilidade_cliente"
      ],
      "line": 48,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;1"
    },
    {
      "cells": [
        "S",
        "S",
        "AC",
        "1010",
        "N"
      ],
      "line": 49,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;2"
    },
    {
      "cells": [
        "S",
        "S",
        "CD",
        "1010",
        "N"
      ],
      "line": 50,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;3"
    },
    {
      "cells": [
        "S",
        "S",
        "CC",
        "1010",
        "N"
      ],
      "line": 51,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;4"
    },
    {
      "cells": [
        "S",
        "S",
        "AC",
        "9999",
        "N"
      ],
      "line": 52,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;5"
    },
    {
      "cells": [
        "S",
        "S",
        "CD",
        "9999",
        "N"
      ],
      "line": 53,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;6"
    },
    {
      "cells": [
        "S",
        "S",
        "CC",
        "9999",
        "N"
      ],
      "line": 54,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;7"
    },
    {
      "cells": [
        "S",
        "S",
        "AC",
        "8888",
        "N"
      ],
      "line": 55,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;8"
    },
    {
      "cells": [
        "S",
        "S",
        "CD",
        "8888",
        "N"
      ],
      "line": 56,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;9"
    },
    {
      "cells": [
        "S",
        "S",
        "CC",
        "8888",
        "N"
      ],
      "line": 57,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;10"
    },
    {
      "cells": [
        "S",
        "S",
        "AC",
        "7777",
        "N"
      ],
      "line": 58,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;11"
    },
    {
      "cells": [
        "S",
        "S",
        "CD",
        "7777",
        "N"
      ],
      "line": 59,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;12"
    },
    {
      "cells": [
        "S",
        "S",
        "CC",
        "7777",
        "N"
      ],
      "line": 60,
      "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;13"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 49,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"AC\" 1010",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "AC",
      "offset": 102
    },
    {
      "val": "1010",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 260900,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 18053500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9547400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"CD\" 1010",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "CD",
      "offset": 102
    },
    {
      "val": "1010",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 242500,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 16464900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 11946400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 88200,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"CC\" 1010",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "CC",
      "offset": 102
    },
    {
      "val": "1010",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 206600,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 16961900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 12754400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 128400,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"AC\" 9999",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "AC",
      "offset": 102
    },
    {
      "val": "9999",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 263100,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 16386400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 8005900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 184600,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"CD\" 9999",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "CD",
      "offset": 102
    },
    {
      "val": "9999",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 307700,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 17875100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9018900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 183900,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"CC\" 9999",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "CC",
      "offset": 102
    },
    {
      "val": "9999",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 297300,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 16786800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 8452700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 124800,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;8",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"AC\" 8888",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "AC",
      "offset": 102
    },
    {
      "val": "8888",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 188900,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 15971900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 10996100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 127100,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;9",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"CD\" 8888",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "CD",
      "offset": 102
    },
    {
      "val": "8888",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 241600,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 15642000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9761500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 162100,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;10",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"CC\" 8888",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "CC",
      "offset": 102
    },
    {
      "val": "8888",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 214000,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 16258100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9574800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 126400,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;11",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"AC\" 7777",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "AC",
      "offset": 102
    },
    {
      "val": "7777",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 265600,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 18402700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 10094800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 103900,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;12",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"CD\" 7777",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "CD",
      "offset": 102
    },
    {
      "val": "7777",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 250200,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 17266800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 10939200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 136700,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "2 - Elegibilidade - contrato com codigo produto de oferta e origem invalidos",
  "description": "",
  "id": "elegibilidade-contratos;2---elegibilidade---contrato-com-codigo-produto-de-oferta-e-origem-invalidos;;13",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"S\" \"S\" \"CC\" 7777",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 46,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "S",
      "offset": 98
    },
    {
      "val": "CC",
      "offset": 102
    },
    {
      "val": "7777",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoCodigoInvalido(String,String,String,int)"
});
formatter.result({
  "duration": 318100,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 24476400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9977100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 115000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "3 - Status indicador de conta inativo",
  "description": "",
  "id": "elegibilidade-contratos;3---status-indicador-de-conta-inativo",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 62,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "que obtenho os registros de um unico contrato com a conta inativa \"\u003cindicador_conta_ativa\u003e\" \"\u003cindicador_cliente_correntista\u003e\" \"\u003ccodigo_tipo_produto_oferta\u003e\" \u003ccodigo_produto_origem\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 65,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 66,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"\u003cindicador_elegibilidade_cliente\u003e\"",
  "keyword": "Então "
});
formatter.step({
  "line": 67,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "elegibilidade-contratos;3---status-indicador-de-conta-inativo;",
  "rows": [
    {
      "cells": [
        "indicador_conta_ativa",
        "indicador_cliente_correntista",
        "codigo_tipo_produto_oferta",
        "codigo_produto_origem",
        "indicador_elegibilidade_cliente"
      ],
      "line": 69,
      "id": "elegibilidade-contratos;3---status-indicador-de-conta-inativo;;1"
    },
    {
      "cells": [
        "N",
        "S",
        "DC",
        "5564",
        "N"
      ],
      "line": 70,
      "id": "elegibilidade-contratos;3---status-indicador-de-conta-inativo;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 70,
  "name": "3 - Status indicador de conta inativo",
  "description": "",
  "id": "elegibilidade-contratos;3---status-indicador-de-conta-inativo;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 62,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "que obtenho os registros de um unico contrato com a conta inativa \"N\" \"S\" \"DC\" 5564",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 65,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 66,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 67,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 67
    },
    {
      "val": "S",
      "offset": 71
    },
    {
      "val": "DC",
      "offset": 75
    },
    {
      "val": "5564",
      "offset": 79
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoContaInativo(String,String,String,int)"
});
formatter.result({
  "duration": 267300,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 17545400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9969500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "4 - Status indicador cliente correntista inativo",
  "description": "",
  "id": "elegibilidade-contratos;4---status-indicador-cliente-correntista-inativo",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 72,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "que obtenho os registros de um unico contrato com o indicador do cliente correntista inativo \"\u003cindicador_conta_ativa\u003e\" \"\u003cindicador_cliente_correntista\u003e\" \"\u003ccodigo_tipo_produto_oferta\u003e\" \u003ccodigo_produto_origem\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 75,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 76,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"\u003cindicador_elegibilidade_cliente\u003e\"",
  "keyword": "Então "
});
formatter.step({
  "line": 77,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "elegibilidade-contratos;4---status-indicador-cliente-correntista-inativo;",
  "rows": [
    {
      "cells": [
        "indicador_conta_ativa",
        "indicador_cliente_correntista",
        "codigo_tipo_produto_oferta",
        "codigo_produto_origem",
        "indicador_elegibilidade_cliente"
      ],
      "line": 79,
      "id": "elegibilidade-contratos;4---status-indicador-cliente-correntista-inativo;;1"
    },
    {
      "cells": [
        "S",
        "N",
        "AB",
        "2286",
        "N"
      ],
      "line": 80,
      "id": "elegibilidade-contratos;4---status-indicador-cliente-correntista-inativo;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 80,
  "name": "4 - Status indicador cliente correntista inativo",
  "description": "",
  "id": "elegibilidade-contratos;4---status-indicador-cliente-correntista-inativo;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 72,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "que obtenho os registros de um unico contrato com o indicador do cliente correntista inativo \"S\" \"N\" \"AB\" 2286",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 75,
  "name": "for realizado o envio desse contrato através de um payload",
  "keyword": "Quando "
});
formatter.step({
  "line": 76,
  "name": "serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 77,
  "name": "retornando o status code 404 apos o envio da request",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 94
    },
    {
      "val": "N",
      "offset": 98
    },
    {
      "val": "AB",
      "offset": 102
    },
    {
      "val": "2286",
      "offset": 106
    }
  ],
  "location": "ElegibilidadeClienteSteps.registrosContratoIndicadorClienteInativo(String,String,String,int)"
});
formatter.result({
  "duration": 246500,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteSteps.enviarPayload()"
});
formatter.result({
  "duration": 20129200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 87
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9612600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "ElegibilidadeClienteSteps.validarStatusCode(int)"
});
formatter.result({
  "duration": 117200,
  "status": "passed"
});
formatter.uri("ElegibilidadeClienteMultiplosContratos.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Elegibilidade de multiplos contratos",
  "description": "Essa Funcionalidade valida a regra e o comportamento da aplicação quando o envio da requests conter multiplos contratos.\r\n- Regras:\r\n  Se todas as condições forem verdadeiras:\r\n  indicador cliente correntista \u003d “S”\r\n  indicador conta ativa \u003d “S”\r\n  código tipo produto oferta está entre (“AB”, “CB”, “DC”)\r\n  código tipo produto oferta produto oferta não está entre (“CC”, “CD”, “AC”)\r\n  codigo produto origem está entre (1234, 5678, 7722, 5564, 2286, 5561)\r\n  Como resultado o indicador_elegibilidade_cliente será \"S\"",
  "id": "elegibilidade-de-multiplos-contratos",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Validar regra para multiplos contratos - Obter Status de Elegibilidade",
  "description": "",
  "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que obtenho os registros do primeiro contrato \"\u003cindicador_conta_ativa_1\u003e\" \"\u003cindicador_cliente_correntista_1\u003e\" \"\u003ccodigo_tipo_produto_oferta_1\u003e\" \u003ccodigo_produto_origem_1\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "obtenho os registros do segundo contrato \"\u003cindicador_conta_ativa_2\u003e\" \"\u003cindicador_cliente_correntista_2\u003e\" \"\u003ccodigo_tipo_produto_oferta_2\u003e\" \u003ccodigo_produto_origem_2\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "obtenho os registros do terceito contrato \"\u003cindicador_conta_ativa_3\u003e\" \"\u003cindicador_cliente_correntista_3\u003e\" \"\u003ccodigo_tipo_produto_oferta_3\u003e\" \u003ccodigo_produto_origem_3\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "for realizado o envio desses contratos através de um payload valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "serei informado sobre o status do indicador de elegibilidade do cliente \"\u003cindicador_elegibilidade_cliente\u003e\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "retornando o status code apos o envio da request \u003cstatus_code\u003e",
  "keyword": "E "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;",
  "rows": [
    {
      "cells": [
        "indicador_conta_ativa_1",
        "indicador_cliente_correntista_1",
        "codigo_tipo_produto_oferta_1",
        "codigo_produto_origem_1",
        "indicador_conta_ativa_2",
        "indicador_cliente_correntista_2",
        "codigo_tipo_produto_oferta_2",
        "codigo_produto_origem_2",
        "indicador_conta_ativa_3",
        "indicador_cliente_correntista_3",
        "codigo_tipo_produto_oferta_3",
        "codigo_produto_origem_3",
        "indicador_elegibilidade_cliente",
        "status_code"
      ],
      "line": 22,
      "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;1"
    },
    {
      "cells": [
        "S",
        "S",
        "AC",
        "8888",
        "S",
        "S",
        "AB",
        "2286",
        "S",
        "S",
        "CB",
        "5561",
        "N",
        "404"
      ],
      "line": 23,
      "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;2"
    },
    {
      "cells": [
        "S",
        "S",
        "AB",
        "2286",
        "S",
        "S",
        "CB",
        "5561",
        "S",
        "S",
        "CC",
        "5555",
        "N",
        "404"
      ],
      "line": 24,
      "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;3"
    },
    {
      "cells": [
        "S",
        "S",
        "CC",
        "5555",
        "S",
        "S",
        "CD",
        "7777",
        "S",
        "S",
        "AC",
        "8888",
        "N",
        "404"
      ],
      "line": 25,
      "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;4"
    },
    {
      "cells": [
        "S",
        "S",
        "AB",
        "1234",
        "S",
        "S",
        "CB",
        "5678",
        "S",
        "S",
        "DC",
        "2286",
        "S",
        "201"
      ],
      "line": 26,
      "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;5"
    },
    {
      "cells": [
        "S",
        "S",
        "CB",
        "5678",
        "S",
        "S",
        "DC",
        "7722",
        "S",
        "S",
        "CB",
        "5561",
        "S",
        "201"
      ],
      "line": 27,
      "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;6"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 23,
  "name": "Validar regra para multiplos contratos - Obter Status de Elegibilidade",
  "description": "",
  "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que obtenho os registros do primeiro contrato \"S\" \"S\" \"AC\" 8888",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "obtenho os registros do segundo contrato \"S\" \"S\" \"AB\" 2286",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "obtenho os registros do terceito contrato \"S\" \"S\" \"CB\" 5561",
  "matchedColumns": [
    8,
    9,
    10,
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "for realizado o envio desses contratos através de um payload valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "serei informado sobre o status do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "retornando o status code apos o envio da request 404",
  "matchedColumns": [
    13
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "S",
      "offset": 51
    },
    {
      "val": "AC",
      "offset": 55
    },
    {
      "val": "8888",
      "offset": 59
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosPrimeiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 242500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 42
    },
    {
      "val": "S",
      "offset": 46
    },
    {
      "val": "AB",
      "offset": 50
    },
    {
      "val": "2286",
      "offset": 54
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosSegundoContrato(String,String,String,int)"
});
formatter.result({
  "duration": 152400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 43
    },
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "CB",
      "offset": 51
    },
    {
      "val": "5561",
      "offset": 55
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosTerceiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 141000,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteMultiplosContratosSteps.enviarPayload()"
});
formatter.result({
  "duration": 18587200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 73
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9225100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 49
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.retornando_o_status_code_apos_o_envio_da_request(int)"
});
formatter.result({
  "duration": 159500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validar regra para multiplos contratos - Obter Status de Elegibilidade",
  "description": "",
  "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que obtenho os registros do primeiro contrato \"S\" \"S\" \"AB\" 2286",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "obtenho os registros do segundo contrato \"S\" \"S\" \"CB\" 5561",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "obtenho os registros do terceito contrato \"S\" \"S\" \"CC\" 5555",
  "matchedColumns": [
    8,
    9,
    10,
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "for realizado o envio desses contratos através de um payload valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "serei informado sobre o status do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "retornando o status code apos o envio da request 404",
  "matchedColumns": [
    13
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "S",
      "offset": 51
    },
    {
      "val": "AB",
      "offset": 55
    },
    {
      "val": "2286",
      "offset": 59
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosPrimeiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 173500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 42
    },
    {
      "val": "S",
      "offset": 46
    },
    {
      "val": "CB",
      "offset": 50
    },
    {
      "val": "5561",
      "offset": 54
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosSegundoContrato(String,String,String,int)"
});
formatter.result({
  "duration": 155300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 43
    },
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "CC",
      "offset": 51
    },
    {
      "val": "5555",
      "offset": 55
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosTerceiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 186800,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteMultiplosContratosSteps.enviarPayload()"
});
formatter.result({
  "duration": 16574400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 73
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 9073500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 49
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.retornando_o_status_code_apos_o_envio_da_request(int)"
});
formatter.result({
  "duration": 158300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validar regra para multiplos contratos - Obter Status de Elegibilidade",
  "description": "",
  "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que obtenho os registros do primeiro contrato \"S\" \"S\" \"CC\" 5555",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "obtenho os registros do segundo contrato \"S\" \"S\" \"CD\" 7777",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "obtenho os registros do terceito contrato \"S\" \"S\" \"AC\" 8888",
  "matchedColumns": [
    8,
    9,
    10,
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "for realizado o envio desses contratos através de um payload valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "serei informado sobre o status do indicador de elegibilidade do cliente \"N\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "retornando o status code apos o envio da request 404",
  "matchedColumns": [
    13
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "S",
      "offset": 51
    },
    {
      "val": "CC",
      "offset": 55
    },
    {
      "val": "5555",
      "offset": 59
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosPrimeiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 194800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 42
    },
    {
      "val": "S",
      "offset": 46
    },
    {
      "val": "CD",
      "offset": 50
    },
    {
      "val": "7777",
      "offset": 54
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosSegundoContrato(String,String,String,int)"
});
formatter.result({
  "duration": 164300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 43
    },
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "AC",
      "offset": 51
    },
    {
      "val": "8888",
      "offset": 55
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosTerceiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 106600,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteMultiplosContratosSteps.enviarPayload()"
});
formatter.result({
  "duration": 21158500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 73
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 10908600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 49
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.retornando_o_status_code_apos_o_envio_da_request(int)"
});
formatter.result({
  "duration": 109100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validar regra para multiplos contratos - Obter Status de Elegibilidade",
  "description": "",
  "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que obtenho os registros do primeiro contrato \"S\" \"S\" \"AB\" 1234",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "obtenho os registros do segundo contrato \"S\" \"S\" \"CB\" 5678",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "obtenho os registros do terceito contrato \"S\" \"S\" \"DC\" 2286",
  "matchedColumns": [
    8,
    9,
    10,
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "for realizado o envio desses contratos através de um payload valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "serei informado sobre o status do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "retornando o status code apos o envio da request 201",
  "matchedColumns": [
    13
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "S",
      "offset": 51
    },
    {
      "val": "AB",
      "offset": 55
    },
    {
      "val": "1234",
      "offset": 59
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosPrimeiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 179900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 42
    },
    {
      "val": "S",
      "offset": 46
    },
    {
      "val": "CB",
      "offset": 50
    },
    {
      "val": "5678",
      "offset": 54
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosSegundoContrato(String,String,String,int)"
});
formatter.result({
  "duration": 130000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 43
    },
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "DC",
      "offset": 51
    },
    {
      "val": "2286",
      "offset": 55
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosTerceiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 136500,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteMultiplosContratosSteps.enviarPayload()"
});
formatter.result({
  "duration": 29941800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 73
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 10238700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 49
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.retornando_o_status_code_apos_o_envio_da_request(int)"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validar regra para multiplos contratos - Obter Status de Elegibilidade",
  "description": "",
  "id": "elegibilidade-de-multiplos-contratos;validar-regra-para-multiplos-contratos---obter-status-de-elegibilidade;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@Api-Elegibilidade-Contrato"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que obtenho os registros do primeiro contrato \"S\" \"S\" \"CB\" 5678",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "obtenho os registros do segundo contrato \"S\" \"S\" \"DC\" 7722",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "obtenho os registros do terceito contrato \"S\" \"S\" \"CB\" 5561",
  "matchedColumns": [
    8,
    9,
    10,
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "for realizado o envio desses contratos através de um payload valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "serei informado sobre o status do indicador de elegibilidade do cliente \"S\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "retornando o status code apos o envio da request 201",
  "matchedColumns": [
    13
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "S",
      "offset": 51
    },
    {
      "val": "CB",
      "offset": 55
    },
    {
      "val": "5678",
      "offset": 59
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosPrimeiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 147300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 42
    },
    {
      "val": "S",
      "offset": 46
    },
    {
      "val": "DC",
      "offset": 50
    },
    {
      "val": "7722",
      "offset": 54
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosSegundoContrato(String,String,String,int)"
});
formatter.result({
  "duration": 157800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 43
    },
    {
      "val": "S",
      "offset": 47
    },
    {
      "val": "CB",
      "offset": 51
    },
    {
      "val": "5561",
      "offset": 55
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.registrosTerceiroContrato(String,String,String,int)"
});
formatter.result({
  "duration": 124900,
  "status": "passed"
});
formatter.match({
  "location": "ElegibilidadeClienteMultiplosContratosSteps.enviarPayload()"
});
formatter.result({
  "duration": 26523900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 73
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.validarStatusElegibilidadeCliente(String)"
});
formatter.result({
  "duration": 13548800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 49
    }
  ],
  "location": "ElegibilidadeClienteMultiplosContratosSteps.retornando_o_status_code_apos_o_envio_da_request(int)"
});
formatter.result({
  "duration": 134600,
  "status": "passed"
});
});