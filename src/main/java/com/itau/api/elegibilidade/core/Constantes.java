package com.itau.api.elegibilidade.core;
/**
 * @author Rogério Mendes
 */

import io.restassured.http.ContentType;

public interface Constantes {

    /**
     * Para executado os testes com dados mockados utilize a urlBase como localhost:8080
     * necessário executar o comando docker-compose up -d e para finalizar docker-compose down
     *
     * URL_BASE para o teste: String APP_BASE_URL = "http://teste/";
     */

    String APP_BASE_URL = "http://localhost:8080/";

    Integer APP_PORT = 8080;
    String APP_BASE_PATH = "";

    ContentType APP_CONTENT_TYPE = ContentType.JSON;
    Long MAX_TIMEOUT = 9000L;

}
