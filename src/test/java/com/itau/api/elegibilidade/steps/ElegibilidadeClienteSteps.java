package com.itau.api.elegibilidade.steps;

import com.itau.api.elegibilidade.util.EfetivarContratosJson;
import com.itau.api.elegibilidade.util.ServicosRequisicao;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Quando;
import io.cucumber.java.pt.Então;
import io.restassured.response.ExtractableResponse;
import org.junit.Assert;

public class ElegibilidadeClienteSteps {

    private String contrato_json;
    private ExtractableResponse response_body;

    @Dado("^que obtenho os registros de um unino contrato validos \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
    public void registrosContratoValido(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        contrato_json = EfetivarContratosJson.adicionarContratos(
                indicador_conta_ativa,
                indicador_cliente_correntista,
                codigo_tipo_produto_oferta,
                codigo_produto_origem);
    }

    @Dado("^que obtenho os registros de um unico contrato com divergencia nos codigo de oferta ou origem \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
    public void registrosContratoCodigoInvalido(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        contrato_json = EfetivarContratosJson.adicionarContratos(
                indicador_conta_ativa,
                indicador_cliente_correntista,
                codigo_tipo_produto_oferta,
                codigo_produto_origem);
    }

    @Dado("^que obtenho os registros de um unico contrato com a conta inativa \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
    public void registrosContratoContaInativo(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        contrato_json = EfetivarContratosJson.adicionarContratos(
                indicador_conta_ativa,
                indicador_cliente_correntista,
                codigo_tipo_produto_oferta,
                codigo_produto_origem);
    }

    @Dado("^que obtenho os registros de um unico contrato com o indicador do cliente correntista inativo \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
    public void registrosContratoIndicadorClienteInativo(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        contrato_json = EfetivarContratosJson.adicionarContratos(
                indicador_conta_ativa,
                indicador_cliente_correntista,
                codigo_tipo_produto_oferta,
                codigo_produto_origem);
    }

    @Quando("^for realizado o envio desse contrato através de um payload$")
    public void enviarPayload() {
        response_body = ServicosRequisicao.metodoPost(contrato_json);
    }

    @Então("^serei informado sobre o status atual atraves do indicador de elegibilidade do cliente \"([^\"]*)\"$")
    public void validarStatusElegibilidadeCliente(String indicador_elegibilidade_cliente) {
        Assert.assertEquals(response_body.path("elegibilidade_cliente_saida.indicador_elegibilidade_cliente"), indicador_elegibilidade_cliente);
    }

    @Então("^retornando o status code (\\d+) apos o envio da request$")
    public void validarStatusCode(int status_code) {
        Assert.assertEquals(response_body.statusCode(), status_code);
    }

}
