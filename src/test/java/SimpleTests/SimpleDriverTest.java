package SimpleTests;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * Created by mariannas on 26.03.16.
 */
public class SimpleDriverTest {
    WebDriver driver = new FirefoxDriver();


    @Before
    public void tearUp(){
       driver.get("http://qa.kredito24.mx");
    }


    @After
    public void tearDown(){
       driver.quit();
    }
}
