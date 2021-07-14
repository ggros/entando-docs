(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1027:function(e,t,n){"use strict";n.r(t);var o=n(27),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h3",{attrs:{id:"cluster-resource-limits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cluster-resource-limits"}},[e._v("#")]),e._v(" Cluster Resource Limits")]),e._v(" "),n("p",[e._v("Entando needs a well-defined amount of resources in order to start and Kubernetes takes care of using only the needed amount of them.\nHowever, you can choose to impose boundaries on the minimum and maximum used/allocated resources by updating the downloaded "),n("code",[e._v("entando.yaml")]),e._v(" file and setting the "),n("code",[e._v("ENTANDO_K8S_OPERATOR_IMPOSE_DEFAULT_LIMITS")]),e._v(" property to true.\nIn this way, Entando will allocate a predefined amount of resources and Kubernetes will act more strictly checking for resource availability. See "),n("a",{attrs:{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes resources"),n("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),n("p",[e._v("By not imposing limits you can minimize initial needed resources and startup time, leaving Kubernetes free to manage its resources as he wants.\nBy imposing limits you can obtain a better-balanced system.")]),e._v(" "),n("p",[e._v("It's important to note that, accordingly to the Kubernetes documentation, in order to deploy on a namespace with a\n"),n("a",{attrs:{href:"https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/quota-memory-cpu-namespace/#create-a-resourcequota",target:"_blank",rel:"noopener noreferrer"}},[e._v("ResourceQuotas"),n("OutboundLink")],1),e._v(" on memory and cpu,")]),e._v(" "),n("blockquote",[n("p",[n("em",[e._v("every Container must have a memory request, memory limit, cpu request, and cpu limit")])])]),e._v(" "),n("p",[e._v("so, in that case, you will need to set "),n("code",[e._v("ENTANDO_K8S_OPERATOR_IMPOSE_DEFAULT_LIMITS")]),e._v(" to true, otherwise your deploy will fail.")]),e._v(" "),n("p",[e._v("Here you can see the detailed resource requests/limits per container:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Component")]),e._v(" "),n("th",[e._v("Mem requests")]),e._v(" "),n("th",[e._v("CPU requests")]),e._v(" "),n("th",[e._v("Mem limits")]),e._v(" "),n("th",[e._v("CPU limits")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("AppBuilderDeployableContainer")]),e._v(" "),n("td",[e._v("128Mi")]),e._v(" "),n("td",[e._v("125m")]),e._v(" "),n("td",[e._v("512Mi")]),e._v(" "),n("td",[e._v("500m")])]),e._v(" "),n("tr",[n("td",[e._v("EntandoAppDeployableContainer")]),e._v(" "),n("td",[e._v("448Mi")]),e._v(" "),n("td",[e._v("375m")]),e._v(" "),n("td",[e._v("1792Mi")]),e._v(" "),n("td",[e._v("1500m")])]),e._v(" "),n("tr",[n("td",[e._v("ComponentManagerDeployableContainer")]),e._v(" "),n("td",[e._v("192Mi")]),e._v(" "),n("td",[e._v("188m")]),e._v(" "),n("td",[e._v("768Mi")]),e._v(" "),n("td",[e._v("750m")])]),e._v(" "),n("tr",[n("td",[e._v("EntandoPluginSidecarDeployableContainer")]),e._v(" "),n("td",[e._v("192Mi")]),e._v(" "),n("td",[e._v("188m")]),e._v(" "),n("td",[e._v("768Mi")]),e._v(" "),n("td",[e._v("750m")])]),e._v(" "),n("tr",[n("td",[e._v("EntandoPluginDeployableContainer")]),e._v(" "),n("td",[e._v("256Mi")]),e._v(" "),n("td",[e._v("250m")]),e._v(" "),n("td",[e._v("1024Mi")]),e._v(" "),n("td",[e._v("1000m")])]),e._v(" "),n("tr",[n("td",[e._v("EntandoK8SServiceDeployableContainer")]),e._v(" "),n("td",[e._v("192Mi")]),e._v(" "),n("td",[e._v("250m")]),e._v(" "),n("td",[e._v("768Mi")]),e._v(" "),n("td",[e._v("1000m")])]),e._v(" "),n("tr",[n("td",[e._v("KeycloakDeployableContainer")]),e._v(" "),n("td",[e._v("192Mi")]),e._v(" "),n("td",[e._v("250m")]),e._v(" "),n("td",[e._v("768Mi")]),e._v(" "),n("td",[e._v("1000m")])])])]),e._v(" "),n("h3",{attrs:{id:"bundle-size-limitations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundle-size-limitations"}},[e._v("#")]),e._v(" Bundle size limitations")]),e._v(" "),n("p",[e._v("Entando supports bundles without size limitations, you can install as many bundles as you want and bundles as big as you desire.")]),e._v(" "),n("p",[e._v("The only thing you have to check is the "),n("code",[e._v("<YOUR-APP-NAME>-de-pvc")]),e._v(" volume size. Each bundle is installed in that volume, so when it reaches its maximum capacity you will not be able to install bundles anymore.")]),e._v(" "),n("p",[e._v("You can find "),n("code",[e._v("quickstart-de-pvc")]),e._v(" volume inside de-container container, that is part of the pod named "),n("code",[e._v("<YOUR-APP-NAME>-server-deployment-***")]),e._v(", where asterisks should assume values based on your instance.\nFeel free to set its size accordingly to your needs.")])])}),[],!1,null,null,null);t.default=a.exports}}]);