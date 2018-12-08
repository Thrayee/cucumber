package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( features = "src/test/resources/functionalTests",
//strict = true,
plugin = { "pretty", "html:target/cucumber", "json:target/cucumber/report.json", "junit:target/cucumber/junit.xml" },
glue= {"stepDefinitions"})

public class TestRunner {

}
