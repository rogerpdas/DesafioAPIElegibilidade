/**
 *  Autor: Rogério Mendes - 19/10/2023
 *  Descrição: Essa classe tem como principal finalidade, criar o payload e retornar um conjunto de String
 *  atrávez das classes POJO.
 */

package com.itau.api.elegibilidade.util;

import com.itau.api.elegibilidade.model.Contratos;
import com.itau.api.elegibilidade.model.ElegibilidadeCliente;
import com.itau.api.elegibilidade.model.ElegibilidadeClienteEntrada;
import java.util.ArrayList;
import java.util.List;

public class EfetivarContratosJson {

    private static Contratos contrato;
    private static List<Contratos> lista_contrato;
    private static ElegibilidadeClienteEntrada elegibilidade_entrada;

    public static String adicionarContratos(String indicador_conta_ativa, String indicador_cliente_correntista, String codigo_tipo_produto_oferta, int codigo_produto_origem) {

        //Criando uma nova instância de Contrato e inserindo os valores em suas propriedades
        contrato = new Contratos(indicador_conta_ativa, indicador_cliente_correntista, codigo_tipo_produto_oferta, codigo_produto_origem);

        //Criando a instância de uma lista de contrato e adicionando os registros que será aplicado no POJO de Elegibilidade e assim gerando a String com o payload
        lista_contrato = new ArrayList<Contratos>();
        lista_contrato.add(contrato);

        //Adicionando a lista de contrato na estrutura e conforme as propriedade do JSON que será aplicado nos testes
        elegibilidade_entrada = new ElegibilidadeClienteEntrada(lista_contrato);
        ElegibilidadeCliente elegibilidadeCliente = new ElegibilidadeCliente(elegibilidade_entrada);

        //Retorno do Paylod conforme a estrutura que precisa ser aplicado para o teste
        return elegibilidadeCliente.toString();
    }

    public static String adicionarMultiplosContratos(Contratos primeiro_contrato, Contratos segundo_contrato, Contratos terceiro_contrato) {

        //Criando a instância de uma lista de contrato e adicionando os registros que será aplicado no POJO de Elegibilidade e assim gerando a String com o payload
        lista_contrato = new ArrayList<Contratos>();
        lista_contrato.add(primeiro_contrato);
        lista_contrato.add(segundo_contrato);
        lista_contrato.add(terceiro_contrato);

        //Adicionando a lista de contrato na estrutura e conforme as propriedade do JSON que será aplicado nos testes
        elegibilidade_entrada = new ElegibilidadeClienteEntrada(lista_contrato);
        ElegibilidadeCliente elegibilidade_cliente = new ElegibilidadeCliente(elegibilidade_entrada);

        //Retorno do Paylod conforme a estrutura que precisa ser aplicado para o teste
        return elegibilidade_cliente.toString();
    }

}
