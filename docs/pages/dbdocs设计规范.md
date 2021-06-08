# dbdocs软件简介
[官方网站](https://dbdocs.io/)<br />
软件采用dbml格式语法编写，[语法文档](https://www.dbml.org/docs/)

# 软件安装与使用
```bash
$ npm i dbdocs -g

$ dbdocs login  #这里需要使用github账号登录

$ dbdocs build dbdocs.dbml  #dbdocs.dbml是项目数据库代码
```

# 示例 Demo
```dbml
Project GasDetection {
    database_type: 'PostgreSQL'
    note: '''
    # GasDetection Database
    气体检测服务数据库设计
    '''
}

Table users {
    uuid uuid [pk, increment, note: "唯一标识"]
    name varchar [note: "用户昵称"]
    phone varchar [note: "手机号码"]
    password varchar [note: "密码，MD5加密"]
    created_at timestamp [default: `now()`,note: "创建时间（typeorm自动生成）"]
    updated_at timestamp [note: "更新时间（typeorm自动生成）"]
    deleted boolean [default:false, note: "是否删除（软删除支持）"]

    Indexes{
        (name,phone)
        created_at
    }

    note: "用户主表"
}

Enum device_connect_status {
    unknown [note:'未知']
    online [note:'在线']
    offline [note:'离线']
}
Table cameras {
    uuid uuid [pk, increment, note: "唯一标识"]
    name varchar [note:'摄像机名称']
    rtsp varchar [note:'RTSP流地址']
    connect_status device_connect_status [default:`device_connect_status.unknown`, note:'设备在线状态']
    analyse_interval int [default: 15, note: "分析时间间隔，单位：秒"]
    created_at timestamp [default: `now()`,note: "创建时间（typeorm自动生成）"]
    updated_at timestamp [note: "更新时间（typeorm自动生成）"]
    deleted boolean [default:false, note: "是否删除（软删除支持）"]

    Indexes{
        created_at
    }

    note: "摄像机表"
}

Table alarm_records {
    id int [pk,increment, note: "唯一标识"]
    camera_uuid uuid [not null, ref: > cameras.uuid, note:"所属摄像机UUID"]
    image_url varchar [not null, note: "异常图片地址"]
    created_at timestamp [default: `now()`,note: "创建时间（typeorm自动生成）"]
    updated_at timestamp [note: "更新时间（typeorm自动生成）"]
    deleted boolean [default:false, note: "是否删除（软删除支持）"]

    Indexes{
        camera_uuid
        created_at
    }

    note: "报警记录表"
}

Enum log_appender {
    init [note: '初始化']
    user [note: '用户模块']
    camera [note: '摄像机模块']
    alarm [note: '报警模块']
}
Enum log_level {
    trace [note: '追溯']
    debug [note: '调试']
    info [note: '信息']
    warn [note: '警告']
    error [note: '错误']
    fatal [note: '严重错误']
}
Table system_logs {
    id int [pk,increment, note: "唯一标识"]
    appender log_appender [not null, note: "日志类别"]
    level log_level [note: '日志级别']
    message varchar [note:'日志内容']
    detail varchar [note: '日志详情']
    created_at timestamp [default: `now()`,note: "创建时间（typeorm自动生成）"]
    deleted boolean [default:false, note: "是否删除（软删除支持）"]

    Indexes{
        created_at
    }

    note: "报警记录表"
}
```


