(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{566:function(e,t,n){e.exports=n.p+"assets/img/ecr-page.5342c4c7.png"},940:function(e,t,n){"use strict";n.r(t);var a=n(27),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-customize-bundle-info-shown-in-entando-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-customize-bundle-info-shown-in-entando-app-builder"}},[e._v("#")]),e._v(" How to customize bundle info shown in Entando App Builder")]),e._v(" "),a("p",[a("img",{attrs:{src:n(566),alt:"ECR User interface in Entando App Builder"}})]),e._v(" "),a("p",[e._v("In the image above you can see an example of a bundle as is displayed in the ECR user interface inside the Entando App Builder.")]),e._v(" "),a("p",[e._v("The corresponding custom-resource file on Kubernetes is similar to this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: entando.org/v1\nkind: EntandoDeBundle\nmetadata:\n  name: simple-entando-bundle\nspec:\n  details:\n    name: \"Entando Bundle\"\n    description: An example of an Entando bundle\n    dist-tags:\n      latest: v0.0.1\n    time:\n      created: '2020-05-20T15:59:21.946Z'\n      modified: '2020-05-20T15:59:21.946Z'\n      v0.0.1: '2020-05-20T15:59:21.946Z'\n    versions:\n      - v0.0.1\n    keywords:\n      - entando6\n    author: Entando\n    thumbnail: >-\n      data:image/jpeg;base64,....\n  tags:\n    # ....\n")])])]),a("p",[e._v("In order to change the UI elements, you need to update the custom-resource in accordance with this table")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Field")]),e._v(" "),a("th",[e._v("UI Element")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("spec.details.name")])]),e._v(" "),a("td",[e._v("Set the bundle title")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("spec.details.description")])]),e._v(" "),a("td",[e._v("Set the bundle description (only visible in the list presentation format)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("spec.details.thumbnail")])]),e._v(" "),a("td",[e._v("Set the bundle thumbnail, expressed as a base64 encoded string")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("spec.details.dist-tags.latest")])]),e._v(" "),a("td",[e._v("Set what's the latest version of the bundle")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);