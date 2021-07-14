(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{842:function(e,t,n){"use strict";n.r(t);var a=n(27),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"use-blueprint-generated-plugin-and-microfrontend-without-a-bundle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-blueprint-generated-plugin-and-microfrontend-without-a-bundle"}},[e._v("#")]),e._v(" Use Blueprint generated plugin and microfrontend without a bundle")]),e._v(" "),n("h2",{attrs:{id:"purpose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),n("p",[e._v("In this tutorial you will learn how to use the plugin and microfrontend generated using the Entando Blueprint\nin a running cluster without the need to include the components in a bundle")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("A microservice built with the Entando Component Generator")])]),e._v(" "),n("li",[n("p",[e._v("Node and NPM are installed on your machine (use LTS version)")])]),e._v(" "),n("li",[n("p",[e._v("Docker is installed on your machine and you are able to upload images to docker-hub or an image repository of your\nchoice")])]),e._v(" "),n("li",[n("p",[e._v("An Entando Cluster where to deploy the Entando Plugin with a working instance of Entando App Builder\nand Entando App Engine")])])]),e._v(" "),n("h2",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),n("h2",{attrs:{id:"_1-generate-an-entity-using-the-blueprint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-generate-an-entity-using-the-blueprint"}},[e._v("#")]),e._v(" 1. Generate an entity using the Blueprint")]),e._v(" "),n("p",[e._v("In order to include auto-generated micro frontends to your bundle you\nwill need to use the "),n("code",[e._v("jhispter entity")]),e._v(" generator. Let’s assume we want\nto generate a simple "),n("em",[e._v("Conference")]),e._v(" entity.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("jhipster entity Conference\n")])])]),n("p",[e._v("Let’s use these options:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("One field of type "),n("code",[e._v("String")]),e._v(" called "),n("code",[e._v("name")]),e._v(" with no validation")])]),e._v(" "),n("li",[n("p",[e._v("No relationships with other entities")])]),e._v(" "),n("li",[n("p",[e._v("REST controller should use the repository directly")])]),e._v(" "),n("li",[n("p",[e._v("No pagination for the entity")])])]),e._v(" "),n("h2",{attrs:{id:"_2-populate-the-bundle-with-the-micro-frontends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-populate-the-bundle-with-the-micro-frontends"}},[e._v("#")]),e._v(" 2. Populate the bundle with the micro frontends")]),e._v(" "),n("p",[n("span",{attrs:{id:"section2"}})]),e._v(" "),n("p",[e._v("To populate the bundle with the generated micro frontends, run the\n"),n("code",[e._v("./buildBundle.sh")]),e._v(" script or use the npm.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("npm run populate-bundle\n")])])]),n("blockquote",[n("p",[n("strong",[e._v("Important")])]),e._v(" "),n("p",[e._v("The bundle population with the micro frontends requires some time to\nbe processed. You should be able to follow the progress of the\noperation on screen.")])]),e._v(" "),n("h2",{attrs:{id:"_3-generate-a-docker-image-for-your-microservice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-generate-a-docker-image-for-your-microservice"}},[e._v("#")]),e._v(" 3. Generate a docker image for your microservice")]),e._v(" "),n("p",[e._v("JHipster uses the JIB Maven plugin to generate a docker image for your\nmicroservice.")]),e._v(" "),n("p",[e._v("The name of the output image generated with JIB will be composed by:")]),e._v(" "),n("ul",[n("li",[e._v("The organization you chose during the setup wizard (by default that's set to "),n("code",[e._v("entando")]),e._v(")")]),e._v(" "),n("li",[e._v("The name of the application")]),e._v(" "),n("li",[e._v("Version "),n("code",[e._v("0.0.1-SNAPSHOT")])])]),e._v(" "),n("p",[e._v("You can build the docker image with this command")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("./mvnw -Pprod clean package jib:dockerBuild\n")])])]),n("p",[e._v("If for example during setup wizard you chose a custom organization "),n("code",[e._v("myorg")]),e._v(" and the set the application name to "),n("code",[e._v("jhipster")]),e._v(" the resulting docker image is going to be "),n("code",[e._v("myorg/jhipster:0.0.1-SNAPSHOT")])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")])]),e._v(" "),n("p",[e._v("Output image name can be changed in the "),n("code",[e._v("pom.xml")]),e._v(" file by providing the\nby providing a different value in the "),n("code",[e._v("plugins.plugin.jib-maven-plugin.configuration.to.image")]),e._v(" tag")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" <plugin>\n   <groupId>com.google.cloud.tools</groupId>\n   <artifactId>jib-maven-plugin</artifactId>\n   <configuration>\n     \x3c!-- ... --\x3e\n     <to>\n       <image>\x3c!-- use a custom value here --\x3e</image>\n     </to>\n     \x3c!-- ... --\x3e\n   </configuration>\n </plugin>\n")])])]),n("blockquote",[n("p",[n("strong",[e._v("Note")])]),e._v(" "),n("p",[e._v("Output image name can also be changed temporarely\nby customizing in the "),n("code",[e._v("./mvnw")]),e._v(" command using the "),n("code",[e._v("-Djib.to.image")]),e._v("\nparameter. For example, if you want to build an image with organization "),n("code",[e._v("myneworg")]),e._v(", name "),n("code",[e._v("myapp")]),e._v(" and version "),n("code",[e._v("latest")]),e._v(" you can do")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("./mvnw -Pprod clean package jib:dockerBuild -Djib.to.image=myneworg/myapp:latest\n")])])])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("If you change the target image of the docker build, remember to update\nthe plugin metadata in the bundle accordingly.")])]),e._v(" "),n("h2",{attrs:{id:"_4-publish-the-docker-image-to-docker-registry-dockerhub-or-equivalent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-publish-the-docker-image-to-docker-registry-dockerhub-or-equivalent"}},[e._v("#")]),e._v(" 4. Publish the Docker image to Docker registry (DockerHub or equivalent)")]),e._v(" "),n("p",[e._v("Let’s now publish the docker image for the microservice to make it\navailable later during bundle installation in the cluster.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("docker push <name-of-the-image:tag>\n")])])]),n("h2",{attrs:{id:"_5-deploy-the-plugin-in-your-entando-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-deploy-the-plugin-in-your-entando-cluster"}},[e._v("#")]),e._v(" 5. Deploy the plugin in your Entando Cluster")]),e._v(" "),n("p",[e._v("Assuming you have an Entando Cluster available in an "),n("code",[e._v("entando")]),e._v(" namespace, you can now take\nthe plugin custom resource generated by the Entando Blueprint in the "),n("code",[e._v("bundle/plugins")]),e._v(" folder and deploy it\nin your "),n("code",[e._v("entando")]),e._v(" namespace.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("As stated at step 4, if you changed the target image of your docker build, the plugin custom resource\nin the "),n("code",[e._v("bundle/plugins")]),e._v(" folder needs to be updated to point to the correct image")])]),e._v(" "),n("p",[e._v("From the jhipster project root")]),e._v(" "),n("div",{staticClass:"language-$bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd bundle/plugins\n\nkubectl create -f <plugin-file.yaml> -n entando\n")])])]),n("h2",{attrs:{id:"_6-wait-for-your-plugin-to-be-in-running-state-and-link-the-plugin-with-the-app-using-an-entandoapppluginlink-custom-resource"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-wait-for-your-plugin-to-be-in-running-state-and-link-the-plugin-with-the-app-using-an-entandoapppluginlink-custom-resource"}},[e._v("#")]),e._v(" 6. Wait for your plugin to be in "),n("code",[e._v("Running")]),e._v(" state and link the plugin with the app using an "),n("code",[e._v("EntandoAppPluginLink")]),e._v(" custom resource")]),e._v(" "),n("p",[e._v("Once the plugin server deployment will be up and running, you can create an "),n("RouterLink",{attrs:{to:"/v6.1/docs/concepts/custom-resources.html"}},[e._v("EntandoAppPluginLink custom resource")]),e._v("\nto make the plugin API available from the EntandoApp domain.\nHere an example of a EntandoAppPluginLink custom resource. Some assumptions with this custom resource:")],1),e._v(" "),n("ul",[n("li",[e._v("The EntandoPlugin generated with the blueprint has name "),n("code",[e._v("my-demo-plugin")])]),e._v(" "),n("li",[e._v("The EntandoApp where I want to expose the "),n("code",[e._v("my-demo-plugin")]),e._v(" apis is named "),n("code",[e._v("my-entando-app")])]),e._v(" "),n("li",[e._v("Both are deployed on the "),n("code",[e._v("entando")]),e._v(" namespace.")]),e._v(" "),n("li",[e._v("As a name for the link, I'll use "),n("code",[e._v("my-entando-app-to-my-demo-plugin-link")])])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")]),e._v("\nRemember to change the fields to match your setup.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> cat <<EOF > /tmp/mylink.yaml\napiVersion: entando.org/v1\nkind: EntandoAppPluginLink\nmetadata:\n  name: my-entando-app-to-my-demo-plugin-link\n  namespace: entando\nspec:\n  entandoAppName: my-entando-app\n  entandoAppNamespace: entando\n  entandoPluginName: my-demo-plugin\n  entandoPluginNamespace: entando\nEOF\n")])])]),n("p",[e._v("Now add this link to your environment")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl create -f /tmp/my-link.yaml -n entando\n")])])]),n("p",[e._v("A new link deployer will start and will work behind the scenes to add your plugin "),n("code",[e._v("ingressPath")]),e._v(" (this is part of the\nplugin "),n("code",[e._v("spec")]),e._v(") to the EntandoApp ingress")]),e._v(" "),n("h2",{attrs:{id:"_7-upload-the-microfrontend-to-your-entandoapp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-upload-the-microfrontend-to-your-entandoapp"}},[e._v("#")]),e._v(" 7. Upload the Microfrontend to your EntandoApp")]),e._v(" "),n("p",[e._v("Now that the the plugin and the app are linked together, you can proceed to generate the Micro Frontend from the App Builder\nand upload the static resources like "),n("code",[e._v("js")]),e._v(" and "),n("code",[e._v("css")]),e._v(" files.")]),e._v(" "),n("ol",[n("li",[e._v("From AppBuilder access the File browser and create a new folder in the "),n("code",[e._v("public")]),e._v(" folder and name like the name of the bundle (is the "),n("code",[e._v("code")]),e._v(" field available\nin the "),n("code",[e._v("/bundle/descriptor.yaml")]),e._v(" file of the blueprint project) or using a custom name, e.g. "),n("code",[e._v("demo-widget")])])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")]),e._v("\nIf you choose to use a custom folder, remember to update the references in the customUI of the widget later")])]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Upload all the resources generated in "),n("a",{attrs:{href:"#section2"}},[e._v("step 2 of this guide")]),e._v(" and available in the "),n("code",[e._v("/bundle/resources")]),e._v(" folder\nof the blueprint project into the "),n("code",[e._v("demo-widget")]),e._v(" folder of Entando App Builder file browser.")])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")]),e._v("\nYou can decide to recreate the folder structure as the one in "),n("code",[e._v("/bundle/resources")]),e._v(" or not, but you need to update the\nreferences in the customUi / configUI of the widget later")])]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Create the widget component from the "),n("code",[e._v("UX Patterns > Widgets")]),e._v(" page. You can use whatever title you want, but for\nthe customUI copy the one generated in "),n("a",{attrs:{href:"#section2"}},[e._v("step 2 of this guide")]),e._v(" for one of the widgets you generated.\nAs an example, the customUI for the "),n("code",[e._v("detailWidget")]),e._v(" of the conference entity is available in\n"),n("code",[e._v("/bundle/ui/widgets/conference/detailsWidget/conference-details-widget.ftl")])])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")]),e._v("\nRemember to update all the references in the customUI to use the custom folder structure you defined in steps 7.1 and 7.2")])]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("You will need to update the service-url of your widgets to reflect the ingress path to your microservice created above. This path can be set on your customer element if you set it up during blueprint generation. For example,")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Create the widget on app-builder, you can see the right custom element to use into public/index.html\n\n\tUpdate the service-url value with the relative path of your service if you\'re deploying a bundle\n\t\tEx. <car-table service-url="/newBp/api"  />\n\tOr use the full path if you\'re deploying the BE and FE individually\n\t\tEx. <car-table service-url="http://newbp-plugin-entando.192.168.64.7.nip.io/newBp/api"/>\n')])])]),n("h2",{attrs:{id:"_8-create-a-fragment-for-keycloak"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-create-a-fragment-for-keycloak"}},[e._v("#")]),e._v(" 8. Create a fragment for keycloak")]),e._v(" "),n("ol",[n("li",[e._v("In the App Builder go to "),n("code",[e._v("UX Patterns --\x3e Fragments")]),e._v(".")]),e._v(" "),n("li",[e._v("Select Add")]),e._v(" "),n("li",[e._v("For the code enter "),n("code",[e._v("keycloak.")])]),e._v(" "),n("li",[e._v("Place the freemarker template below into the Gui Code field.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<script src="http://ROUTE_TO_KEYCLOAK/auth/js/keycloak.js"><\/script>\n\t<script>\n\t  const keycloak = Keycloak(\'/entando-de-app/keycloak.json\');\n\t  function createKcDispatcher(payload) {\n\t    return () =>\n\t      window.dispatchEvent(\n\t        new CustomEvent("keycloak", { detail: payload })\n\t      );\n\t  }\n\t  keycloak.onReady = createKcDispatcher({ eventType: "onReady" });\n\t  keycloak.onAuthSuccess = createKcDispatcher({\n\t    eventType: "onAuthSuccess"\n\t  });\n\t  keycloak.onAuthError = createKcDispatcher({\n\t    eventType: "onAuthError"\n\t  });\n\t  keycloak.onAuthRefreshSuccess = createKcDispatcher({\n\t    eventType: "onAuthRefreshSuccess"\n\t  });\n\t  keycloak.onAuthRefreshError = createKcDispatcher({\n\t    eventType: "onAuthRefreshError"\n\t  });\n\t  keycloak.onAuthLogout = createKcDispatcher({\n\t    eventType: "onAuthLogout"\n\t  });\n\t  keycloak.onTokenExpired = createKcDispatcher({\n\t    eventType: "onTokenExpired"\n\t  });\n\t  const onInit = createKcDispatcher({ eventType: "onInit" });\n\t  window.entando = {\n\t    ...(window.entando || {}),\n\t    keycloak\n\t  };\n\t  window.entando.keycloak.init({ onLoad: "check-sso" }).success(onInit);\n\t<\/script>\n')])])]),n("h2",{attrs:{id:"_9-import-the-fragment-into-the-head-section-of-the-used-page-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-import-the-fragment-into-the-head-section-of-the-used-page-template"}},[e._v("#")]),e._v(" 9. Import the fragment into the head section of the used page template")]),e._v(" "),n("p",[e._v("Add the following freemarker snippet to the page template you are using for your pages.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<@wp.fragment code="keycloak" escapeXml=false />\n')])])]),n("h2",{attrs:{id:"_10-use-the-microfrontend-and-microservice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-use-the-microfrontend-and-microservice"}},[e._v("#")]),e._v(" 10. Use the microfrontend and microservice")]),e._v(" "),n("p",[e._v("You can now use your micro frontend and your microservice in your Entando App.")])])}),[],!1,null,null,null);t.default=o.exports}}]);