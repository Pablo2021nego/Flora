$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Fazer login no site da Flora Energia",
  "description": "              Com o email ja cadastrado anteriormente\r\n              E verificar se ha alguma falha",
  "id": "fazer-login-no-site-da-flora-energia",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@TesteLoginUsuario"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Testes na tela de login e apos logar",
  "description": "",
  "id": "fazer-login-no-site-da-flora-energia;testes-na-tela-de-login-e-apos-logar",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@Test-de-tela-login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "preencho meu email",
  "keyword": "E "
});
formatter.match({
  "location": "Login.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 7310926100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//label[text()\u003d\u0027E-mail\u0027]\"}\n  (Session info: chrome\u003d110.0.5481.78)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-29PJO45\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.78, chrome: {chromedriverVersion: 110.0.5481.30 (aedb656755c4..., userDataDir: C:\\Users\\pablo\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52607}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2126f6b4b94ffb23ff8c966e75575037\n*** Element info: {Using\u003dxpath, value\u003d//label[text()\u003d\u0027E-mail\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.HomeLogin.telaLogin(HomeLogin.java:21)\r\n\tat steps.Login.que_estou_na_tela_de_login(Login.java:14)\r\n\tat ✽.Dado que estou na tela de login(login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.preencho_meu_email()"
});
formatter.result({
  "status": "skipped"
});
});