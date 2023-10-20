/**
 * @author Rogério Mendes
 * Descrição: Classe de propriedade referente aos Contratos de Elegibilidade de Entrada (POJO), onde contem as variáveis para a geração de lista dos contratos.
 * <p>
 * Estou utilizando as anotações do lombok para gerar de forma implícita os getters setters com o (@Data).
 * Já o construtor estou utilizando anotação (@AllArgsConstructor, @NoArgsConstructor), possibilitando a declaração com ou sem parametro.
 */
package com.itau.api.elegibilidade.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ElegibilidadeClienteEntrada {
    private List<Contratos> contratos;

    @Override
    public String toString() {
        //Método toString(), sendo reescrito para formatar o payload que será utilizado nos testes, estou concatenando com a string da classe de Contrato
        return String.format("contratos:%s", contratos);
    }
}
