(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{766:function(e,t,a){"use strict";a.r(t);var o=a(27),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-on-amazon-elastic-kubernetes-service-eks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-amazon-elastic-kubernetes-service-eks"}},[e._v("#")]),e._v(" Installation on Amazon Elastic Kubernetes Service (EKS)")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS CLI"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("AWS account")]),e._v(" "),a("li",[e._v("kubectl")]),e._v(" "),a("li",[e._v("A domain or the ability to purchase one. Can use route 53 for this inside AWS if doing it all inline")]),e._v(" "),a("li",[e._v("helm2 client")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The steps below walk you though installing the Entando platform in an EKS cluster. Generally the steps are:")]),e._v(" "),a("ul",[a("li",[e._v("Configure an IAM role to allow kubernetes to manage the cluster")]),e._v(" "),a("li",[e._v("Create an EKS cluster with 5 nodes (to allow expansion for microservices)")]),e._v(" "),a("li",[e._v("Install nginx as an ingress controller in the cluster")]),e._v(" "),a("li",[e._v("Register a domain (if you don't already have one) and configure it for wildcard subdomains.")]),e._v(" "),a("li",[e._v("Install Entando")])]),e._v(" "),a("p",[e._v("If you're already comfortable setting up an EKS cluster and installing nginx then you may be able to skip to "),a("a",{attrs:{href:"#install-the-entando-custom-resource-definitions-crds"}},[e._v("setting up Entando")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"cluster-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[e._v("#")]),e._v(" Cluster Setup")]),e._v(" "),a("p",[e._v("These steps will use the AWS console to create the cluster. If you’re already familiar with creating an EKS cluster and assigning nodes to it via the AWS cli then you can use the cli process for cluster creation as well.")]),e._v(" "),a("h3",{attrs:{id:"setup-and-connect-to-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-connect-to-the-cluster"}},[e._v("#")]),e._v(" Setup and Connect to the Cluster")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Login to AWS as a non-super admin user")]),e._v(" "),a("ul",[a("li",[e._v("If you don’t have a user besides the super admin it is recommended that you create one. Clusters created using the super admin for your account will have some restrictions that may complicate your installation.")]),e._v(" "),a("li",[e._v("Your user will need access to EKS and at least the ability to create a cluster. You may need additional policies for Route53 and other services depending on your exact configuration.")])])]),e._v(" "),a("li",[a("p",[e._v("Create an IAM role for the cluster so that AWS can provision assets. See "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html"),a("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),a("ul",[a("li",[e._v("Select "),a("code",[e._v("IAM")]),e._v(" from services")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Create role")])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("AWS Service")]),e._v(" box at the top for the type of trusted entity")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("EKS")]),e._v(" from the main list")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("EKS - Cluster")]),e._v(" under "),a("code",[e._v("Select your use case")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next:Permissions")])]),e._v(" "),a("li",[e._v("A Policy of "),a("code",[e._v("AmazonEKSClusterPolicy")]),e._v(" should already be present")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Tags")])]),e._v(" "),a("li",[e._v("(Optional) Add tags if you want")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Review")])]),e._v(" "),a("li",[e._v("Name your role (you’ll need this later), e.g. "),a("code",[e._v("my-eks-role")])])])]),e._v(" "),a("li",[a("p",[e._v("Refine the role to enable Nodegroup management and to add ELB access so that the cluster can deploy a load balancer for nginx.")]),e._v(" "),a("ul",[a("li",[e._v("Go to "),a("code",[e._v("IAM → Roles → your role")])]),e._v(" "),a("li",[e._v("Under permissions click "),a("code",[e._v("Attach policies")])]),e._v(" "),a("li",[e._v("Add a policy of "),a("code",[e._v("AmazonEKSWorkerNodePolicy")])]),e._v(" "),a("li",[e._v("Add a policy of "),a("code",[e._v("AmazonEKS_CNI_Policy")])]),e._v(" "),a("li",[e._v("Add a policy of "),a("code",[e._v("AmazonEC2ContainerRegistryReadOnly")])]),e._v(" "),a("li",[e._v("Add a policy of "),a("code",[e._v("ElasticLoadBalancingFullAccess")])])])]),e._v(" "),a("li",[a("p",[e._v("Go to "),a("code",[e._v("Services")]),e._v(" and select "),a("code",[e._v("Elastic Kubernetes Service")])])]),e._v(" "),a("li",[a("p",[e._v("Create an EKS Cluster")]),e._v(" "),a("ul",[a("li",[e._v("Add a cluster name (e.g. "),a("code",[e._v("cluster-1")]),e._v(") and click "),a("code",[e._v("Create EKS cluster")])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("1.18")]),e._v(" for the Kubernetes version")]),e._v(" "),a("li",[e._v("For "),a("code",[e._v("Cluster Service Role")]),e._v(", select the role you created above, e.g. "),a("code",[e._v("my-eks-role")]),e._v(". If you choose a different role it must have ELB permissions so the cluster can create a load balancer in "),a("code",[e._v("Networking")]),e._v(" (Step 2).")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Use the defaults for "),a("code",[e._v("Networking")]),e._v(" (Step 2) and click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Use the defaults for "),a("code",[e._v("Configure Logging")]),e._v(" (Step 3) and click "),a("code",[e._v("Next")]),e._v(".")]),e._v(" "),a("li",[e._v("Review your settings and then click "),a("code",[e._v("Create")]),e._v(". Cluster provisioning usually takes between 10 and 15 minutes.")]),e._v(" "),a("li",[e._v("See "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"),a("OutboundLink")],1),e._v(" for more information on cluster creation.")])])]),e._v(" "),a("li",[a("p",[e._v("Add a node group to the cluster")]),e._v(" "),a("ul",[a("li",[e._v("Go to "),a("code",[e._v("Services → Elastic Kubernetes Service → Clusters")]),e._v(" → Click on your cluster name.")]),e._v(" "),a("li",[e._v("Go to the "),a("code",[e._v("Compute")]),e._v(" tab")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Add Node Group")])]),e._v(" "),a("li",[a("code",[e._v("Name")]),e._v(": give your group a name, e.g. "),a("code",[e._v("node-1")])]),e._v(" "),a("li",[a("code",[e._v("Node IAM Role")]),e._v(": Select the cluster role you created above. If the role doesn't appear, verify that you added the extra policies to the role.")]),e._v(" "),a("li",[a("code",[e._v("Subnets")]),e._v(" - VPC subnets should already be setup and selected.")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Allow remote access to nodes")]),e._v(".  Follow the links to create a new SSH key pair if you don't already have one.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("AMI type: "),a("code",[e._v("Amazon Linux 2")])]),e._v(" "),a("li",[e._v("Instance type: "),a("code",[e._v("t3.medium")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("Maximum size")]),e._v(" to 5. This will be over-resourced for a "),a("code",[e._v("Getting Started")]),e._v(" experience but will leave capacity for adding microservices to your cluster without modifying the Nodegroup.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Review your settings and then click "),a("code",[e._v("Create")])])])]),e._v(" "),a("li",[a("p",[e._v("Connect "),a("code",[e._v("kubectl")]),e._v(" to the cluster")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Note:")]),e._v(" If this is a brand new setup you will need to login using the user you used to create your cluster in the console in the steps above. Make sure the users match.\n"),a("ul",[a("li",[a("code",[e._v("aws-configure")]),e._v(" (and then provide the Access key, etc.)")])])]),e._v(" "),a("li",[a("code",[e._v("aws eks --region region-code update-kubeconfig --name cluster_name")])]),e._v(" "),a("li",[e._v("More details and troubleshooting "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Your current context should now be configured for your AWS cluster. Run the command below to check:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$  kubectl config current-context\n")])])]),a("p",[e._v("Your output should look something like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("arn:aws:eks:us-east-2:483173223614:cluster/cluster-1\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"install-the-nginx-ingress-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-nginx-ingress-controller"}},[e._v("#")]),e._v(" Install the NGINX Ingress Controller")]),e._v(" "),a("ol",[a("li",[e._v("Add the NGINX controller for ingress. This depends on your role having permissions for ELB.\n"),a("ul",[a("li",[e._v("For basic nginx ingress install run this command")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.2/deploy/static/provider/aws/deploy.yaml\n")])])]),a("ul",[a("li",[e._v("See "),a("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/#aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.github.io/ingress-nginx/deploy/#aws"),a("OutboundLink")],1),e._v(" as well as "),a("a",{attrs:{href:"https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ingress-controller-elastic-kubernetes-services/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(" for more detailed install steps.")])])]),e._v(" "),a("li",[e._v("Get the ELB external URL for your nginx install\n"),a("ul",[a("li",[e._v("Run: "),a("code",[e._v("kubectl get services -n ingress-nginx")])]),e._v(" "),a("li",[e._v("Get the value of the external address (EXTERNAL-IP) for the ingress-nginx-controller:")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP                        \ningress-nginx-controller             LoadBalancer   10.100.102.83    ad234bd11a1ff4dadb44639a6bbf707e-0e0a483d966405ee.elb.us-east-2.amazonaws.com\n")])])]),a("h3",{attrs:{id:"verify-the-nginx-ingress-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-nginx-ingress-install"}},[e._v("#")]),e._v(" Verify the NGINX Ingress Install")]),e._v(" "),a("p",[e._v("We recommend setting up a test application so you can easily verify the ingress is working in your cluster. See "),a("a",{attrs:{href:"../google-cloud-platform/gke-install#verify-the-nginx-ingress-install"}},[e._v("this page")]),e._v(" for those steps. You can use your local "),a("code",[e._v("kubectl")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"install-the-entando-custom-resource-definitions-crds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-entando-custom-resource-definitions-crds"}},[e._v("#")]),e._v(" Install the Entando Custom Resource Definitions (CRDs)")]),e._v(" "),a("p",[e._v("Once per cluster you need to deploy the "),a("code",[e._v("Entando Custom Resources")]),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Download the Custom Resource Definitions (CRDs) and deploy them")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -n entando -f https://raw.githubusercontent.com/entando/entando-releases/v6.3.2/dist/ge-1-1-6/namespace-scoped-deployment/cluster-resources.yaml\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Install namespace scoped resources")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -n entando -f https://raw.githubusercontent.com/entando/entando-releases/v6.3.2/dist/ge-1-1-6/namespace-scoped-deployment/orig/namespace-resources.yaml\n")])])]),a("h2",{attrs:{id:"deploy-your-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-entando-application"}},[e._v("#")]),e._v(" Deploy Your Entando Application")]),e._v(" "),a("p",[e._v("You can now deploy your application to Amazon EKS.")]),e._v(" "),a("ol",[a("li",[e._v("Download and unpack the "),a("code",[e._v("entando-helm-quickstart")]),e._v(" release:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -sfL https://github.com/entando-k8s/entando-helm-quickstart/archive/v6.3.2.tar.gz | tar xvz\n")])])]),a("ul",[a("li",[e._v("See the included README file for more information on the following steps.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Go to the downloaded directory")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd entando-helm-quickstart-6.3.2\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Edit "),a("code",[e._v("sample-configmaps/entando-operator-config.yaml")]),e._v(" "),a("ul",[a("li",[e._v("Add "),a("code",[e._v('entando.requires.filesystem.group.override: "true"')])]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v('entando.ingress.class: "nginx"')])])])]),e._v(" "),a("li",[e._v("In "),a("code",[e._v("values.yaml")]),e._v(" in the root directory set the following value:\n"),a("ul",[a("li",[e._v("Set "),a("code",[e._v("singleHostName")]),e._v(" to the value of the "),a("code",[e._v("EXTERNAL-IP")]),e._v(" of your "),a("code",[e._v("ingress-nginx-controller")]),e._v(":\n"),a("ul",[a("li",[e._v("For example: "),a("code",[e._v("singleHostName: ad234bd11a1ff4dadb44639a6bbf707e-0e0a483d966405ee.elb.us-east-2.amazonaws.com")])])])])])]),e._v(" "),a("li",[e._v("Create the Entando namespace: "),a("code",[e._v("kubectl create namespace entando")])]),e._v(" "),a("li",[e._v("Run helm to generate the template file:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm template my-eks-app --namespace=entando ./ > my-eks-app.yaml\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Deploy Entando via "),a("code",[e._v("kubectl create -f my-eks-app.yaml")])]),e._v(" "),a("li",[e._v("Watch Entando startup "),a("code",[e._v("kubectl get pods -n entando --watch")])]),e._v(" "),a("li",[e._v("Check for the Entando ingresses using "),a("code",[e._v("kubectl describe ingress -n entando")])]),e._v(" "),a("li",[e._v("Access your app on the url for the ingress of the app builder. This will be the URL of your load balancer followed by "),a("code",[e._v("/app-builder")]),e._v(" or "),a("code",[e._v("/entando-de-app")]),e._v(" for the deployed application, e.g. "),a("code",[e._v("http://ad234bd11a1ff4dadb44639a6bbf707e-0e0a483d966405ee.elb.us-east-2.amazonaws.com/app-builder")])])]),e._v(" "),a("h2",{attrs:{id:"appendix-a-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-troubleshooting"}},[e._v("#")]),e._v(" Appendix A - Troubleshooting")]),e._v(" "),a("p",[e._v("IAM And Roles")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/56863539/getting-error-an-error-occurred-accessdenied-when-calling-the-assumerole-oper",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stackoverflow.com/questions/56863539/getting-error-an-error-occurred-accessdenied-when-calling-the-assumerole-oper"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("NGINX")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ingress-controller-elastic-kubernetes-services/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ingress-controller-elastic-kubernetes-services/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Issue with permissions for NGINX ingress:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" Warning  SyncLoadBalancerFailed   38m                 service-controller  (combined from similar events): Error syncing load balancer: failed to ensure load balancer: error creating\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);