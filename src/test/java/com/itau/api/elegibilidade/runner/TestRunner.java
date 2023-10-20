package com.itau.api.elegibilidade.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith (Cucumber.class)
@CucumberOptions(snippets=SnippetType.CAMELCASE,
        monochrome=true,
        features = "src/test/java/com/itau/api/elegibilidade/features",
        plugin= {"html:target/surefire-reports/cucumber.html"},
        glue= {"com.itau.api.elegibilidade.steps"},
        tags="@Api-Elegibilidade-Contrato"
)

public class TestRunner {}

