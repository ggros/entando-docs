(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{823:function(e,t,n){"use strict";n.r(t);var a=n(27),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"business-objective"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#business-objective"}},[e._v("#")]),e._v(" Business Objective")]),e._v(" "),n("p",[e._v("The Entando Process Driven Applications plugin is built to provide a\nrich and full featured user experience to allow for the management and\ncompletion of business processes and automation. The UX is delivered a\ngeneral purpose UX layer built using micro frontends that can be\nutilized for any business process or task engine. Customers drive the UX\nlayer by utilizing a pre-developed Entando integration or by\nimplementing a set of interfaces on the server side. The backend is a\nSpring Boot microservice that provides a pluggable interface allowing\nfor the injection of any underlying process or automation toolkit. The\ninterfaces and steps for creating a new PDA backend implementation are\nprovided below. This document provides an overview of the Entando\nProcess Driven Apps (PDA) plugin. The initial section covers the\nbusiness functionality and user facing micro frontends. The second\nsection covers the architecture and the points of extension for the PDA\nplugin. The third provides a detailed technical overview for developers\nto add new functionality to a PDA implementation.")]),e._v(" "),n("h1",{attrs:{id:"terminology"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),n("h2",{attrs:{id:"micro-frontend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#micro-frontend"}},[e._v("#")]),e._v(" Micro Frontend")]),e._v(" "),n("p",[e._v("A Micro frontend architecture is an approach to developing web\napplication as a composition of small frontend apps. Instead of writing\na large monolith frontend application, the application is broken down\ninto domain specific micro frontends, which are self-contained and can\nbe developed and deployed independently.")]),e._v(" "),n("h2",{attrs:{id:"process-automation-manager-pam"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#process-automation-manager-pam"}},[e._v("#")]),e._v(" Process Automation Manager (PAM)")]),e._v(" "),n("p",[e._v("A business process automation engine built and maintained by Red Hat")]),e._v(" "),n("h2",{attrs:{id:"business-process-modeling-notation-bpmn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#business-process-modeling-notation-bpmn"}},[e._v("#")]),e._v(" Business Process Modeling Notation (bpmn)")]),e._v(" "),n("p",[e._v("Business Process Model and Notation (BPMN) is a graphical representation\nfor specifying business processes in a business process model.")]),e._v(" "),n("h2",{attrs:{id:"decision-model-and-notation-dmn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision-model-and-notation-dmn"}},[e._v("#")]),e._v(" Decision Model and Notation (dmn)")]),e._v(" "),n("p",[e._v("Decision Model and Notation is a standard published by the Object\nManagement Group. It is a standard approach for describing and modeling\nrepeatable decisions within organizations to ensure that decision models\nare interchangeable across organizations.")]),e._v(" "),n("h2",{attrs:{id:"back-end-for-front-end-bff"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#back-end-for-front-end-bff"}},[e._v("#")]),e._v(" Back End for Front End (BFF)")]),e._v(" "),n("p",[e._v("A microservice architecture allows teams to iterate quickly and to\ndevelop technology to scale rapidly. The Backend for Frontend (BFF)\narchitecture is a type of pattern built with microservices. The key\ncomponent of this pattern is an application that connects the front-end\nof your application with the backend. This BFF Code Pattern will help\nyou build that component according to IBM’s best practices.")]),e._v(" "),n("h1",{attrs:{id:"pda-micro-frontends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pda-micro-frontends"}},[e._v("#")]),e._v(" PDA Micro Frontends")]),e._v(" "),n("p",[e._v("This section provides an overview of each of the micro frontends (MFE)\nthat are available as part of the Entando PDA plugin. In cases below\nwhere there are details specific to the PAM implementation they are\nprovided for that MFE. When extending the integration layer to other\nengines or custom implementations it will be up to the integrating team\nto define behavior and datasource for each MFE.")]),e._v(" "),n("h2",{attrs:{id:"task-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#task-list"}},[e._v("#")]),e._v(" Task List")]),e._v(" "),n("p",[e._v("The task list MFE provides a user with a list of visible tasks that are\neither assigned to that user or that are potentially ownable by that\nuser. In the default implementation the visible tasks are limited to a\nsingle process instance. At configuration time the application designer\nis given the option to select a set of columns that will be visible in\nthe task list for that page.")]),e._v(" "),n("h3",{attrs:{id:"pam-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pam-implementation"}},[e._v("#")]),e._v(" PAM Implementation")]),e._v(" "),n("p",[e._v("The default PAM implementation makes the top level task fields available\nin the task list for selection. It is possible to fetch task and process\nvariables for rendering in the task list but these values are excluded\nby default due to the additional API call overhead required.")]),e._v(" "),n("h2",{attrs:{id:"task-details"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#task-details"}},[e._v("#")]),e._v(" Task Details")]),e._v(" "),n("p",[e._v("The task details MFE renders detailed information about a given task.\nThe task details widget is intended to give the final user processing a\ntask the information necessary to complete the task at hand. The task\ndetails are rendered in a read only grid. See the styling section below\nfor changing and customizing the layout.")]),e._v(" "),n("h3",{attrs:{id:"pam-implementation-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pam-implementation-2"}},[e._v("#")]),e._v(" PAM Implementation")]),e._v(" "),n("p",[e._v("The PAM integration renders task variables in the task details widget.")]),e._v(" "),n("h2",{attrs:{id:"task-comments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#task-comments"}},[e._v("#")]),e._v(" Task Comments")]),e._v(" "),n("p",[e._v("The task comments MFE gives the user the ability to view notes attached\nto a given task and to add new notes to a task.")]),e._v(" "),n("h3",{attrs:{id:"pam-implementation-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pam-implementation-3"}},[e._v("#")]),e._v(" PAM Implementation")]),e._v(" "),n("p",[e._v("The PAM implementation reads and publishes notes to the comments\nendpoint")]),e._v(" "),n("h2",{attrs:{id:"task-forms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#task-forms"}},[e._v("#")]),e._v(" Task Forms")]),e._v(" "),n("p",[e._v("The task form implementation renders a form specific to a task and gives\nthe user the ability to complete that form. The form implementation is a\nwrapper around a JSON schema that describes the layout, style and\ncontent of the form. It is up to the backend implementation to transform\nto the schema and default ux layout needed to render the form. See the\ntechnical documentation below for more on the JSON schema based\nimplementation.")]),e._v(" "),n("h3",{attrs:{id:"pam-implementation-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pam-implementation-4"}},[e._v("#")]),e._v(" PAM Implementation")]),e._v(" "),n("p",[e._v("The PAM implementation of forms depends on the presence of a form\ndefinition being present on the PAM task. The Entando PAM engine\nimplementation transforms from the PAM format to the JSON schema to\nrender the form. And it transforms the API format back to the PAM format\nbased on the form definition in PAM. There are some limitations on form\ncustomization due to the format required to return data to PAM. See the\nforms section in the technical documentation for more information.")]),e._v(" "),n("h2",{attrs:{id:"attachments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attachments"}},[e._v("#")]),e._v(" Attachments")]),e._v(" "),n("p",[e._v("The attachments MFE gives the user to view documents attached to a\ntask/case/process and to add new documents to a task/case/process.")]),e._v(" "),n("h3",{attrs:{id:"pam-implementation-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pam-implementation-5"}},[e._v("#")]),e._v(" PAM Implementation")]),e._v(" "),n("p",[e._v("The PAM implementation posts the documents to the PAM endpoints for\nstorage. Future features will include using Entando document storage for\nstoring documents and a pluggable document management interface.")]),e._v(" "),n("h2",{attrs:{id:"new-process-form"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-process-form"}},[e._v("#")]),e._v(" New Process Form")]),e._v(" "),n("p",[e._v("The new process form renders a form that allows the final user to\nprovide the information necessary to instantiate a new business process\ninstance. The technology for generating the process form is the same as\nthe JSON schema definition used for task forms. === PAM Implementation\nThe PAM implementation depends on a form definition being attached to\nthe process definition. Entando transforms the PAM representation into a\nJSON schema form that can be rendered to the final user.")]),e._v(" "),n("h2",{attrs:{id:"summary-card"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary-card"}},[e._v("#")]),e._v(" Summary Card")]),e._v(" "),n("p",[e._v("The summary card MFE provides a view into aggregate data for the process\nimplementation. The rendered information includes a total value, a trend\nvalue, and a selector for timeframe. The summary card allows the\napplication developer to select a request for rendering the requested\ninformation which maps to a call in the underlying engine to provide the\nsummarized data.")]),e._v(" "),n("h3",{attrs:{id:"pam-implementation-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pam-implementation-6"}},[e._v("#")]),e._v(" PAM Implementation")]),e._v(" "),n("p",[e._v("The PAM implementation of the summary card widget relies on the PAM\ncustom query functionality. The PAM PDA engine exposes configuration\nthat allows users/developers to define a custom query in a config file\nthat will be executed to render the summary card. This implementation\nallows the data rendered on the summary cards to be changed via\nconfiguration. In the application there is a properties file that allows\nthe implementer to provide a custom query for each of the cards.")]),e._v(" "),n("h2",{attrs:{id:"totals-over-time"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#totals-over-time"}},[e._v("#")]),e._v(" Totals Over Time")]),e._v(" "),n("p",[e._v("The totals over time MFE provides a dual axis line/bar graph providing\ntrend information about the process environment. The MFE also provides\nthree summary values for comparison over the same time period.")]),e._v(" "),n("h3",{attrs:{id:"pam-implementation-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pam-implementation-7"}},[e._v("#")]),e._v(" PAM Implementation")]),e._v(" "),n("p",[e._v("The PAM implementation of the totals over time MFE utilizes custom\nqueries to fetch the summary data rendered in the chart. The queries\nused in the implementation are defined in configuration files in the MFE\nand can be updated to render data specific to a given implementation.")]),e._v(" "),n("h1",{attrs:{id:"customizing-the-process-driven-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-process-driven-application"}},[e._v("#")]),e._v(" Customizing the Process Driven Application")]),e._v(" "),n("h2",{attrs:{id:"styling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[e._v("#")]),e._v(" Styling")]),e._v(" "),n("p",[e._v("The Entando PDA MFEs are styled via a material UI theme. That theme can\nbe downloaded and updated here:\n"),n("a",{attrs:{href:"https://github.com/entando/frontend-libraries/tree/master/packages/entando-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/frontend-libraries/tree/master/packages/entando-ui"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"implementing-a-new-engine-or-integrating-a-new-task-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementing-a-new-engine-or-integrating-a-new-task-source"}},[e._v("#")]),e._v(" Implementing a New Engine or Integrating a New Task Source")]),e._v(" "),n("p",[e._v("Implementing a new Engine for Process Driven Applications means to\ncreate a new Java Project and implement the interfaces defined in the\npda-core-engine project. So, the new project should include the\npda-core-engine as a dependency. To see an implementation in action,\ntake a look at the pda-redhatpam-engine project, which implements the\nRed Hat PAM engine integration. After the engine is implemented, the JAR\nfile resulting from the implementation should be available in the\nclasspath for entando-process-driven-plugin, which is the project that\nis ultimately executed and exposes the Rest APIs for the frontend\napplication. One way to do that is by publishing the engine\nimplementation to a Maven repository and adding it as a dependency to\nthe entando-process-driven-plugin project. Below are the descriptions of\nthe key classes and interfaces in the pda-core-engine project that need\nto be inherited or implemented when creating a new engine\nimplementation:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Engine: This class represents a BPM engine and exposes the services\nthat are available for that specific implementation. It is intended\nto be inherited and the subclass should provide the real\nimplementation for each service by calling the superclass\nconstructor with the service implementations as arguments. If any\nservice is not supported, a null value should be passed to the\ncorresponding constructor argument. The engine can provide\nimplementations for the the following service interfaces:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("TaskService: defines service methods for task retrieval from the\nBPM engine.")])]),e._v(" "),n("li",[n("p",[e._v("TaskDefinitionService: defines service methods related to task\ndefinition. A task definition specifies which fields or columns\nare available for all task instances.")])]),e._v(" "),n("li",[n("p",[e._v("TaskCommentService: defines service methods related to task\ncomment manipulation. It should be implemented if the task\ncomment is supported by the engine.")])]),e._v(" "),n("li",[n("p",[e._v("TaskAttachmentService: defines service methods to operate on\ntask attachments. It should be implemented if the engine\nsupports file attachment on the task.")])]),e._v(" "),n("li",[n("p",[e._v("TaskFormService: defines service methods for task form\noperations, like retrieving the form definition and submitting a\nform. The Form object can be used to render a form dynamically.")])]),e._v(" "),n("li",[n("p",[e._v("TaskLifecycleService: defines service methods related to the\ntask lifecycle. The lifecycle operations move the task from one\nstate to another.")])]),e._v(" "),n("li",[n("p",[e._v("TaskLifecycleBulkService: defines methods for bulk lifecycle\noperations. Like the TaskLifecycleService, methods here move the\ntask from one state to another, but this interface works with\nmultiple tasks at a time.")])]),e._v(" "),n("li",[n("p",[e._v("ProcessService: defines service methods for process definitions\noperations.")])]),e._v(" "),n("li",[n("p",[e._v("ProcessFormService: defines service methods for process form\noperations, like retrieving the form definition and submitting a\nform. The Form object can be used to render a form dynamically.")])]),e._v(" "),n("li",[n("p",[e._v("GroupService: define service methods related to groups from the\nBPM engine.")])])])])]),e._v(" "),n("h2",{attrs:{id:"page-templates-and-layout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#page-templates-and-layout"}},[e._v("#")]),e._v(" Page Templates and Layout")]),e._v(" "),n("p",[e._v("Page templates are page templates that facilitate rapid development of\npages and allow adding pre-made components - widgets - just by drag &\ndropping. Templating language used in page models is parsed by Apache\nFreeMarker template engine. To create a new page model, go to the Admin\npanel and select UX Pattern > Page Models. Press “Add” and you will be\nredirected to the page model creation screen. Add the page model code\nand page model name. Depending on the version you are using you will\nneed to provide a XML or JSON schema. This schema is used to generate\nthe page layout in page configuration screen - it’s used to drag & drop\nwidgets on the page and helps users visualize where each widget will be\nplaced on the page. Basic schema could look like this")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('{\n  "frames": [\n    {\n      "pos": 0,\n      "descr": "Widget description",\n      "mainFrame": false,\n      "defaultWidget": null,\n      "sketch": {\n        "x2": 1,\n        "y2": 0,\n        "x1": 0,\n        "y1": 0\n      }\n    }\n  ]\n}\n')])])]),n("p",[e._v("Each item in the frames array represents a widget frame (slot).")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("pos - a position index (starts from zero); this value is used in\nAPIs to address specific widget on the page")])]),e._v(" "),n("li",[n("p",[e._v("descr - widget frame description that is displayed in page\nconfiguration screen")])]),e._v(" "),n("li",[n("p",[e._v("mainFrame - The primary frame on the page model")])]),e._v(" "),n("li",[n("p",[e._v("defaultWidget - widget code for a default widget to use in this\nframe; page model developer can help out users and suggest the\ndefault widgets to use (e.g., header and footer widgets)")])]),e._v(" "),n("li",[n("p",[e._v("sketch - an object with 4 coordinates on x and y axises; this allows\nthe developer to place the widgets on the visual representation of\nthe page model’s frames.")])])]),e._v(" "),n("p",[e._v("Sketch’s x and y values go from 0 to 11 (similar to columns in\nBootstrap), so if you want to place a 2x2 frame at the top left corner\nof the page, the values would be x1: 0, x2: 1 y1: 0 y2: 1.")]),e._v(" "),n("p",[e._v("After you create the JSON/XML schema for the widgets, you can start\nworking on the page template itself. It’s a HTML template that contains\nreferences to the frames you have added in schema. To add a frame in a\nspecific place of the page, just add "),n("code",[e._v("<@wp.show frame=0 />")]),e._v(", where frame\nis the pos variable from the schema. Do not forget to add\n"),n("code",[e._v('<#assign wp=JspTaglibs["/aps-core"]>')]),e._v(" at the top of your template, it\nwill provide access to wp variable.")]),e._v(" "),n("p",[e._v("After you are done with your page model, go to Page designer > Page\ntree and create a new page by pressing “Add”. Fill the needed\ninformation and under Settings > Page Model select your newly created\npage model. Press “Save and Configure” and you will be redirected to the\npage configuration screen where you will be able to drag & drop the\navailable widgets onto the free frames. Set up your widgets (not all\nframes need to be filled) and publish the page. To see your page you can\npress “Preview” or go to\n"),n("code",[e._v("`<YOUR_ENVIRONMENT_URL>/<LOCALE>/<PAGE_CODE>.page")]),e._v('. If your pages\nshare common parts such as GTM scripts, consider using fragments.\nFragments are like shared code snippets - just add <@wp.fragment\ncode="<FRAGMENT_CODE>" escapeXml=false /> to your page template and\nthe code inside the fragment will be added to your page.')]),e._v(" "),n("h2",{attrs:{id:"creating-a-new-pda-mfe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-pda-mfe"}},[e._v("#")]),e._v(" Creating a new PDA MFE")]),e._v(" "),n("p",[e._v("There are no limitations on the stack that could be used to create PDA\nMFEs. Custom Elements are a great way to hide implementation details\nwhile providing a neutral interface to others. To create a simple PDA\nMFE, implement your solution using technologies you are familiar with\nand wrap it in a custom element. Build your solution with a custom\nelement and upload the built files (Settings > File Browser) in\n/public/ folder. Go to "),n("code",[e._v("UX Pattern > Widget")]),e._v(" section of the admin panel\nand press “Add” to add a new widget. Enter widget code, titles, select\ngroup (for free access to everybody, select “Free Access”), and fill the\nCustom UI:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<#assign wp=JspTaglibs["/aps-core"]>\n<script src="<@wp.resourceURL />path/from/static/bundle.js"><\/script>\n<your-custom-element parameter=”value” />\n')])])]),n("p",[n("code",[e._v('<#assign wp=JspTaglibs["/aps-core"]>')]),e._v(" - provides access to wp variable\nthat is used to get resource URL. After you add the widget, go to the\npage tree, select a page where you would like to use the widget and\nconfigure it. Drag and drop the widget into a frame and publish the\npage.")]),e._v(" "),n("h2",{attrs:{id:"communication-between-mfes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#communication-between-mfes"}},[e._v("#")]),e._v(" Communication between MFEs")]),e._v(" "),n("p",[e._v("Communication between MFEs can be achieved using Custom Events. Each\nwidget can define events that it will emit and register to events that\nare important to it.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("const createWidgetEvent = eventType => {\n  return payload => {\n    const widgetEvent = new CustomEvent(eventType, { payload });\n    window.dispatchEvent(widgetEvent);\n  };\n};\n\n\nconst subscribeToWidgetEvent = (eventType, eventHandler) => {\n  window.addEventListener(eventType, eventHandler);\n  return () => {\n    window.removeEventListener(eventType, eventHandler);\n  };\n};\n")])])]),n("p",[e._v("Custom element then creates the events it emits and registers to the\nevents that it wants to react to")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("constructor(props) {\n  super(props);\n\n  // other code\n\n  this.onClickSubmit = createWidgetEvent(‘myWidget.onSubmit’);\n}\n\nconnectedCallback() {\n\n  // other code\n\n  this.unsubscribeFromWidgetEvents = subscribeToWidgetEvent(\n    ‘otherWidget.onClickClear’,\n    () => {\n      // callback function when otherWidget fires the onClickClear custom event\n    }\n  }\n}\n")])])]),n("h1",{attrs:{id:"technical-documentation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#technical-documentation"}},[e._v("#")]),e._v(" Technical Documentation")]),e._v(" "),n("h2",{attrs:{id:"micro-frontend-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#micro-frontend-overview"}},[e._v("#")]),e._v(" Micro Frontend Overview")]),e._v(" "),n("h3",{attrs:{id:"task-forms-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#task-forms-2"}},[e._v("#")]),e._v(" Task forms")]),e._v(" "),n("p",[e._v("Widgets containing form (e.g., task completion form widget) use JSON\nschema to dynamically create forms. Widget implementation uses\nreact-jsonshema-form library that converts forms’ JSON schemas into\nReact components. Our initial implementation uses Material UI components\nvia Material UI theme library rjsf-material-ui as baseline and has\nEntando specific templates, widgets and fields (which are\nreact-jsonshema-form terms for parts of forms). In this section you will\nlearn about basic setup of the form, but if you would like to learn\nmore, please refer to react-jsonshema-form documentation. Themed JSON\nform is created using the withTheme() method from the\nreact-jsonschema-form package")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import { withTheme } from 'react-jsonschema-form';\nimport { Theme as MuiRJSForm } from 'rjsf-material-ui';\n\nconst JSONForm = props => {\n\n  const ThemedForm = withTheme(MuiRJSForm);\n\n  // ...\n\n  return (\n    <ThemedForm\n    schema={formSchema}\n    uiSchema={uiSchema}\n    {...customTemplates}\n    widgets={customWidgets}\n    formData={formData}\n    onSubmit={e => onSubmitForm(e)}\n    >\n  );\n};\n\nexport default JSONForm;\n")])])]),n("p",[e._v("For JSON Form to work, the form schema is mandatory. It’s a JSON\ndefinition of the form’s structure. Users can also provide form data via\nformData variable, which should follow the structure of JSON schema; and\nUI schema using uiSchema variable, which allows users to customise the\nform’s UI (components, rules, types, etc.) To test JSON schema, UI\nschema and form data, you can use react-jsonschema-form sandbox\nenvironment. Custom Entando templates, widgets, and fields provide a\npossibility to customise the layout of the form using Grid components.\nTo specify what area a field or subform should fill, users can provide\nsize parameter in UI schema’s ui:options object. Size refers to Material\nUI’s grid column widths (Material UI documentation) where the area the\nfrom can take up is divided into 12 columns and value 12 (a default\nvalue if size is not provided) means the field or subform should take up\nall 12 columns. That means that size should be a value from 1 to 12. If\ntwo fields that are next to each other have size values 8 and 4\nrespectively - they will fit into one row, first field being 2 times\nwider than the second field. User can also provide innerSize parameter\nto size the input inside the field. This helps with formatting - if user\nwants a two column layout and have smaller input fields inside these\ncolumns. Multicolumn layout can also be achieved using\ngenerateColumnedOFT(columnSize) functionality, basically providing the\ndefault columnSize to the created form. generateColumnedOFT returns an\nObjectFieldTemplate that is used as a template for all object fields\n(fields that contain properties inside of them). To help us understand\nthe mapping between JSON schema and UI schema lets define an example\nschema:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$id": "http://entando.org/schemas/pda-form.json",\n  "title": "Mortgage Application Form",\n  "type": "object",\n  "properties": {\n    "Application": {\n      "title": "Application",\n    "type": "object",\n    "required": [],\n    "properties": {\n        "mortgageamount": {\n          "type": "integer",\n          "title": "Mortgage amount",\n          "description": "Mortgage amount"\n        },\n        "downpayment": {\n          "type": "integer",\n          "title": "Down Payment",\n          "description": "Down Payment"\n        },\n        "applicant": {\n          "title": "Applicant",\n          "type": "object",\n          "required": [],\n          "properties": {\n            "name": {\n              "type": "string",\n              "title": "Name",\n              "description": "Name",\n              "maxLength": 100\n            },\n            "annualincome": {\n              "type": "integer",\n              "title": "Annual Income",\n              "description": "Annual Income"\n            }\n          }\n        },\n        "property": {\n          "title": "Property",\n          "type": "object",\n          "required": [],\n          "properties": {\n            "age": {\n              "type": "integer",\n              "title": "Age of property",\n              "description": "Age of property"\n            },\n            "address": {\n              "type": "string",\n              "title": "Address of property",\n              "description": "Address of property",\n              "maxLength": 100\n               }\n          }\n        }\n      }\n    },\n    "inlimit": {\n      "type": "boolean",\n    "title": "Is mortgage application in limit?"\n    }\n  }\n}\n')])])]),n("p",[e._v("From this JSON (you can copy & paste it into the react-jsonschema-form\nsandbox) we can see that there is a main form with a title “Mortgage\nApplication Form”. Root “Mortgage Application Form” form has two\nproperties - one is a subform "),n("code",[e._v("Application")]),e._v(" and the second one is just a\ncheckbox field (field ID is inlimit). Application subform contains 2\nfields: Mortgage amount (field ID is mortgageamount) and Down Payment\n(field ID is downpayment); and two subforms - Applicant (field ID is\napplicant) and Property (field ID is property). Applicant subform\ncontains 2 fields - Name (field ID is name) and Annual Income (field ID\nis annualincome). Property subform contains 2 fields - Age of property\n(field ID is age) and Address of property (field ID is address) By\ndefault (without providing UI schema) they are all listed one field per\nrow. To use Entando’s implementation of Grid layout, users have to\nprovide UI schema with details about each field. For example, if we\nwould like to have a layout that looks like this (fields are marked\n"),n("code",[e._v("[ field name ]")]),e._v("):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("+----------------------------------------------------------------------------+\n| Mortgage Application Form                                                  |\n+----------------------------------------------------------------------------+\n| Application                                                                |\n+----------------------------------+-----------------------------------------+\n| [Mortgage amount]                | [Down Payment]                          |\n+----------------------------------+-----------------+-----------------------+\n| Applicant                                          | Property              |\n+----------------------------------+-----------------+-----------------------+\n| [Name]                           | [Annual Income] | [Age of property]     |\n+----------------------------------+-----------------+-----------------------+\n|                                                    | [Address of property] |\n+----------------------------------------------------+-----------------------+\n")])])]),n("p",[e._v("To set up the UI schema you have to define each field you want to\ncustomise by addressing using the field IDs - to add options to\nApplicant’s Name field, you will have to create an object tree going\nfrom root object through Application —> Applicant —> Name (using IDs\nit’s Application.applicant.name). UI schema for the table layout defined\nabove would look like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("{\n  Application: {\n    'ui:options': {\n      size: 12, // <-- this value is not mandatory as size is 12 columns-wide by default\n    },\n    mortgageamount: {\n      'ui:disabled': true, // <-- user can define fields disabled at UI schema level\n      'ui:options': {\n        size: 6, // <-- Mortgage amount field should take up half of the row\n      },\n    },\n    downpayment: {\n      'ui:options': {\n        size: 4, // <-- Down payment field should take up the other half of the row\n      },\n    },\n    applicant: {\n      'ui:options': {\n        size: 8, // <-- Applicant subform should take up 8 out of 12 columns\n      },\n      name: {\n        'ui:options': {\n          size: 8, // <-- Applicant name field should take up 8 columns in the 8 columns that Applicant subform occupies\n        },\n      },\n      annualincome: {\n        'ui:options': {\n          size: 4, // <-- Annual Income field taking up the remaining 4 columns\n        },\n      },\n    },\n    property: {\n      'ui:options': {\n        size: 4, // <-- Property subform should take up the remaining 4 out of 12 columns\n      },\n      // note that property's fields are not mentioned - defaulting them to 12 columns in are that is available to them\n    },\n  },\n};\n\nAs Material UI components are used for field templates, there might be a need to pass some Material UI options into the field. You can do that by adding muiProps object to the ui:options.\nFor example, if you would like to make the Down payment field resizable, you can add multiline: true to muiProps option. If you want to make the field take up multiple rows by default, add rows and rowsMax fields. The latter limits how many rows should be added until the scroll bar is shown.\ndownpayment: {\n  'ui:options': {\n    size: 4,\n    muiProps: {\n      multiline: true,\n      rows: 2,\n      rowsMax: 4\n    }\n  }\n}\n")])])]),n("h2",{attrs:{id:"widgets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#widgets"}},[e._v("#")]),e._v(" Widgets")]),e._v(" "),n("p",[e._v('Different types of widgets can be applied by passing the type via\n"ui:widget". Property tells the form which UI widget should be used to\nrender a field. You can read about react-jsonschema-form supported\nwidgets here.')]),e._v(" "),n("h2",{attrs:{id:"building-from-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source"}},[e._v("#")]),e._v(" Building From source")]),e._v(" "),n("p",[e._v("Reference the component projects for instructions to build from source.\n"),n("a",{attrs:{href:"https://github.com/entando/entando-process-driven-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-process-driven-plugin"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://github.com/entando/entando-process-driven-plugin/tree/master/widgets",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-process-driven-plugin/tree/master/widgets"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://github.com/entando/pda-redhatpam-engine",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/pda-redhatpam-engine"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://github.com/entando/pda-core-engine",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/pda-core-engine"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"code-style"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code-style"}},[e._v("#")]),e._v(" Code Style")]),e._v(" "),n("p",[e._v("See: "),n("a",{attrs:{href:"https://github.com/entando/entando-code-style",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-code-style"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"sonar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonar"}},[e._v("#")]),e._v(" Sonar")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://sonarcloud.io/organizations/entando/projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://sonarcloud.io/organizations/entando/projects"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);