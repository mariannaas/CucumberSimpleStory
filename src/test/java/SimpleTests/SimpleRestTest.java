//package SimpleTests;
//
//import com.jayway.restassured.RestAssured;
//import org.junit.*;
//
//import static java.nio.file.Paths.get;
//import static org.hamcrest.Matchers.contains;
//import static org.hamcrest.Matchers.containsString;
//
///**
// * Created by mariannas on 25.03.16.
// */
//public class SimpleRestTest {
//
//    @Test
//    public void simpleTest(){
//        RestAssured.get("http://qa.kredito24.mx").then().contentType("text/html; charset=UTF-8").body(containsString("Prestamos Rápidos Online - Prestamos Personales en Internet"));
//        RestAssured.get("http://qa.kredito24.mx/widget/menu").then().statusCode(200);
//    }
//
//
//}
