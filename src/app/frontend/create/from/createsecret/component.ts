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

import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CsrfTokenService} from '../../../common/services/global/csrftoken';
import {CONFIG} from '../../../index.config';

/*
export interface CreateSecretDialogMeta {
  namespace: string;
}
*/

export interface CreateSecretComponentMeta {
  namespace: string;
}

@Component({
  selector: 'kd-create-secret-component',
  templateUrl: 'template.html',
})
export class CreateSecretComponent implements OnInit {
  form: FormGroup;

  private readonly config_ = CONFIG;

  /**
   * Max-length validation rule for secretName.
   */
  secretNameMaxLength = 253;

  /**
   * Pattern validation rule for secretName.
   */
  secretNamePattern = new RegExp(
    '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
  );

  /**
   * Pattern validating if the secret data is Base64 encoded.
   */
  dataPattern = new RegExp('^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$');

  constructor(
    public dialogRef: MatDialogRef<CreateSecretComponent>,
    public data_: CreateSecretComponentMeta,
    private readonly http_: HttpClient,
    private readonly csrfToken_: CsrfTokenService,
    private readonly matDialog_: MatDialog,
    private readonly fb_: FormBuilder,
  ) {}

  ngOnInit(): void {}
}
