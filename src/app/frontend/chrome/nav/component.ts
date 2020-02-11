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
  public showCronjobs: boolean;
  public showDaemonsets: boolean;
  public showDeployments: boolean;
  public showJobs: boolean;
  public showPods: boolean;
  public showReplicasets: boolean;
  public showReplicationcontrollers: boolean;
  public showStatefulsets: boolean;

  constructor(
    private readonly navService_: NavService,
    private readonly pluginsConfigService_: PluginsConfigService,
    private readonly http_: HttpClient,
  ) {

  }

  ngOnInit(): void {
    this.navService_.setNav(this.nav_);
    this.navService_.setVisibility(true);
    this.showCronjobs = this.canIListResource('cronjobs');
    this.showDaemonsets = this.canIListResource('daemonsets');
    this.showDeployments = this.canIListResource('deployments');
    this.showJobs = this.canIListResource('jobs');
    this.showPods = this.canIListResource('pods');
    this.showReplicasets = this.canIListResource('replicasets');
    this.showReplicationcontrollers = this.canIListResource('replicationcontrollers');
    this.showStatefulsets = this.canIListResource('statefulsets');

    console.log(this.showCronjobs,
      this.showDaemonsets,
      this.showDeployments,
      this.showJobs,
      this.showPods,
      this.showReplicasets,
      this.showReplicationcontrollers,
      this.showStatefulsets)
  }

  canIListResource(resource: String): boolean {
    var show = false;
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http_.get<CanIResponse>(`api/v1/cani/${resource}`, httpOptions)
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
