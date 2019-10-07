import {Component, Input, OnInit} from '@angular/core';
import {StringMap} from '@api/backendapi';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ChipDialog} from '../chips/chipdialog/dialog';
import {Chip} from '../chips/component';

const URL_REGEXP = new RegExp(
  '^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!' +
    '(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1' +
    ',3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])' +
    '){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*' +
    '[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]' +
    '+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$',
  'i',
);

const MAX_CHIP_VALUE_LENGHT = 63;

@Component({
  selector: 'kd-annotations',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.scss'],
})
export class AnnotationsComponent implements OnInit {
  @Input() map: StringMap | string[];
  @Input() minChipsVisible = 2;
  keys: string[];
  isShowingAll = false;

  constructor(private readonly dialog_: MatDialog) {}

  ngOnInit(): void {
    if (!this.map) {
      this.map = [];
    }

    if (Array.isArray(this.map)) {
      this.keys = this.map as string[];
    } else {
      this.keys = Object.keys(this.map);
    }
  }

  isVisible(index: number): boolean {
    return this.isShowingAll || index < this.minChipsVisible;
  }

  isAnythingHidden(): boolean {
    return this.keys.length > this.minChipsVisible;
  }

  toggleView(): void {
    this.isShowingAll = !this.isShowingAll;
  }

  isTooLong(value: string): boolean {
    return value !== undefined && value.length > MAX_CHIP_VALUE_LENGHT;
  }

  isHref(value: string): boolean {
    return URL_REGEXP.test(value.trim());
  }

  openChipDialog(key: string, value: string): void {
    const dialogConfig: MatDialogConfig<Chip> = {
      width: '630px',
      data: {
        key,
        value,
      },
    };
    this.dialog_.open(ChipDialog, dialogConfig);
  }
}
