(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{905:function(e,t,a){"use strict";a.r(t);var o=a(27),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"building-a-docker-image-for-the-entando-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-a-docker-image-for-the-entando-core"}},[e._v("#")]),e._v(" Building a Docker Image for the Entando Core")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Java 8")])]),e._v(" "),a("li",[a("p",[e._v("Docker installed locally\n("),a("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/docker-for-windows/install/"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("maven")])]),e._v(" "),a("li",[a("p",[e._v("Access to a docker repository (docker.io or other)")])])]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("This tutorial will take you through the basic steps to create a docker\nimage from an Entando core application. A more detailed guide with\nadditional commands and configuration can be found here:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/entando-k8s/entando-de-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-de-app"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the application at:\n"),a("a",{attrs:{href:"https://github.com/entando-k8s/entando-de-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-de-app"),a("OutboundLink")],1),e._v(" using")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git clone https://github.com/entando-k8s/entando-de-app\n")])])])]),e._v(" "),a("li",[a("p",[e._v("On a command line, cd into the entando-de-app you just cloned:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd entando-de-app\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Build a docker image from the core app")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mvn clean package -Pwildfly -Pderby docker:build\n")])])])]),e._v(" "),a("li",[a("p",[e._v("View the images installed on your local docker instance")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker images\n")])])]),a("p",[e._v("Look for")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("entando/entando-de-app:latest\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Create a repository on your docker repository to house your new\napplication")])]),e._v(" "),a("li",[a("p",[e._v("Re-tag the image you just built with your repo")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" docker tag entando/entando-de-app:latest <YOUR-USER>/<YOUR-REPO-NAME>:latest\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Push the Image to your Repository")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker push <YOUR-USER>/<YOUR-REPO-NAME>:latest\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);