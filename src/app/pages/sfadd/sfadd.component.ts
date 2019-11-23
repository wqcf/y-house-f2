import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FWQK, FWQL, FWSYQK, RKQK, GZSX } from '../../model/sf.class';
import { NzInputDirective } from 'ng-zorro-antd/input';

interface ItemData {
  id: string;
  name: string;
  age: string;
  address: string;
}
@Component({
  selector: 'app-sfadd',
  templateUrl: './sfadd.component.html',
  styleUrls: ['./sfadd.component.scss']
})
export class SfaddComponent implements OnInit {

  constructor() { }

  fwqk = new FWQK();
  fwql = new FWQL();
  fwsyqk = new FWSYQK();
  rkqk = new RKQK();
  gzsx = new GZSX();
  editId: string | null;
  listOfData = [];
  @ViewChild(NzInputDirective, { static: false, read: ElementRef }) inputElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleClick(e: any): void {
    var cls = e.target.className;
    if (this.editId && cls.indexOf("content_input") < 0) {
      this.editId = null;
    }
  }

  addRow(): void {
    this.listOfData = [
      {
        id: "1",
        name: `Edward King `,
        age: '32',
        address: `London, Park Lane no.`
      }
    ];
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  startEdit(id: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.editId = id;
  }

  ngOnInit() {
    this.addRow();
    var preview = document.querySelector('#preview');
    var eleFile = document.querySelector('#file');
    eleFile.addEventListener('change', function () {
      var file = this.files[0];
      // 确认选择的文件是图片                
      if (file.type.indexOf("image") == 0) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          // 图片base64化
          var newUrl = this.result;
          preview['style'].backgroundImage = 'url(' + newUrl + ')';
          preview['style'].height = 900+'px';
        };
      }
    });
  }
}
