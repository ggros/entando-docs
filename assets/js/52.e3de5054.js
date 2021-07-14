(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{334:function(e,t,n){e.exports=n.p+"assets/img/edit-widget-screen-2.798d0990.png"},506:function(e,t,n){e.exports=n.p+"assets/img/edit-widget-screen.47019c90.png"},854:function(e,t,n){"use strict";n.r(t);var a=n(27),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"add-a-configuration-screen-in-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-configuration-screen-in-app-builder"}},[e._v("#")]),e._v(" Add a Configuration Screen in App Builder")]),e._v(" "),a("p",[e._v("Entando 6 widgets can be customized through an App Builder configuration\nscreen so the citizen developers can avoid writing ad-hoc additional\ncode.")]),e._v(" "),a("p",[e._v("In Entando 6, the configuration screen is also a micro frontend, which\ncan also be defined as a web component. That means you can develop and\ntest it in isolation, without a running Entando instance.")]),e._v(" "),a("h2",{attrs:{id:"create-react-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app"}},[e._v("#")]),e._v(" Create React App")]),e._v(" "),a("p",[e._v("Let’s start with the boilerplate provided by "),a("a",{attrs:{href:"https://create-react-app.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create React\nApp"),a("OutboundLink")],1),e._v(", probably the most popular one.")]),e._v(" "),a("p",[a("code",[e._v("npx create-react-app my-widget-config --use-npm")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("my-widget-config\n├── README.md\n├── node_modules\n├── package.json\n├── .gitignore\n├── public\n│   ├── favicon.ico\n│   ├── index.html\n│   ├── logo192.png\n│   ├── logo512.png\n│   ├── manifest.json\n│   └── robots.txt\n└── src\n    ├── App.css\n    ├── App.js\n    ├── App.test.js\n    ├── index.css\n    ├── index.js\n    ├── logo.svg\n    ├── serviceWorker.js\n    └── setupTests.js\n")])])]),a("p",[e._v("Then, type "),a("code",[e._v("cd my-widget-config")]),e._v(" and "),a("code",[e._v("npm start")]),e._v(" to start the app.")]),e._v(" "),a("h2",{attrs:{id:"add-input-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-input-field"}},[e._v("#")]),e._v(" Add Input Field")]),e._v(" "),a("p",[e._v("Let’s start with a simple form: only an input with a label. So, let’s\nedit "),a("code",[e._v("App.js")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\n\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { name: ''};\n  }\n\n  handleNameChange(value) {\n    this.setState(prevState => ({\n      ...prevState,\n      name: value,\n    }));\n  }\n\n  render() {\n    const { name } = this.state;\n    return (\n      <div>\n        <h1>Sample Entando 6 Widget Configuration</h1>\n        <label htmlFor=\"name\">Name</label>\n        <input id=\"name\" onChange={e => this.handleNameChange(e.target.value)} value={name} />\n      </div>\n    );\n  }\n}\n\nexport default App;\n")])])]),a("p",[e._v("You are free to use your favorite form handling library e.g.,\n"),a("a",{attrs:{href:"https://jaredpalmer.com/formik",target:"_blank",rel:"noopener noreferrer"}},[e._v("Formik"),a("OutboundLink")],1),e._v(",\n"),a("a",{attrs:{href:"https://redux-form.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("redux-form"),a("OutboundLink")],1),e._v(" (that requirese redux) or others.")]),e._v(" "),a("p",[e._v("In regards to styling, since this is going to be an App Builder screen,\nwe strongly suggest using "),a("a",{attrs:{href:"https://www.patternfly.org/v3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PatternFly\nv3"),a("OutboundLink")],1),e._v(" ("),a("code",[e._v("patternfly")]),e._v(" and "),a("code",[e._v("patternfly-react")]),e._v("\npackages) to keep UX coherence.")]),e._v(" "),a("h2",{attrs:{id:"custom-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-element"}},[e._v("#")]),e._v(" Custom Element")]),e._v(" "),a("p",[e._v("Now, let’s add the web component that will wrap the entire React app.\nLet’s name it "),a("code",[e._v("WidgetElement")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nclass WidgetElement extends HTMLElement {\n  constructor() {\n    super();\n    this.reactRootRef = React.createRef();\n    this.mountPoint = null;\n  }\n\n  get config() {\n    return this.reactRootRef.current ? this.reactRootRef.current.state : {};\n  }\n\n  set config(value) {\n    return this.reactRootRef.current.setState(value);\n  }\n\n  connectedCallback() {\n    this.mountPoint = document.createElement('div');\n    this.appendChild(this.mountPoint);\n    ReactDOM.render(<App ref={this.reactRootRef} />, this.mountPoint);\n  }\n}\n\ncustomElements.define('my-widget-config', WidgetElement);\n\nexport default WidgetElement;\n")])])]),a("p",[e._v("Its responsibility is rendering the react app and syncing the react app\nstate in a "),a("code",[e._v("config")]),e._v(" property, that "),a("em",[e._v("must")]),e._v(" be named that way. The key to\nApp builder communication is that it works in three steps:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("App Builder reads "),a("code",[e._v("config")]),e._v(" property when the widget config screen is\nrendered")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("config")]),e._v(" property is mutated when a user configures the widget")])]),e._v(" "),a("li",[a("p",[e._v("When a user saves the config, App Builder retrieves it (again, from\nthe "),a("code",[e._v("config")]),e._v(" property) and persists it through Entando APIs")])])]),e._v(" "),a("p",[e._v("This means the widget developer can focus on the configuration screens\nwithout having to call Entando APIs to read or write configuration.")]),e._v(" "),a("p",[e._v("One more JS file to update: "),a("code",[e._v("index.js")]),e._v(". Starting from this")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(<App />, document.getElementById('root'));\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();\n")])])]),a("p",[e._v("You only have to import "),a("code",[e._v("WidgetElement")]),e._v(" plus the css, if needed.\nSomething like")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import './index.css';\nimport './WidgetElement';\n")])])]),a("p",[e._v("We assume we don’t need a service worker for the widget, so we can\ndelete serviceWorker.js.")]),e._v(" "),a("p",[e._v("To ensure our web component is working we have to edit\n"),a("code",[e._v("public/index.html")]),e._v(". Remove "),a("code",[e._v('<div id="root"></div>')]),e._v(" from the "),a("code",[e._v("body")]),e._v(" (we\nprogrammatically generated the react root in the "),a("code",[e._v("connectedCallback")]),e._v("\nmethod of "),a("code",[e._v("WidgetElement")]),e._v(") and add our new web component tag\n"),a("code",[e._v("<my-widget />")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>React App</title>\n  </head>\n  <body>\n    <my-widget-config />\n  </body>\n</html>\n')])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("the web component tag name ("),a("code",[e._v("my-widget-config")]),e._v(" in this tutorial)\n"),a("em",[e._v("must")]),e._v(" match the first parameter of the "),a("code",[e._v("customElements.define")]),e._v("\nmethod.")])]),e._v(" "),a("p",[e._v("The page should auto reload and…​congrats, you’re running an Entando 6\nwidget in isolation.")]),e._v(" "),a("h2",{attrs:{id:"configuration-screen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-screen"}},[e._v("#")]),e._v(" Configuration Screen")]),e._v(" "),a("p",[e._v("Before integrating the widget config screen, we need some widget info.\nOpen App Builder, go to UX Patterns → Widgets and click on the installed\nwidget that we’re creating the configuration screen for.")]),e._v(" "),a("p",[e._v("You’ll see a screen like:")]),e._v(" "),a("p",[a("img",{attrs:{src:n(506),alt:"Edit widget screen"}})]),e._v(" "),a("p",[e._v("Next, we’ll build our widget before embedding it into the Entando 6\ninstance. From the react project root, type")]),e._v(" "),a("p",[a("code",[e._v("npm run build")])]),e._v(" "),a("p",[e._v("and a "),a("code",[e._v("build/static")]),e._v(" directory will be generated. Copy it into the\nEntando 6 instance under\n"),a("code",[e._v("src\\main\\webapp\\cmsresources\\my-widget-config")]),e._v(", then rename")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/runtime~main.c7dcdf0b.js")]),e._v(" to "),a("code",[e._v("js/runtime.js")]),e._v("\n(bootstrapping logic)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/2.230b21ef.chunk.js")]),e._v(" to "),a("code",[e._v("js/vendor.js")]),e._v(" (third-party\nlibraries)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/main.1fd3965a.chunk.js")]),e._v(" to "),a("code",[e._v("js/main.js")]),e._v(" (app)")])])]),e._v(" "),a("p",[e._v("Now, edit again the widget and update the "),a("code",[e._v("configUI")]),e._v(" field.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('{\n  "customElement": "my-widget-config",\n  "resources": [\n    "my-widget-config/static/js/runtime.js",\n    "my-widget-config/static/js/vendor.js",\n    "my-widget-config/static/js/main.js"\n  ]\n}\n')])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("It is possible to keep the original names in order to avoid\npotential caching issues, but then you will have to update the\n"),a("em",[e._v("Config UI")]),e._v(" field in the App Builder widget screen each time a new\nversion of the widget is deployed.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("configUI")]),e._v(" is a JSON object, so pay attention to save a\nwell-formed one (the integrated JSON editor will help you)")])]),e._v(" "),a("li",[a("p",[e._v("value for "),a("code",[e._v("customElement")]),e._v(" must match the name of custom tag in\n"),a("code",[e._v("index.html")]),e._v(" and the one passed as parameter to\n"),a("code",[e._v("customElements.define")]),e._v(" in "),a("code",[e._v("WidgetElement")])])])])]),e._v(" "),a("p",[e._v("Last step: configure a page in App Builder, drag our widget into the\npage model slot and you’ll see the configuration screen we just built.")]),e._v(" "),a("h1",{attrs:{id:"display-widget-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-widget-configuration"}},[e._v("#")]),e._v(" Display Widget Configuration")]),e._v(" "),a("p",[e._v("So, we already created a react micro frontend widget and configuration\nscreen to customize a "),a("em",[e._v("name")]),e._v(" field.")]),e._v(" "),a("p",[e._v("In this tutorial we will display that field in our micro frontend\nwidget.")]),e._v(" "),a("h2",{attrs:{id:"add-attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-attribute"}},[e._v("#")]),e._v(" Add Attribute")]),e._v(" "),a("p",[e._v("Edit "),a("code",[e._v("WidgetElement")]),e._v(" to add attribute handling to the custom element,\nand make re-render our app when an attribute changes. Now, the "),a("em",[e._v("name")]),e._v("\nattribute is being read from the custom element and passed as a prop to\nthe react root component ("),a("em",[e._v("App")]),e._v(").")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nconst ATTRIBUTES = {\n  name: 'name',\n};\n\nclass WidgetElement extends HTMLElement {\n\n  static get observedAttributes() {\n    return Object.values(ATTRIBUTES);\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    if (!Object.values(ATTRIBUTES).includes(name)) {\n      throw new Error(`Untracked changed attribute: ${name}`);\n    }\n    if (this.mountPoint && newValue !== oldValue) {\n      this.render();\n    }\n  }\n\n  connectedCallback() {\n    this.mountPoint = document.createElement('div');\n    this.appendChild(this.mountPoint);\n    this.render();\n  }\n\n  render() {\n    const name = this.getAttribute(ATTRIBUTES.name);\n    ReactDOM.render(<App name={name} />, this.mountPoint);\n  }\n}\n\ncustomElements.define('my-widget', WidgetElement);\n\nexport default WidgetElement;\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[a("code",[e._v("attributeChangedCallback")]),e._v(" is also a custom elements lifecycle hook\nmethod.")])]),e._v(" "),a("h2",{attrs:{id:"display-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-input"}},[e._v("#")]),e._v(" Display Input")]),e._v(" "),a("p",[e._v("Edit the "),a("code",[e._v("App")]),e._v(" component now, to make it display the "),a("code",[e._v("name")]),e._v(" prop.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\nimport './App.css';\n\nfunction App({name}) {\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <p>\n          Hello, {name}!\n        </p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n")])])]),a("p",[e._v("Now, to ensure our custom element is working we can edit\n"),a("code",[e._v("public/index.html")]),e._v(" and set a value for the "),a("em",[e._v("name")]),e._v(" attribute of the\ncustom element.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>React App</title>\n  </head>\n  <body>\n    <my-widget name="Marco"/>\n  </body>\n</html>\n')])])]),a("p",[e._v('After page reload, you should be able to display a simple "Hello,\nMarco!" message.')]),e._v(" "),a("h2",{attrs:{id:"build-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-it"}},[e._v("#")]),e._v(" Build It")]),e._v(" "),a("p",[e._v("From the react project root, type:")]),e._v(" "),a("p",[a("code",[e._v("npm run build")])]),e._v(" "),a("p",[e._v("and the "),a("code",[e._v("build/static")]),e._v(" directory will be (re)generated. Copy it again\ninto the Entando 6 instance under\n"),a("code",[e._v("src\\main\\webapp\\resources\\static\\my-widget")]),e._v(", then rename")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/runtime~main.c7dcdf0b.js")]),e._v(" to "),a("code",[e._v("js/runtime.js")]),e._v("\n(bootstrapping logic)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/2.230b21ef.chunk.js")]),e._v(" to "),a("code",[e._v("js/vendor.js")]),e._v(" (third-party\nlibraries)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("js/main.1fd3965a.chunk.js")]),e._v(" to "),a("code",[e._v("js/main.js")]),e._v(" (app)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("css/main.d1b05096.chunk.js")]),e._v(" to "),a("code",[e._v("css/main.css")]),e._v("\n(stylesheet)")])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("you could keep the original names in order to avoid potential caching\nissues, but then you will have to update the "),a("em",[e._v("Custom UI")]),e._v(" field in the\nApp Builder widget screen every time a new version of the widget is\ndeployed.")])]),e._v(" "),a("p",[e._v("If the application server you’re running does not have hot deploy\nenabled, restart it.")]),e._v(" "),a("h2",{attrs:{id:"update-widget-in-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-widget-in-app-builder"}},[e._v("#")]),e._v(" Update Widget in App Builder")]),e._v(" "),a("p",[e._v("Open the Entando App Builder, go to UX Patterns → Widgets, find the\nwidget "),a("em",[e._v("My Widget")]),e._v(" and click to edit it.")]),e._v(" "),a("p",[e._v("You’ll see a screen like this one")]),e._v(" "),a("p",[a("img",{attrs:{src:n(334),alt:"Edit widget screen"}})]),e._v(" "),a("p",[e._v("Update the "),a("em",[e._v("Custom UI")]),e._v(" field from:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<#assign wp=JspTaglibs[ "/aps-core"]>\n<link rel="stylesheet" type="text/css" href="<@wp.resourceURL />static/my-widget/static/css/main.css">\n<script async src="<@wp.resourceURL />static/my-widget/static/js/runtime.js"><\/script>\n<script async src="<@wp.resourceURL />static/my-widget/static/js/vendor.js"><\/script>\n<script async src="<@wp.resourceURL />static/my-widget/static/js/main.js"><\/script>\n<my-widget />\n')])])]),a("p",[e._v("to")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<#assign wp=JspTaglibs[ "/aps-core"]>\n<link rel="stylesheet" type="text/css" href="<@wp.resourceURL />static/my-widget/static/css/main.css">\n<script async src="<@wp.resourceURL />static/my-widget/static/js/runtime.js"><\/script>\n<script async src="<@wp.resourceURL />static/my-widget/static/js/vendor.js"><\/script>\n<script async src="<@wp.resourceURL />static/my-widget/static/js/main.js"><\/script>\n<@wp.currentWidget param="config" configParam="name" var="configName" />\n<my-widget name="${configName}" />\n')])])]),a("p",[e._v("We basically added a JSTL tag to extract a field (under "),a("code",[e._v("configParam")]),e._v(")\nfrom the config field of the current widget and put it in a "),a("code",[e._v("configName")]),e._v("\nvariable, that we pass to the custom element.")]),e._v(" "),a("p",[e._v('Save the widget and reload the page that contains the widget: you’ll see\n"Hello, Marco!" as expected.')])])}),[],!1,null,null,null);t.default=i.exports}}]);