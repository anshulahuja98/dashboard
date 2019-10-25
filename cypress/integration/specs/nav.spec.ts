
import {NavbarPage} from "../../pages/navbarPage";

// Check Cluster items links in nav
describe("Navbar", () => {
  before(() => {
    NavbarPage.visit();
  });
  describe("Navbar Cluster Items", () => {
    it("cluster", () => {
      NavbarPage.clickNavItemById('cluster');
      // NavbarPo.assertUrlContains('cluster');
    });
    it("clusterroles", () => {
      NavbarPage.clickNavItemById('nav-clusterrole');
      NavbarPage.assertUrlContains('clusterrole')
    });
    it("namespaces", () => {
      NavbarPage.clickNavItemById('nav-namespace');
      NavbarPage.assertUrlContains('namespace')
    });
    it("nodes", () => {
      NavbarPage.clickNavItemById('nav-node');
      NavbarPage.assertUrlContains('node')
    });
    it("persistentvolume", () => {
      NavbarPage.clickNavItemById('nav-persistentvolume');
      NavbarPage.assertUrlContains('persistentvolume')
    });
    it("storageclass", () => {
      NavbarPage.clickNavItemById('nav-storageclass');
      NavbarPage.assertUrlContains('storageclass')
    });
  });
//   describe("Namespace/Overview Items", () => {
//     it("overview", () => {
//       cy.get("#nav-overview").click();
//       cy.url().should('contains', 'overview');
//     });
//     // Namespace selector
//     it("namespace", () => {
//       cy.visit("/");
//       cy.get("#nav-namespace-selector").click();
//       cy.get("mat-option").contains("kube-public").click();
//       cy.url().should('contains', '?namespace=kube-public');
//       cy.visit("/");
//     });
//   });
//   describe("Navbar Workloads Items", () => {
//     it("workloads", () => {
//       cy.get("#nav-workloads").click();
//       cy.url().should('contains', 'workloads');
//     });
//     it("cronjob", () => {
//       cy.get("#nav-cronjob").click();
//       cy.url().should('contains', 'cronjob');
//     });
//     it("daemonset", () => {
//       cy.get("#nav-daemonset").click();
//       cy.url().should('contains', 'daemonset');
//     });
//     it("deployment", () => {
//       cy.get("#nav-deployment").click();
//       cy.url().should('contains', 'deployment');
//     });
//     it("job", () => {
//       cy.get("#nav-job").click();
//       cy.url().should('contains', 'job');
//     });
//     it("pod", () => {
//       cy.get("#nav-pod").click();
//       cy.url().should('contains', 'pod');
//     });
//     it("replicaset", () => {
//       cy.get("#nav-replicaset").click();
//       cy.url().should('contains', 'replicaset');
//     });
//     it("replicationcontroller", () => {
//       cy.get("#nav-replicationcontroller").click();
//       cy.url().should('contains', 'replicationcontroller');
//     });
//     it("statefulset", () => {
//       cy.get("#nav-statefulset").click();
//       cy.url().should('contains', 'statefulset');
//     });
//   })
//   describe("Discover and Load Balancing Items", () => {
//     it("discovery", () => {
//       cy.get("#nav-discovery").click();
//       cy.url().should('contains', 'discovery');
//     });
//     it("ingress", () => {
//       cy.get("#nav-ingress").click();
//       cy.url().should('contains', 'ingress');
//     });
//     it("service", () => {
//       cy.get("#nav-service").click();
//       cy.url().should('contains', 'service');
//     });
//     describe("Config and Storage Items", () => {
//       it("config", () => {
//         cy.get("#nav-config").click();
//         cy.url().should('contains', 'config');
//       });
//       it("configmap", () => {
//         cy.get("#nav-configmap").click();
//         cy.url().should('contains', 'configmap');
//       });
//       it("persistentvolumeclaim", () => {
//         cy.get("#nav-persistentvolumeclaim").click();
//         cy.url().should('contains', 'persistentvolumeclaim');
//       });
//       it("secret", () => {
//         cy.get("#nav-secret").click();
//         cy.url().should('contains', 'secret');
//       });
//     });
//     /*  Need to show this optionally when atleast one plugin exists
//     it("plugin", () => {
//       cy.get("#nav-plugin").click();
//       cy.url().should('contains', 'plugin');
//     });
//     */
//
//   });
//   describe("Misc Items", () => {
//     it("customresourcedefinition", () => {
//       cy.get("#nav-customresourcedefinition").click();
//       cy.url().should('contains', 'customresourcedefinition');
//     });
//     it("settings", () => {
//       cy.get("#nav-settings").click();
//       cy.url().should('contains', 'settings');
//     });
//     it("about", () => {
//       cy.get("#nav-about").click();
//       cy.url().should('contains', 'about');
//     });
//   })
// });
});

