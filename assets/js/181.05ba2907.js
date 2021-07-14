(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{772:function(e,t,a){"use strict";a.r(t);var s=a(27),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"build-and-publish-a-project-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-publish-a-project-bundle"}},[e._v("#")]),e._v(" Build and Publish a Project Bundle")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This tutorial shows you how to take an existing Entando project directory and deploy it to the Entando Component Repository. This involves building a Docker image from your microservice, creating your Entando bundle, checking your Bundle artifacts into git, and deploying the Entando bundle into Kubernetes.")]),e._v(" "),a("p",[e._v("The Entando CLI automates many of the tasks involved in deploying an Entando bundle but you can also choose to perform the tasks manually.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Use the "),a("RouterLink",{attrs:{to:"/next/docs/reference/entando-cli.html#check-environment"}},[e._v("Entando CLI")]),e._v(" to verify you have the prerequisites in place for this tutorial (e.g. Java, npm, git).")],1)]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent check-env develop\n")])])]),a("ul",[a("li",[e._v("You will also need your git credentials, a git repository, and an Entando instance.")]),e._v(" "),a("li",[e._v("You will also need an Entando project directory, either "),a("RouterLink",{attrs:{to:"/next/tutorials/ecr/publish-simple-bundle.html"}},[e._v("developed by hand")]),e._v(" or "),a("RouterLink",{attrs:{to:"/next/tutorials/backend-developers/generate-microservices-and-micro-frontends.html"}},[e._v("generated by the Entando Component Generator")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"cli-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-steps"}},[e._v("#")]),e._v(" CLI Steps")]),e._v(" "),a("p",[e._v("The following steps make use of the Entando "),a("code",[e._v("ent prj")]),e._v(" command and its publication system (pbs) convenience methods. See the "),a("a",{attrs:{href:"#manual-steps"}},[e._v("Manual Steps")]),e._v(" section below for a more detailed description of the underlying tasks.")]),e._v(" "),a("ol",[a("li",[e._v("Build the project using the "),a("code",[e._v("ent prj")]),e._v(" command. This saves you from having to build each part of the project individually. If you are using a project directory with just a bundle child directory (e.g. for a bundle exported from an environment or with hand-built components) then you should skip this step since there's nothing to build.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj build\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The first run can take longer due to node downloads for any MFE widgets. For later runs you can use "),a("code",[e._v("ent prj fe-build")]),e._v(" or "),a("code",[e._v("ent prj be-build")]),e._v(" to independently build just the frontend or backend components.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Initialize the bundle directory")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj pbs-init\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Publish the build artifacts to github and Docker Hub.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj pbs-publish\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Create a Kubernetes custom resource and apply it to your Entando instance. You can modify the target namespace parameter ("),a("code",[e._v("-n")]),e._v(") if you changed it from the default.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj generate-cr "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" ent kubectl apply -n entando -f -\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Jump to the section below to finish installing your bundle: "),a("a",{attrs:{href:"#install-the-bundle-into-an-application"}},[e._v("Install the bundle into your application")])])]),e._v(" "),a("h2",{attrs:{id:"manual-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-steps"}},[e._v("#")]),e._v(" Manual Steps")]),e._v(" "),a("h3",{attrs:{id:"build-docker-image-for-microservices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-docker-image-for-microservices"}},[e._v("#")]),e._v(" Build Docker Image for Microservices")]),e._v(" "),a("ol",[a("li",[e._v("Build the project from the project directory")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./mvnw -Pprod clean package jib:dockerBuild\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("By default the organization used to generate the docker image is "),a("code",[e._v("entando")]),e._v(", but you can provide a custom value during project initialization, as well as by changing the "),a("code",[e._v("pom.xml")]),e._v(" file or by providing the "),a("code",[e._v("-Djib.to.image=<org>/<name>:<version>")]),e._v(" to the "),a("code",[e._v("jib:dockerBuild")]),e._v(" command.")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("Output image name is generated using the organization value defined during project initialization. You can override the provided values by altering the "),a("code",[e._v("pom.xml")]),e._v(" file or by customizing the "),a("code",[e._v("-Djib.to.image")]),e._v(" parameter used in the "),a("code",[e._v("./mvnw")]),e._v(" command")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Warning")])]),e._v(" "),a("p",[e._v("If you manually override the target image of the docker build, remember to update the plugin metadata in the bundle accordingly in the bundle steps.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("View your image and tag")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker images\n")])])]),a("p",[e._v("Output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\nmyusername/example-app   0.0.1-SNAPSHOT      4ec7f05b2b27        33 seconds ago      213MB\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Publish the Docker image to Docker repository (Docker Hub or equivalent). You may need to first login via "),a("code",[e._v("docker login")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker push "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("name-of-the-image:tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("For example: "),a("code",[e._v("docker push myusername/example-app:0.0.1-SNAPSHOT")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("The first time your run this command it will have to push all of the layers. Subsequent runs will be much faster")])]),e._v(" "),a("p",[e._v("Output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" docker push myusername/example-app:0.0.1-SNAPSHOT\nThe push refers to repository [docker.io/myusername/example-app]\n545361404af4: Pushed\n...\nf1b5933fe4b5: Pushed\n0.0.1-SNAPSHOT: digest: sha256:804b3b91b83094c45020b4748b344f7199e3a0b027f4f6f54109cbb3b8a1f867 size: 2626\n")])])]),a("h3",{attrs:{id:"build-your-bundle-and-publish-to-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-your-bundle-and-publish-to-git"}},[e._v("#")]),e._v(" Build your bundle and publish to git")]),e._v(" "),a("ol",[a("li",[e._v("Populate the bundle with the generated micro frontends using "),a("code",[e._v("./buildBundle.sh")]),e._v(" or "),a("code",[e._v("npm run populate-bundle")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./buildBundle.sh\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Important")]),e._v("\nThe bundle population with the micro frontends requires some time to be processed. You should be able to follow the progress of the operation on the console.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("The output of your bundle will be in the top level "),a("code",[e._v("bundle")]),e._v(" directory in your microservice")])]),e._v(" "),a("li",[a("p",[e._v("Commit your bundle files to git, separate from the top-level project files.")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" bundle "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" .gitignore\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" bundle/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Init Git repository"')]),e._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("Create a new git repository and name it "),a("code",[e._v("my-bundle")]),e._v(" (or a name of your choice).")])]),e._v(" "),a("li",[a("p",[e._v("Add your remote repository as origin and push the bundle.")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" origin https://your/remote/repository.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push -u origin master\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Publish a git tag using the following commands.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git tag -a "v0.0.1" -m "My first tag"\ngit push --tags\n')])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Install the "),a("code",[e._v("entando-bundler")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @entando/entando-bundler@6.3.2\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Generate a custom resource for your bundle. You should provide your own bundle name, namespace, and repository URL.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("entando-bundler from-git --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("bundle-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("entando --repository"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-repository-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --dry-run "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" example-bundle.yaml\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[e._v("Make your bundle available in Kubernetes")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f example-bundle.yaml -n entando\n")])])]),a("h2",{attrs:{id:"install-the-bundle-into-an-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-bundle-into-an-application"}},[e._v("#")]),e._v(" Install the bundle into an application")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log into the "),a("code",[e._v("App Builder")])])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("code",[e._v("Component Repository")]),e._v(" in the upper right")])]),e._v(" "),a("li",[a("p",[e._v("Find your bundle and select "),a("code",[e._v("Install")])])])]),e._v(" "),a("p",[e._v("At this point the Entando platform will download and install the Docker image for your microservice and install the micro frontends into the Entando application. You can add those micro frontend widgets to the page(s) of your choice.")]),e._v(" "),a("p",[e._v("You can use an Entando provided page or follow "),a("RouterLink",{attrs:{to:"/next/tutorials/cms/page-management.html"}},[e._v("this tutorial")]),e._v(" to create your own page and/or page template. Please note that an application based on the Entando blueprint expects a user to be authenticated so you'll need to include the "),a("code",[e._v("keycloak_auth")]),e._v(" UX fragment in your page template.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);