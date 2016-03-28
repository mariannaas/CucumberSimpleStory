package Features;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * Created by mariannas on 26.03.16.
 */
@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/resources/book_search.feature",
        format = {"pretty", "html:target/report/",
                "json:target/report/cucu_json_report.json",
                "junit:target/report/cucumber_junit_report.xml"})
public class BookSearchTest {



}
