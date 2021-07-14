(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{513:function(e,t,a){e.exports=a.p+"assets/img/app-builder-ecr-bundle-component-filters.e6a2bd7a.png"},514:function(e,t,a){e.exports=a.p+"assets/img/app-builder-ecr-bundle-status-filters.42d46f34.png"},515:function(e,t,a){e.exports=a.p+"assets/img/app-builder-ecr-bundle-textual-search.e6cd0ae6.png"},865:function(e,t,a){"use strict";a.r(t);var n=a(27),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"filtering-bundles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filtering-bundles"}},[e._v("#")]),e._v(" Filtering bundles")]),e._v(" "),n("p",[e._v("ECR bundles are filterable by component, by status or by textual research.")]),e._v(" "),n("h2",{attrs:{id:"filtering-bundles-by-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filtering-bundles-by-component"}},[e._v("#")]),e._v(" Filtering bundles by component")]),e._v(" "),n("p",[e._v("ECR bundles are filterable by component from App Builder user interface.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(513),alt:"App Builder bundle filtering"}})]),e._v(" "),n("p",[e._v("Behind the scenes, filtering is done using the label-based filtering provided out of the box from Kubernetes.")]),e._v(" "),n("p",[e._v("To enable filtering of a bundle, the custom-resource representing the bundle on the Entando Cluster needs to contain the correct labels. An important note on the values to add the "),n("code",[e._v("labels")]),e._v(" field, even if to correctly define a label in a k8s resource both the key and the value are required, from an Entando point of view only the key part of the label is used for filtering. The value could be set to anything, but our reccomendation is to use "),n("code",[e._v('"true"')]),e._v(" for clarity and simplicity.")]),e._v(" "),n("h3",{attrs:{id:"supported-labels-keys-are"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supported-labels-keys-are"}},[e._v("#")]),e._v(" Supported labels keys are:")]),e._v(" "),n("table",[n("colgroup",[n("col",{attrs:{width:"50%"}}),e._v(" "),n("col",{attrs:{width:"50%"}})]),e._v(" "),n("thead",[n("tr",{staticClass:"header"},[n("th",{attrs:{align:"left"}},[e._v("Label entry")]),e._v(" "),n("th",{attrs:{align:"left"}},[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",{staticClass:"odd"},[n("td",{attrs:{align:"left"}},[n("p",[n("code",[e._v('widget: "true"')])])]),e._v(" "),n("td",{attrs:{align:"left"}},[n("p",[e._v("The bundle contains one or more microfrontends (widgets) ")])])]),e._v(" "),n("tr",{staticClass:"even"},[n("td",{attrs:{align:"left"}},[n("p",[n("code",[e._v('plugin: "true"')])])]),e._v(" "),n("td",{attrs:{align:"left"}},[n("p",[e._v("The bundle contains one or more microservices (plugins)")])])]),e._v(" "),n("tr",{staticClass:"odd"},[n("td",{attrs:{align:"left"}},[n("p",[n("code",[e._v('fragment: "true"')])])]),e._v(" "),n("td",{attrs:{align:"left"}},[n("p",[e._v("The bundle contains one or more fragments")])])]),e._v(" "),n("tr",{staticClass:"odd"},[n("td",{attrs:{align:"left"}},[n("p",[n("code",[e._v('pageTemplate: "true"')])])]),e._v(" "),n("td",{attrs:{align:"left"}},[n("p",[e._v("The bundle contains one or more page templates")])])]),e._v(" "),n("tr",{staticClass:"even"},[n("td",{attrs:{align:"left"}},[n("p",[n("code",[e._v('contentType: "true"')])])]),e._v(" "),n("td",{attrs:{align:"left"}},[n("p",[e._v("The bundle contains one or more content types")])])]),e._v(" "),n("tr",{staticClass:"odd"},[n("td",{attrs:{align:"left"}},[n("p",[n("code",[e._v('contentTemplate: "true"')])])]),e._v(" "),n("td",{attrs:{align:"left"}},[n("p",[e._v("The bundle contains one or more content templates")])])])])]),e._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),n("p",[e._v("Here is an example of the metadata for a ecr bundle containg micro-frontends, some microservices and page templates")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('apiVersion: entando.org/v1\nkind: EntandoDeBundle\nmetadata:\n  name: demo-bundle\n  labels:\n    widget: "true"\n    plugin: "true"\n    pageTemplate: "true"\nspec:\n  details:\n  ...\n')])])]),n("h2",{attrs:{id:"filtering-bundles-by-status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filtering-bundles-by-status"}},[e._v("#")]),e._v(" Filtering bundles by status")]),e._v(" "),n("p",[e._v("ECR bundles are filterable by status from App Builder user interface.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(514),alt:"App Builder bundle filtering"}})]),e._v(" "),n("p",[e._v("You can choose to see the full list of the bundles available in Kubernetes cluster by selecting the "),n("code",[e._v("Explore")]),e._v(" tab, or the list of the currently installed bundles by clicking on the "),n("code",[e._v("Installed")]),e._v(" tab.")]),e._v(" "),n("h2",{attrs:{id:"filtering-bundles-by-textual-search"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filtering-bundles-by-textual-search"}},[e._v("#")]),e._v(" Filtering bundles by textual search")]),e._v(" "),n("p",[e._v("You can search for bundles containing some keywords by executing a textual search.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(515),alt:"App Builder bundle filtering"}})]),e._v(" "),n("p",[e._v("You can open the menu on the left to select which field to target.")]),e._v(" "),n("p",[e._v("If you are creating a new bundle, keep in mind the textual search is performed against data extracted from the bundle CRD file.")]),e._v(" "),n("h2",{attrs:{id:"mixing-search-criteria"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mixing-search-criteria"}},[e._v("#")]),e._v(" Mixing search criteria")]),e._v(" "),n("p",[e._v("You can mix all previous search criteria to refine the scope of your search as you want.\nFor example, you could search for all available bundles ("),n("code",[e._v("Explore")]),e._v(" tab) that contain "),n("code",[e._v("Page Templates")]),e._v(" components\n(using the checkboxes) and the word "),n("code",[e._v("Login")]),e._v(" in their name (using the textual search).")])])}),[],!1,null,null,null);t.default=r.exports}}]);