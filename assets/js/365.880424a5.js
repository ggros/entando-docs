(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1041:function(e,t,a){"use strict";a.r(t);var s=a(27),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"run-blueprint-generated-microservices-and-micro-frontends-in-dev-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-blueprint-generated-microservices-and-micro-frontends-in-dev-mode"}},[e._v("#")]),e._v(" Run Blueprint-generated Microservices and Micro Frontends in Dev Mode")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This tutorial will take you through running an Entando project (microservice and micro frontends) in a local development environment. If you haven't generated your Entando project yet, start with the "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/backend-developers/generate-microservices-and-micro-frontends.html"}},[e._v("Generate Microservices and Micro Frontend")]),e._v(" tutorial first.")],1),e._v(" "),a("p",[e._v("The steps below assume you are working in the top-level project directory.")]),e._v(" "),a("h2",{attrs:{id:"cli-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-steps"}},[e._v("#")]),e._v(" CLI Steps")]),e._v(" "),a("p",[e._v("The following steps make use of the Entando "),a("code",[e._v("ent prj")]),e._v(" command. See the "),a("a",{attrs:{href:"#manual-steps"}},[e._v("Manual Steps")]),e._v(" section below for a more detailed description of what the individual commands do.")]),e._v(" "),a("ol",[a("li",[e._v("Startup Keycloak. This uses docker-compose under the hood. Since this is using Docker it will continue to run in the background until you stop it via "),a("code",[e._v("ent prj ext-keycloak stop")]),e._v(". You can also view its logs using "),a("code",[e._v("ent prj ext-keycloak logs")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj ext-keycloak start\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Startup the Spring Boot application containing your microservices. The logs will be shown on the console and you can stop the application via "),a("code",[e._v("CTRL+C")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj be-test-run\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Startup one or more of the frontend widgets, each from its own shell. You can stop the application using "),a("code",[e._v("CTRL+C")]),e._v(". This command runs React in development mode so any changes you make to the source files should be immediately seen in the browser.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj fe-test-run\n")])])]),a("h2",{attrs:{id:"manual-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-steps"}},[e._v("#")]),e._v(" Manual Steps")]),e._v(" "),a("h3",{attrs:{id:"start-keycloak-using-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-keycloak-using-docker-compose"}},[e._v("#")]),e._v(" Start Keycloak using docker-compose")]),e._v(" "),a("ol",[a("li",[e._v("Startup the Keycloak server:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("  docker-compose -f src/main/docker/keycloak.yml up\n")])])]),a("h4",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes:")]),e._v(" "),a("ul",[a("li",[e._v("If you have to install docker-compose you can follow this guide:\n"),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/compose/install/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("By default docker-compose will recreate the Keycloak container (and reset the H2 database) each time it is started. You can make the following changes to persist Keycloak changes across restarts:\n"),a("ul",[a("li",[e._v("Modify the following line in your "),a("code",[e._v("src/main/docker/keycloak.yml")])])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("'-Dkeycloak.migration.strategy=OVERWRITE_EXISTING',\n")])])]),a("p",[e._v("and replace it with this")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("'-Dkeycloak.migration.strategy=IGNORE_EXISTING',\n")])])]),a("ul",[a("li",[e._v("In the same file, add a persistent volume under "),a("code",[e._v("volumes")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" - ./keycloak-db:/opt/jboss/keycloak/standalone/data\n")])])]),a("p",[e._v("Keycloak changes should now be persistent. You can reset your Keycloak database by emptying the "),a("code",[e._v("src/main/docker/keycloak-db")]),e._v(" directory and restarting the container.")]),e._v(" "),a("h3",{attrs:{id:"start-the-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-microservice"}},[e._v("#")]),e._v(" Start the microservice")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Start the generated Microservice executing the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("./mvnw\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"notes-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-2"}},[e._v("#")]),e._v(" Notes:")]),e._v(" "),a("p",[e._v('If you want to reset the widget data (as example if you deleted all rows from the table widget) if during the generation of the microservice you selected "H2 with disk-based persistence" you can delete the target folder, restart the microservice and the data will be regenerated.')]),e._v(" "),a("h3",{attrs:{id:"start-the-table-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-table-widget"}},[e._v("#")]),e._v(" Start the table widget")]),e._v(" "),a("p",[e._v("Now you can start your generated table widget:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Go to the table widget folder in your project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/tableWidget\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Then install and start your widget executing the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("npm install && npm start\n")])])])]),e._v(" "),a("li",[a("p",[e._v("When the widget is started a browser window is opened and the widget URL is loaded")])]),e._v(" "),a("li",[a("p",[e._v("If you’re not logged in you’re redirected to the login page.")])]),e._v(" "),a("li",[a("p",[e._v("Log in using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Username: user\nPassword: user\n")])])])]),e._v(" "),a("li",[a("p",[e._v("After the login process you’ll be redirected to the widget page and you can see the table widget with some generated data.")])])]),e._v(" "),a("h3",{attrs:{id:"start-the-form-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-form-widget"}},[e._v("#")]),e._v(" Start the form widget")]),e._v(" "),a("p",[e._v("Now you can start your generated form widget:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If you are running another widget, stop it clicking "),a("code",[e._v("Ctrl+C")]),e._v(" in your widget command line window")])]),e._v(" "),a("li",[a("p",[e._v("Go to the form widget folder in your project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/formWidget\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Then install and start your widget executing the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("npm install && npm start\n")])])])]),e._v(" "),a("li",[a("p",[e._v("When the widget is started a browser window is opened with and the widget URL is loaded")])]),e._v(" "),a("li",[a("p",[e._v("If you’re not logged in you’re redirected to the login page.")])]),e._v(" "),a("li",[a("p",[e._v("Log in using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Username: user\nPassword: user\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You’ll be redirected to the widget page and you can see the widget form with the ID 1 loaded.")])])]),e._v(" "),a("h4",{attrs:{id:"form-widget-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-widget-notes"}},[e._v("#")]),e._v(" Form widget notes:")]),e._v(" "),a("p",[e._v("If you want to load other data you have to change the index.html file in the folder:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/formWidget/public\n")])])]),a("p",[e._v("and change the id attribute in this line:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<my-entity-form service-url="%REACT_APP_SERVICE_URL%" id="1" />\n')])])]),a("h3",{attrs:{id:"start-the-details-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-details-widget"}},[e._v("#")]),e._v(" Start the details widget")]),e._v(" "),a("p",[e._v("You can also start your generated details widget:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If you are running another widget, stop it clicking "),a("code",[e._v("Ctrl+C")]),e._v(" in your widget command line window")])]),e._v(" "),a("li",[a("p",[e._v("Go to the details widget folder in your project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/detailsWidget\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Then install and start your widget executing the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("npm install && npm start\n")])])])]),e._v(" "),a("li",[a("p",[e._v("When the widget is started a browser window is opened with and the widget URL is loaded")])]),e._v(" "),a("li",[a("p",[e._v("If you’re not logged in you’re redirected to the login page.")])]),e._v(" "),a("li",[a("p",[e._v("Log in using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Username: user\nPassword: user\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You’ll be redirected to the widget page and you can see the widget form with the ID 1 loaded.")])])]),e._v(" "),a("h3",{attrs:{id:"widget-details-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widget-details-notes"}},[e._v("#")]),e._v(" Widget Details notes:")]),e._v(" "),a("p",[e._v("If you want to load other data you have to change the index.html file in the public folder:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/detailsWidget/public\n")])])]),a("p",[e._v('and change the "id" attribute in this line:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<my-entity-details service-url="%REACT_APP_SERVICE_URL%" id="1" />\n')])])]),a("h2",{attrs:{id:"notes-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-3"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("h3",{attrs:{id:"change-keycloak-dev-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-keycloak-dev-settings"}},[e._v("#")]),e._v(" Change Keycloak dev settings")]),e._v(" "),a("p",[e._v("If you want to change your Keycloak settings to use another keycloak installation (not the docker-compose pre-configured one) or if you want to change the service-url of your widget you can change the parameters set in the "),a("code",[e._v(".env.local")]),e._v(" file that was generated by the entando-blueprint in the root folder of your react widgets:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/tableWidget\n")])])]),a("p",[e._v("then edit the file "),a("code",[e._v(".env.local")])]),e._v(" "),a("p",[e._v("By default this variables are set to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("REACT_APP_SERVICE_URL=http://localhost:8081/services/<your-application-name>/api\nREACT_APP_KEYCLOAK_URL=http://localhost:9080/auth\nREACT_APP_KEYCLOAK_REALM=jhipster\nREACT_APP_KEYCLOAK_CLIENT_ID=web_app\n")])])]),a("h3",{attrs:{id:"the-service-url-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-service-url-variable"}},[e._v("#")]),e._v(" The service-url Variable")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("service-url")]),e._v(" variable is the Microservice API URL.")]),e._v(" "),a("h3",{attrs:{id:"user-is-not-authenticated-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-is-not-authenticated-message"}},[e._v("#")]),e._v(" User is not authenticated message")]),e._v(" "),a("p",[e._v("When you run the widgets if you see the message: "),a("code",[e._v("User is not authenticated")]),e._v(". This means that probably your keycloak application is not running so please check if the docker-compose command is still in execution.")])])}),[],!1,null,null,null);t.default=r.exports}}]);