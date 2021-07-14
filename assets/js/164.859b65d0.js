(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{758:function(e,t,a){"use strict";a.r(t);var n=a(27),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial-invoking-entando-core-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-invoking-entando-core-apis"}},[e._v("#")]),e._v(" Tutorial: Invoking Entando Core APIs")]),e._v(" "),a("h2",{attrs:{id:"general-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-overview"}},[e._v("#")]),e._v(" General Overview")]),e._v(" "),a("p",[e._v("Entando supports Swagger and it is accessible, if activated, from its\nweb interface from the base application URL at /api/swagger-ui.html. A\ncomplete list of all available core APIs can be obtained from Swagger.")]),e._v(" "),a("p",[e._v("Core APIs can be invoked directly from Swagger or from any other\nsuitable tool, i.e., curl or Postman are two common ones. Postman has\nbeen extensively used in API testing and automated API testing because\nof the possibilities it offers and it is the suggested tool.")]),e._v(" "),a("p",[e._v("All Entando core APIs are accessible from the base URL, for example:\nlocalhost:8080/entando-de-app/api. For example, the Page Controller will\nbe available under /pages from the Base URL (i.e.\nlocalhost:8080/entando-de-app/api/pages), or the Page Template Controller\nwill available under /pageModels (i.e.\nlocalhost:8080/entando-de-app/api/pageModels) and so on.")]),e._v(" "),a("p",[e._v("Before being able to perform any API request, we will first need to\nobtain an "),a("code",[e._v("authorization token")]),e._v(", that is achieved with a specific POST\nrequest sent to the oauth/token endpoint, after successful\nauthentication, an access token is returned which grants access to all\nAPI endpoints and actions for which the authenticated user has defined\nprivileges.")]),e._v(" "),a("p",[e._v("(Refer to User Management Roles for details)")]),e._v(" "),a("p",[e._v("The best way to proceed in case of extensive testing with APIs with\nPostman, is to set up an environment and define a variable that will\nkeep the access token saved from the POST request to /oauth/token.")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("Set up an environment ready to invoke Entando core APIs")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("To complete this tutorial you will need:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Postman")])]),e._v(" "),a("li",[a("p",[e._v("A running Entando 6 instance")])])]),e._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("h3",{attrs:{id:"_1-set-up-a-postman-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-set-up-a-postman-environment"}},[e._v("#")]),e._v(" 1. Set up a Postman environment")]),e._v(" "),a("p",[e._v("Create a new Postman environment and define the following variables:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("access_token: (no value)\nrefresh_token: (no value)\nurl: URL of your application (i.e. http://localhost:8080/entando-de-app)\n")])])]),a("p",[e._v("Be careful with the URL variable and make sure you do not have a\ntrailing slash.")]),e._v(" "),a("p",[e._v("Set Postman to use this environment.")]),e._v(" "),a("h3",{attrs:{id:"_2-get-an-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-an-access-token"}},[e._v("#")]),e._v(" 2. Get an access token")]),e._v(" "),a("p",[e._v("Getting an access token is a prerequisite to be able to invoke any API.\nThe following is the required activity.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('create a Postman collection, name it for example "Access Token"')])]),e._v(" "),a("li",[a("p",[e._v("create a new POST request with the following parameters:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("URL field\n"+e._s(e.url)+"/api/oauth/token\n")])])]),a("p",[e._v('Note that we are calling the "url" environmental variable for\nconvenience.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Autorization section\n   Type: Basic Auth\n   Username: (a valid Entando consumer must be defined in Entando) (Refer to appropriate documentation on how to do that) (i.e. appbuilder)\n   Password: (password of the defined consumer) (i.e. appbuilder_secret)\n\nHeaders section\n    Content-Type: application/x-www-form-urlencoded\n\nBody section\nSelect from the radio button the option: x-www-form-urlencoded\n    username: (valid Entando user (i.e. admin))\n    password: (password of the valid user)\n    grant_type: password\n")])])]),a("p",[e._v('The tests section is convenient as we can then set any new API request\nin such a way to make use of that access token. The first line of code\ndefines a variable called "data", which hosts the JSON parsed\nresponseBody from the POST request just sent to /oauth/token; The second\nline sets the environment variable "access_token" to the value returned\nby the POST request.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Tests section\n    var data = JSON.parse(responseBody);\n    postman.setEnvironmentVariable("access_token", data.access_token);\n')])])]),a("p",[e._v("Launch the POST request to test it, and if successful, you should get a\nresponse like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('{\n    "access_token": "b96096493a40b1a7364bd54a6ffb609b",\n    "token_type": "bearer",\n    "refresh_token": "79ff84062b5dc13663961a833b0788f9",\n    "expires_in": 3599\n}\n')])])]),a("p",[e._v("also if you open in edit the Postman environment, you should see that\nthe access_token and the refresh_token variables values have been\nupdated.")]),e._v(" "),a("h3",{attrs:{id:"_2-prepare-a-generic-api-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-prepare-a-generic-api-request"}},[e._v("#")]),e._v(" 2. Prepare a generic API request")]),e._v(" "),a("p",[e._v("Create a new request with the following parameters:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Authorization section: Inherit auth from parent\n\nHeaders section:\n create the key Authorization with Value: Bearer"+e._s(e.access_token)+"\n create the key Content-Type with Value: application/json\n")])])]),a("p",[e._v("Select the appropriate method (GET, DELETE, POST etc.) for your request\nand fill up the URL with appropriate values i.e.\n(localhost:8080/entando-de-app/api/pages) then add to the Body section,\nif needed, the appropriate payload in JSON format, remember to select\nraw and JSON (application/json).")]),e._v(" "),a("h2",{attrs:{id:"qe-ready-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qe-ready-apis"}},[e._v("#")]),e._v(" QE ready APIs")]),e._v(" "),a("p",[e._v("QE has developed a set of collection requests to automate API testing,\nexamples of that are available on github at\n"),a("a",{attrs:{href:"https://github.com/entando/entando-QE/tree/master/postman_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-QE/tree/master/postman_API"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To use them ,first git clone the project and use the built in Postman\nimporting features.")]),e._v(" "),a("p",[e._v('Import first the Postman Environment file which can be found under the\nenvironment folder. When imported, from Postman, open in edit that\nenvironment and change the "url" variable to the appropriate value for\nyour specific installation, i.e '),a("a",{attrs:{href:"http://localhost:8080/entando-de-app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080/entando-de-app/"),a("OutboundLink")],1),e._v("\nand save it.")]),e._v(" "),a("p",[e._v("Import from Postman the collections you would like to use and they will\nbecome available in the Postman collections Panel ready to be run.")]),e._v(" "),a("h2",{attrs:{id:"notes-on-qe-requests-collections-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-qe-requests-collections-structure"}},[e._v("#")]),e._v(" Notes on QE requests collections structure")]),e._v(" "),a("p",[e._v('Each collection is so designed to test a particular use case i.e.\n"Delete an existent page", "Delete a page which has children" etc.')]),e._v(" "),a("p",[e._v("By design each QE Postman collection is:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("indipendent (does not require other collections)")])]),e._v(" "),a("li",[a("p",[e._v("general (does not make any assumption on the specific Entando\napplication)")])]),e._v(" "),a("li",[a("p",[e._v("can be run automatically, with newman, please refer to\n"),a("a",{attrs:{href:"https://github.com/entando/entando-QE",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-QE"),a("OutboundLink")],1),e._v(" for details")])])]),e._v(" "),a("p",[e._v('Following those requirements, each collection will need to "prepare" the\nenvironment for the actual test. That is achieved by using specific\nrequests, called "helpers", and their only purpose is to create/delete\nall the needed objects.')]),e._v(" "),a("p",[e._v("Another class of helpers is used to check the persistence of the actions\nperformed by the APIs, i.e. check that after a DELETE, something really\nhas been deleted.")]),e._v(" "),a("p",[e._v('The request that implements the use case, we can call it main request,\ndoes not contain the word "HELPER" in its name, and it is the only one\ninside a given collection.')]),e._v(" "),a("p",[e._v("Because collections are designed primarily to run automatically, we have\ndone extensive use of collection variables, so variables like the API\nURL, object names, object codes or payloads are usually defined as a\ncollection variable and can be accessed by all requests inside the\ncollection.")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("This guide let you start invoking Entando 6 APIs")])])}),[],!1,null,null,null);t.default=o.exports}}]);