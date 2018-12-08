package stepDefinitions;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;


public class Steps {
	
	private static WebDriver driver;
	
	@Given("^User has navitaged to myatt home page$")
	public void user_has_navitaged_to_myatt_home_page() throws Throwable {
	    // User open att.com 
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.att.com/");
		
		//clicks on sign-in
		WebElement signin = driver.findElement(By.xpath("//*[@id=\"z1-profile-cta\"]/span[1]"));
		signin.click();
	}

	@When("^Users enters UserID$")
	public void users_enters_UserID() throws Throwable {
	    // User enters USErID
		WebElement userid = driver.findElement(By.xpath("//*[@id=\"userName\"]"));
		userid.sendKeys("704.458.7722");
	}

	@When("^User enters Password$")
	public void user_enters_Password() throws Throwable {
	    // User enters password
		WebElement password = driver.findElement(By.xpath("//*[@id=\"password\"]"));
		password.sendKeys("PanIndia97");
	}

	@When("^Submits$")
	public void submits() throws Throwable {
	    // Un-checks the Save-me box
		WebElement saveme = driver.findElement(By.xpath("//*[@id=\"save-user-id\"]"));
		if(saveme.isSelected()){
			saveme.click();
		}
		// Clicks on submit button
		WebElement login = driver.findElement(By.xpath("//*[@id=\"loginButton-lgwgLoginButton\"]"));
		login.click();
	}

	@Then("^User lands in User dahsboard$")
	public void user_lands_in_User_dahsboard() throws Throwable {
	    // Check User Lands in correct page
		String actualString = driver.findElement(By.xpath("//*[@id=\"welcomeTitle\"]")).getText();
		assertTrue(actualString.contains("Welcome"));
		
	}

	@Given("^User is in user dashboard$")
	public void user_is_in_user_dashboard() throws Throwable {
	    // User still on User dash-board
	    
	}

	@When("^clicks on see my bill$")
	public void clicks_on_see_my_bill() throws Throwable {
	    // Clicks on view bills
		WebElement billdetails = driver.findElement(By.xpath("//*[@id=\"myBilling\"]/div[2]/button"));
		billdetails.click();
	}

	@Then("^User is able to view his complete bill$")
	public void user_is_able_to_view_his_complete_bill() throws Throwable {
	    // Check The use is able to view complete Bill Details 
		String actualString1 = driver.findElement(By.xpath("//*[@id=\"printfa\"]/div[1]/h2")).getText();
		assertTrue(actualString1.contains("charges"));
	    
	}

	@Given("^User is in billing details$")
	public void user_is_in_billing_details() throws Throwable {
	    // User is on billing details
	    
	}

	@When("^clicks on view bill reports$")
	public void clicks_on_view_bill_reports() throws Throwable {
	    // Clicks on bill reports
		WebElement billreports = driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div/div/div/div/div/div[3]/div/ddh-bill-bellyband-links/section/div/div/div/div/section/div/div/div[3]/a/i[1]"));
		billreports.click();
	}

	@Then("^User is able to view his/her billing reports for all phones$")
	public void user_is_able_to_view_his_her_billing_reports_for_all_phones() throws Throwable {
	    // Check the use is able to view correct reports
		String actualString2 = driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div/div/div/div/div/div[3]/div[2]/section/div[2]/div/div[1]/bill-usage-report/div/div[1]/div[1]")).getText();
		assertTrue(actualString2.contains("Data"));
		driver.quit();
	}


}
