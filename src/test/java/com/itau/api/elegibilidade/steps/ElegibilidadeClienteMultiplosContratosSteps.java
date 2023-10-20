package com.itau.api.elegibilidade.steps;

import com.itau.api.elegibilidade.model.Contratos;
import com.itau.api.elegibilidade.util.EfetivarContratosJson;
import com.itau.api.elegibilidade.util.ServicosRequisicao;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import io.restassured.response.ExtractableResponse;
import org.junit.Assert;

public class ElegibilidadeClienteMultiplosContratosSteps {

    private Contratos primeiro_contrato;
    private Contratos segundo_contrato;
    private Contratos terceiro_contrato;
    private String contrato_json;
    private ExtractableResponse response_body;

    @Dado("^que obtenho os registros do primeiro contrato \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
    public void registrosPrimeiroContrato(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        primeiro_contrato = new Contratos(indicador_conta_ativa, indicador_cliente_correntista, codigo_tipo_produto_oferta, codigo_produto_origem);
    }

    @Dado("^obtenho os registros do segundo contrato \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
    public void registrosSegundoContrato(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        segundo_contrato = new Contratos(indicador_conta_ativa, indicador_cliente_correntista, codigo_tipo_produto_oferta, codigo_produto_origem);
    }

    @Dado("^obtenho os registros do terceito contrato \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
    public void registrosTerceiroContrato(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        terceiro_contrato = new Contratos(indicador_conta_ativa, indicador_cliente_correntista, codigo_tipo_produto_oferta, codigo_produto_origem);
    }

    @Quando("^for realizado o envio desses contratos através de um payload valido$")
    public void enviarPayload() {
        contrato_json = EfetivarContratosJson.adicionarMultiplosContratos(primeiro_contrato,segundo_contrato,terceiro_contrato);
        response_body = ServicosRequisicao.metodoPost(contrato_json);
    }

    @Entao("^serei informado sobre o status do indicador de elegibilidade do cliente \"([^\"]*)\"$")
    public void validarStatusElegibilidadeCliente(String indicador_elegibilidade_cliente) {
        Assert.assertEquals(response_body.path("elegibilidade_cliente_saida.indicador_elegibilidade_cliente"),indicador_elegibilidade_cliente);
    }

    @Entao("^retornando o status code apos o envio da request (\\d+)$")
    public void retornando_o_status_code_apos_o_envio_da_request(int status_code) {
        Assert.assertEquals(response_body.statusCode(),status_code);
    }


/**
    @Dado("que obtenho os registros do primeiro contrato {string} {string} {string} {int}")
    public void registrosPrimeiroContrato(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        primeiro_contrato = new Contratos(indicador_conta_ativa, indicador_cliente_correntista, codigo_tipo_produto_oferta, codigo_produto_origem);
    }

    @Dado("obtenho os registros do segundo contrato {string} {string} {string} {int}")
    public void registrosSegundoContrato(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        segundo_contrato = new Contratos(indicador_conta_ativa, indicador_cliente_correntista, codigo_tipo_produto_oferta, codigo_produto_origem);
    }

    @Dado("obtenho os registros do terceito contrato {string} {string} {string} {int}")
    public void registrosTerceiroContrato(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {
        terceiro_contrato = new Contratos(indicador_conta_ativa, indicador_cliente_correntista, codigo_tipo_produto_oferta, codigo_produto_origem);
    }

    @Quando("for realizado o envio desses contratos através de um payload valido")
    public void enviarPayload() {
        contrato_json = EfetivarContratosJson.adicionarMultiplosContratos(primeiro_contrato,segundo_contrato,terceiro_contrato);
        response_body = ServicosRequisicao.metodoPost(contrato_json);
    }

    @Entao("serei informado sobre o status do indicador de elegibilidade do cliente {string}")
    public void validarStatusElegibilidadeCliente(String indicador_elegibilidade_cliente) {
        Assert.assertEquals(response_body.path("elegibilidade_cliente_saida.indicador_elegibilidade_cliente"),indicador_elegibilidade_cliente);
    }

    @Entao("retornando o status code apos o envio da request {int}")
    public void retornando_o_status_code_apos_o_envio_da_request(int status_code) {
        Assert.assertEquals(response_body.statusCode(),status_code);
    }
*/

}
