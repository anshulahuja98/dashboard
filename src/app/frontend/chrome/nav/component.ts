// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';

import {NavService} from '../../common/services/nav/service';
import {PluginsConfigService} from '../../common/services/global/plugin';
import {CanIResponse} from "@api/backendapi";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'kd-nav',
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
})
export class NavComponent implements OnInit {
  @ViewChild(MatDrawer, {static: true}) private readonly nav_: MatDrawer;
  public showClusterroles: boolean;
  public showNamespaces: boolean;
  public showNodes: boolean;
  public showPersistentvolumes: boolean;
  public showStorageclasses: boolean;
  public showCronjobs: boolean;
  public showDaemonsets: boolean;
  public showDeployments: boolean;
  public showJobs: boolean;
  public showPods: boolean;
  public showReplicasets: boolean;
  public showReplicationcontrollers: boolean;
  public showStatefulsets: boolean;
  public showIngresses: boolean;
  public showServices: boolean;
  public showConfigmaps: boolean;
  public showPersistentvolumeclaims: boolean;
  public showSecrets: boolean;

  constructor(
    private readonly navService_: NavService,
    private readonly pluginsConfigService_: PluginsConfigService,
    private readonly http_: HttpClient,
  ) {

  }

  async ngOnInit(): void {
    this.navService_.setNav(this.nav_);
    this.navService_.setVisibility(true);

    this.showClusterroles = <boolean>await this.canIListResource('clusterroles');
    this.showNamespaces = <boolean>await this.canIListResource('namespaces');
    this.showNodes = <boolean>await this.canIListResource('nodes');
    this.showPersistentvolumes = <boolean>await this.canIListResource('persistentvolumes');
    this.showStorageclasses = <boolean>await this.canIListResource('storageclasses');
    this.showCronjobs = <boolean>await this.canIListResource('cronjobs');
    this.showDaemonsets = <boolean>await this.canIListResource('daemonsets');
    this.showDeployments = <boolean>await this.canIListResource('deployments');
    this.showJobs = <boolean>await this.canIListResource('jobs');
    this.showPods = <boolean>await this.canIListResource('pods');
    this.showReplicasets = <boolean>await this.canIListResource('replicasets');
    this.showReplicationcontrollers = <boolean>await this.canIListResource('replicationcontrollers');
    this.showStatefulsets = <boolean>await this.canIListResource('statefulsets');
    this.showIngresses = <boolean>await this.canIListResource('ingresses');
    this.showServices = <boolean>await this.canIListResource('services');
    this.showConfigmaps = <boolean>await this.canIListResource('configmaps');
    this.showPersistentvolumeclaims = <boolean>await this.canIListResource('persistentvolumeclaims');
    this.showSecrets = <boolean>await this.canIListResource('secrets');
  }

  async canIListResource(resource: String): Promise<boolean> {
    let show = false;
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    await this.http_.get<CanIResponse>(`api/v1/cani/${resource}`, httpOptions)
      .toPromise()
      .then(response => {
        console.log(response);
        show = response.allowed
      });
    console.log(show);
    return show;
  }

  showPlugin(): boolean {
    return this.pluginsConfigService_.status() === 200;
  }

  getShowPods(): boolean {
    return this.showPods;
  }
}
