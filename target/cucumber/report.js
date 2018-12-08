$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myatt.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "My Login and view billling statement",
  "description": "As a ATT customer, I am able to login to myatt.com and will be able to view my billing reports",
  "id": "my-login-and-view-billling-statement",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "myatt login",
  "description": "",
  "id": "my-login-and-view-billling-statement;myatt-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User has navitaged to myatt home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Users enters UserID",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Submits",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User lands in User dahsboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_has_navitaged_to_myatt_home_page()"
});
formatter.result({
  "duration": 9004354207,
  "status": "passed"
});
formatter.match({
  "location": "Steps.users_enters_UserID()"
});
formatter.result({
  "duration": 2251509264,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_Password()"
});
formatter.result({
  "duration": 130171747,
  "status": "passed"
});
formatter.match({
  "location": "Steps.submits()"
});
formatter.result({
  "duration": 389896450,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_lands_in_User_dahsboard()"
});
formatter.result({
  "duration": 10095830018,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"welcomeTitle\"]\"}\n  (Session info: chrome\u003d71.0.3578.80)\n  (Driver info: chromedriver\u003d2.44.609545 (c2f88692e98ce7233d2df7c724465ecacfe74df5),platform\u003dMac OS X 10.14.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027AGLFVFX5D3QHV22.local\u0027, ip: \u0027fe80:0:0:0:1c31:1f37:71c2:24aa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609545 (c2f88692e98ce7..., userDataDir: /var/folders/zz/zyxvpxvq6cs...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50702}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.80, webStorageEnabled: true}\nSession ID: 0ebb86cd539f95eae1e2be2491ecb8de\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"welcomeTitle\"]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat stepDefinitions.Steps.user_lands_in_User_dahsboard(Steps.java:62)\n\tat ✽.Then User lands in User dahsboard(myatt.feature:30)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "User view billing details",
  "description": "",
  "id": "my-login-and-view-billling-statement;user-view-billing-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is in user dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "clicks on see my bill",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User is able to view his complete bill",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_in_user_dashboard()"
});
formatter.result({
  "duration": 46808,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_see_my_bill()"
});
formatter.result({
  "duration": 10064439559,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"myBilling\"]/div[2]/button\"}\n  (Session info: chrome\u003d71.0.3578.80)\n  (Driver info: chromedriver\u003d2.44.609545 (c2f88692e98ce7233d2df7c724465ecacfe74df5),platform\u003dMac OS X 10.14.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027AGLFVFX5D3QHV22.local\u0027, ip: \u0027fe80:0:0:0:1c31:1f37:71c2:24aa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609545 (c2f88692e98ce7..., userDataDir: /var/folders/zz/zyxvpxvq6cs...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50702}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.80, webStorageEnabled: true}\nSession ID: 0ebb86cd539f95eae1e2be2491ecb8de\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"myBilling\"]/div[2]/button}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat stepDefinitions.Steps.clicks_on_see_my_bill(Steps.java:76)\n\tat ✽.When clicks on see my bill(myatt.feature:35)\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_is_able_to_view_his_complete_bill()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "User view billing reports",
  "description": "",
  "id": "my-login-and-view-billling-statement;user-view-billing-reports",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User is in billing details",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "clicks on view bill reports",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User is able to view his/her billing reports for all phones",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_in_billing_details()"
});
formatter.result({
  "duration": 33325,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_view_bill_reports()"
});
formatter.result({
  "duration": 10046622551,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"wrapper\"]/div[2]/div/div/div/div/div/div[3]/div/ddh-bill-bellyband-links/section/div/div/div/div/section/div/div/div[3]/a/i[1]\"}\n  (Session info: chrome\u003d71.0.3578.80)\n  (Driver info: chromedriver\u003d2.44.609545 (c2f88692e98ce7233d2df7c724465ecacfe74df5),platform\u003dMac OS X 10.14.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027AGLFVFX5D3QHV22.local\u0027, ip: \u0027fe80:0:0:0:1c31:1f37:71c2:24aa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609545 (c2f88692e98ce7..., userDataDir: /var/folders/zz/zyxvpxvq6cs...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50702}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.80, webStorageEnabled: true}\nSession ID: 0ebb86cd539f95eae1e2be2491ecb8de\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"wrapper\"]/div[2]/div/div/div/div/div/div[3]/div/ddh-bill-bellyband-links/section/div/div/div/div/section/div/div/div[3]/a/i[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat stepDefinitions.Steps.clicks_on_view_bill_reports(Steps.java:97)\n\tat ✽.When clicks on view bill reports(myatt.feature:41)\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_is_able_to_view_his_her_billing_reports_for_all_phones()"
});
formatter.result({
  "status": "skipped"
});
});