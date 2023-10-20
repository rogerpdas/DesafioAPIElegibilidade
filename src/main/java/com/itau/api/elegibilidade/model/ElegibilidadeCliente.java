/**
 * @author Rogério Mendes
 * Descrição: Principal classe de propriedade (POJO) para gerar a string JSON, onde contem os contratos que utilizados
 * como massa de dados nos testes do BDD
 */

package com.itau.api.elegibilidade.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ElegibilidadeCliente {
    private ElegibilidadeClienteEntrada elegibilidadeClienteEntrada;

    @Override
    public String toString() {
        //Método toString(), sendo reescrito para formatar o payload que será utilizado nos testes, estou concatenando a string da classe de elegibilidadeClienteEntrada
        return String.format("{elegibilidade_cliente_entrada:{%s}}", elegibilidadeClienteEntrada);
    }
}
