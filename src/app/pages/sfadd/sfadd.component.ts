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
        name: "王安第",
        yhzgx: '父子',
        sex:'男',
        cardId: "370826199910208888", 
        birthday: "2019/12/12",
        hyzk: "公告前离异",//婚姻状况（已婚/未婚/公告前离异/公告后离异）
        hksfzc: "是",//户口是否在册（是/否
        hkszd: "山东省济宁市微山县",//户口所在地（XX市XX
        sjjzdz: "北京市朝阳区",//实际居住地址
        hkqyqk: "从山东迁移到北京",//户口迁移情况（何时从何地迁入
        sfybzxzf: "共有产权房",//是否有保障性住房（如：公租房/经适房/两限房/共有产权房等）
        xgzdw: "城建院",//现工作单位及职务
        lxdh: 1825462389,//联系电话
        txdz: "北京市朝阳区潘家园模仿南里",//通讯地址
        dbbm: "2342342",//电表编码
        dh: 2,
        kt: 2,
        yxds: 1,
        rsq: 1,
        bz: '这是我测试用的'
      },
      {
        id: "2",
        name: "王安第",
        yhzgx: '父子',
        sex: '男',
        cardId: "370826199910208888", 
        birthday: "2019/12/12",
        hyzk: "公告前离异",//婚姻状况（已婚/未婚/公告前离异/公告后离异）
        hksfzc: "是",//户口是否在册（是/否
        hkszd: "山东省济宁市微山县",//户口所在地（XX市XX
        sjjzdz: "北京市朝阳区",//实际居住地址
        hkqyqk: "从山东迁移到北京",//户口迁移情况（何时从何地迁入
        sfybzxzf: "共有产权房",//是否有保障性住房（如：公租房/经适房/两限房/共有产权房等）
        xgzdw: "城建院",//现工作单位及职务
        lxdh: 1825462389,//联系电话
        txdz: "北京市朝阳区潘家园模仿南里",//通讯地址
        dbbm: "2342342",//电表编码
        dh: 2,
        kt: 2,
        yxds: 1,
        rsq: 1,
        bz: '这是我测试用的'
      },
      {
        id: "3",
        name: "王安第",
        yhzgx: '父子',
        sex:'男',
        cardId: "370826199910208888", 
        birthday: "2019/12/12",
        hyzk: "公告前离异",//婚姻状况（已婚/未婚/公告前离异/公告后离异）
        hksfzc: "是",//户口是否在册（是/否
        hkszd: "山东省济宁市微山县",//户口所在地（XX市XX
        sjjzdz: "北京市朝阳区",//实际居住地址
        hkqyqk: "从山东迁移到北京",//户口迁移情况（何时从何地迁入
        sfybzxzf: "共有产权房",//是否有保障性住房（如：公租房/经适房/两限房/共有产权房等）
        xgzdw: "城建院",//现工作单位及职务
        lxdh: 1825462389,//联系电话
        txdz: "北京市朝阳区潘家园模仿南里",//通讯地址
        dbbm: "2342342",//电表编码
        dh: 2,
        kt: 2,
        yxds: 1,
        rsq: 1,
        bz: '这是我测试用的'
      },
      {
        id: "4",
        name: "王安第",
        yhzgx: '父子',
        sex:'男',
        cardId: "370826199910208888", 
        birthday: "2019/12/12",
        hyzk: "公告前离异",//婚姻状况（已婚/未婚/公告前离异/公告后离异）
        hksfzc: "是",//户口是否在册（是/否
        hkszd: "山东省济宁市微山县",//户口所在地（XX市XX
        sjjzdz: "北京市朝阳区",//实际居住地址
        hkqyqk: "从山东迁移到北京",//户口迁移情况（何时从何地迁入
        sfybzxzf: "共有产权房",//是否有保障性住房（如：公租房/经适房/两限房/共有产权房等）
        xgzdw: "城建院",//现工作单位及职务
        lxdh: 1825462389,//联系电话
        txdz: "北京市朝阳区潘家园模仿南里",//通讯地址
        dbbm: "2342342",//电表编码
        dh: 2,
        kt: 2,
        yxds: 1,
        rsq: 1,
        bz: '这是我测试用的'
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
    console.log(this.listOfData)
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
          preview.setAttribute('src', `${newUrl}`);
          // preview['style'].backgroundImage = 'url(' + newUrl + ')';
          // preview['style'].height = 900+'px';
        };
      }
    });
  }
}
