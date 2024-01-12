# lotus-address

> 省市区三级联动选择组件 适用H5/APP/微信小程序

> 注意事项：重要事情说三遍 重要事情说三遍 重要事情说三遍！！！！当前组件一定要放在最外层节点，不然会点击了，组件不生效，千万记住了。

## how to use

### 组件引入使用

1.xx.vue

```sh
import lotusAddress from "../../components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
```

2.页面使用

```sh
    <lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
```

3.参数说明
(1)参数定义:

```sh
    data () {
        return {
            lotusAddressData:{
                visible:false,
                provinceName:'',
                cityName:'',
                townName:'',
            },
            region:''
        }
    }
```

4.方法定义与调用：

```sh
    components:{
        "lotus-address":lotusAddress
    },
    methods: {
        //打开picker
        openPicker() {
            this.lotusAddressData.visible = true;
            this.lotusAddressData.provinceName = '广东省';
            this.lotusAddressData.cityName = '广州市';
            this.lotusAddressData.townName = '白云区';
        },
        //回传已选的省市区的值
        choseValue(res){
            //res数据源包括已选省市区与省市区code
            console.log(res);
            this.lotusAddressData.visible = res.visible;//visible为显示与关闭组件标识true显示false隐藏
            //res.isChose = 1省市区已选 res.isChose = 0;未选
            if(res.isChose){
                this.lotusAddressData.provinceName = res.province;//省
                this.lotusAddressData.cityName = res.city;//市
                this.lotusAddressData.townName = res.town;//区
                this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
            }
        }
    }
```

项目展示：

![寄件小助手](https://express.winglau14.com/static/yjd-express.jpg?20230407)

开源不易 可以请我喝杯冰的吗？^_^

![开源不易](https://express.winglau14.com/static/winglau14.jpg?20230407)
