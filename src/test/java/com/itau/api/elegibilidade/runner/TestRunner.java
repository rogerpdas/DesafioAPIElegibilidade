package com.itau.api.elegibilidade.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith (Cucumber.class)
@CucumberOptions(snippets=CucumberOptions.SnippetType.CAMELCASE,
        monochrome=true,
        features = "src/test/java/com/itau/api/elegibilidade/features",
        publish = true,
        plugin= {"html:target/html-reports/cucumber.html"},
        glue= {"com.itau.api.elegibilidade.steps"},
        tags="@Api-Elegibilidade-Contrato"
)

public class TestRunner {}
