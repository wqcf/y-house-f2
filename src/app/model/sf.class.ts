export class FWQK {
    public xh = ""; //序号
    public bd = ""; //标段
    public qlr = ""; // 权力人
    public qytdmj = ""; // 全员土地面积（平方米）
    public fwzl = "";//房屋坐落
    public jfcd = "无";//纠纷程度
}
export class FWQL {
    public ghpj = "";//规划批件
    public gzs = "";//规划批件
    public gdxpj = "";//公社、大队、小队批件
    public fypj = ""; // 法院判决
    public fdjc = ""; //法定继承
    public zxxc = ""; //自行析产：
    public lyfg = ""; //离异分割
    public qt = ""; //其他
    public sjjs = ""; // 实际间数
    public scjm = ""; //首层建面
    public dxs = ""; //地下室
    public ecjyx = ""; //二层及以上
    public ynpf = ""; //院内棚房
    public ywf = ""; //院外房（平方米）：
    public wjpz = ""; //未经批准建筑面积小计（平方米）：
    public qyjz = ""; //全院建筑面积合计（平方米）：
    public nszm = ""; //营业执照：
    public sjjs2 = ""; //实际间数（间）：
    public yymj = ""; //营业面积（平方米）：
    public gpmj = ""; //鸽棚面积（平方米）：
    public xgzh = ""; //信鸽足环证数（个）：
    public qswj = ""; //权属文件来源
}
export class FWSYQK{
    public zz = "";//自住
    public cz = "";//出租
    public kz = "";//空置
    public hj = "";//合计
}
export class RKQK{
    public hkbs = "";//户口本数（个）：
    public hjrs = "";//户籍人数（人）：
    public fzcrs = "";//非在册人数（人）：
    public djgxs = "";//代际关系数：
}

export class GZSX{
    public jtcy= ""; //家庭成员中代际关系、有无纠纷及程度、思想动态：
    public glyl= ""; //关联院落及关联面积（直系亲属院落及继承面积）：
    public siqu= ""; //市、区重点上访人：
    public sfdy= "";//是否党员和公职人员：
    public qt= "";//是否党员和公职人员：
}
export class SCMJ {
    public id;
    constructor() {
        this.id = this.uuid();
    }

    public uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }
}