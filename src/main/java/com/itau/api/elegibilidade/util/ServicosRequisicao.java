package com.itau.api.elegibilidade.util;

import com.itau.api.elegibilidade.core.BaseTest;
import io.restassured.http.ContentType;
import io.restassured.response.ExtractableResponse;

import static io.restassured.RestAssured.given;

public class ServicosRequisicao extends BaseTest {

    private static ExtractableResponse responseBody;

    public static ExtractableResponse metodoPost(String json) {

        responseBody = given()
                .contentType(ContentType.JSON)
                .body(json)
                .when()
                .post("1.0/elegibilidade_cliente")
                .then()
                .log().all().extract();

        return responseBody;
    }
}
