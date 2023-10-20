/**
 * @author Rogério Mendes
 * Descrição: Classe de propriedade Contrato (POJO), onde contem as variáveis dos contratos.
 *
 * Estou utilizando as anotações do lombok para gerar de forma implícita os getters setters com o (@Data).
 * Já o construtor estou utilizando anotação (@AllArgsConstructor, @NoArgsConstructor), possibilitando a declaração com ou sem parametro.
 */

package com.itau.api.elegibilidade.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contratos {

    String indicador_conta_ativa;
    String indicador_cliente_correntista;
    String codigo_tipo_produto_oferta;
    int codigo_produto_origem;


    @Override
    public String toString() {
        //Método toString(), sendo reescrito para formatar o payload que será utilizado nos testes
        return String.format("{indicador_conta_ativa:%s,indicador_cliente_correntista:%s,codigo_tipo_produto_oferta:%s,codigo_produto_origem:%s}", indicador_conta_ativa, indicador_cliente_correntista, codigo_tipo_produto_oferta, codigo_produto_origem);
    }
}
