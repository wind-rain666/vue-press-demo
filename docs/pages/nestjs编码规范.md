# 参考风格
* [Angular风格指南](https://angular.cn/guide/styleguide) (主)
* [Deno Style Guide](https://deno.land/manual/contributing/style_guide)<br />
以上两个代码风格必须详读，尤其是Deno那个，那个是开源项目体代码标准！

# 相关规范
* [nestjs接口开发规范](nestjs接口开发规范)

# 风格思想
1. 大文件代码紧凑，能写1行不要写2行（例如：service文件），小文件结构清晰（例如：module文件）
2. 模块化开发，一个文件夹下不要太多文件，可以有子文件
3. 属性排序又顺序，可以很方便的定位属性实现位置

# 缩进风格
`必须使用2个空格`来代替tab，在项目的.vscode目录中settings.json文件中配置！！！

# 目录结构
采用模块化设计，目录结构示例：
```
.
├── config
│   ├── development.json
│   ├── docker
│   │   ├── development.json
│   │   ├── production.json
│   │   └── staging.json
│   ├── production.json
│   └── staging.json
├── nest-cli.json
├── package.json
├── README.md
├── src
│   ├── app.module.ts
│   ├── constants
│   │   └── redis.constant.ts
│   ├── dtos
│   │   ├── bool.res.dto.ts
│   │   ├── id.req.dto.ts
│   │   ├── id.res.dto.ts
│   │   ├── uuid.req.dto.ts
│   │   └── uuid.res.dto.ts
│   ├── entities
│   │   ├── basic.entity.ts
│   │   └── transformer
│   │       └── bigint.transformer.ts
│   ├── global.d.ts
│   ├── interfaces
│   │   └── config.interface.ts
│   ├── main.ts
│   ├── modules
│   │   ├── email
│   │   │   ├── constants
│   │   │   │   └── email.constant.ts
│   │   │   ├── controllers
│   │   │   │   └── email.controller.ts
│   │   │   ├── dtos
│   │   │   │   └── send-email-auth-code.req.dto.ts
│   │   │   ├── email.module.ts
│   │   │   ├── interfaces
│   │   │   │   ├── email-content.interface.ts
│   │   │   │   └── email-recipient.interface.ts
│   │   │   └── services
│   │   │       └── email.service.ts
│   │   ├── guard
│   │   │   ├── constants
│   │   │   │   └── guard.constant.ts
│   │   │   ├── controllers
│   │   │   │   └── guard.controller.ts
│   │   │   ├── dtos
│   │   │   │   └── get-gurd-list.res.dto.ts
│   │   │   ├── entities
│   │   │   │   └── guard.entity.ts
│   │   │   ├── guard.module.ts
│   │   │   └── services
│   │   │       └── guard.service.ts
│   │   ├── log
│   │   │   ├── constants
│   │   │   │   └── log.constant.ts
│   │   │   ├── entities
│   │   │   │   └── log.entity.ts
│   │   │   ├── log.module.ts
│   │   │   └── services
│   │   │       └── log.service.ts
│   │   ├── role
│   │   │   ├── constants
│   │   │   │   └── role.constant.ts
│   │   │   ├── controllers
│   │   │   │   └── role.controller.ts
│   │   │   ├── dtos
│   │   │   │   ├── create-role.req.dto.ts
│   │   │   │   └── get-role-list.req.dto.ts
│   │   │   ├── entities
│   │   │   │   └── role.entity.ts
│   │   │   ├── role.module.ts
│   │   │   └── services
│   │   │       └── role.service.ts
│   │   └── user
│   │       ├── constants
│   │       │   └── user.constant.ts
│   │       ├── controllers
│   │       │   ├── user-auth.controller.ts
│   │       │   └── user.controller.ts
│   │       ├── dtos
│   │       │   ├── login.req.dto.ts
│   │       │   ├── login.res.dto.ts
│   │       │   ├── register.req.dto.ts
│   │       │   └── register.res.dto.ts
│   │       ├── entities
│   │       │   ├── user-auth.entity.ts
│   │       │   ├── user.entity.ts
│   │       │   ├── user-perference.entity.ts
│   │       │   ├── user-profile.entity.ts
│   │       │   └── user-role.entity.ts
│   │       ├── interfaces
│   │       │   ├── jwt.payload.interface.ts
│   │       │   └── token.interface.ts
│   │       ├── services
│   │       │   ├── auth.service.ts
│   │       │   ├── user-auth.service.ts
│   │       │   ├── user-profile.service.ts
│   │       │   ├── user-role.service.ts
│   │       │   └── user.service.ts
│   │       └── user.module.ts
│   ├── pipes
│   │   └── validation.pipe.ts
│   ├── preInit.ts
│   ├── services
│   │   ├── init.service.ts
│   │   └── redis.lant.service.ts
│   ├── strategies
│   │   └── jwt.strategy.ts
│   └── utils
│       ├── lant.util.ts
│       └── regular.util.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```

# 命名规范
## 文件命名规范
按照angular的规范，我们使用烤肉串风格命名，例如：`user-profile.entity.ts`,`create-user.req.dto.ts`

## 文件夹命名规范
以复数作为文件夹名称，例如：`services`，`entities` <br />
遇到多单词拼接时，采用烤肉串风格。

## 变量命名规范：
### 类名
大驼峰格式，例如：`UserService`，`CreateUserReqDto`

### 属性名
小驼峰格式，例如：
```typescript
@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) { }

  /**
   * 创建角色
   * @param name 角色名称
   * @param guardUuidList 权限uuid列表
   * @param type 角色类型
   * @param createdByUserUuid 创建人uuid
   */
  async create(name: string, guardUuidList: string[], type?: RoleType, createdByUserUuid?: string): Promise<RoleEntity> {
    const role = new RoleEntity();
    role.name = name;
    role.guardUuidList = guardUuidList;
    if (type) role.type = type;
    if (createdByUserUuid) role.createdByUserUuid = createdByUserUuid;

    return await this.roleRepository.save(role);
  }

  /**
   * 更新角色信息
   * @param uuid 角色uuid
   * @param name 角色名称
   * @param type 角色类型
   * @param guardUuidList 角色所拥有权限uuid列表
   */
  async update(uuid: string, name?: string, type?: RoleType, guardUuidList?: string[]): Promise<UpdateResult> {
    const updateCondition = {};
    if (name) Object.assign(updateCondition, { name });
    if (type) Object.assign(updateCondition, { type });
    if (guardUuidList) Object.assign(updateCondition, { guardUuidList });

    return await this.roleRepository.update(uuid, updateCondition);
  }

  /**
   * 更新角色权限列表
   * @param uuid 角色uuid主键
   * @param guardUuidList 权限uuid列表
   */
  async updateGuardList(uuid: string, guardUuidList: string[]): Promise<UpdateResult> {
    return await this.roleRepository.update(uuid, { guardUuidList });
  }
}
```

### Entity类规范
属性名称为小驼峰，但是一定要写orm到数据库的映射名称，示例如下：
```typescript
import { Entity, BaseEntity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserGender } from "../constants/user.constant";
import { UserEntity } from "./user.entity";

@Entity('user_profiles')
export class UserProfileEntity extends BaseEntity {
  @PrimaryColumn('uuid', { name: 'user_uuid', comment: '所属用户uuid' })
  userUuid: string;

  @Column('varchar', { name: 'nickname', comment: '昵称', nullable: true })
  nickname: string

  @Column('varchar', {  name: 'firstname', comment: '名称', nullable: true })
  firstname: string

  @Column('varchar', {  name: 'lastname', comment: '姓氏', nullable: true })
  lastname: string

  @Column('enum', { name: 'gender', enum: UserGender, comment: '性别', default: UserGender.male })
  gender: UserGender

  @Column('timestamp', {  name: 'birthday', comment: '生日', nullable: true })
  birthday: Date

  @Column('varchar', { name: 'avatar', comment: '用户头像', nullable: true })
  avatar: string
  
  @OneToOne(_type => UserEntity, user => user.userRole)
  @JoinColumn({ name: 'user_uuid' })
  user: UserEntity;
}
```
`注意@Column修饰符中的name字段，user_uuid表示数据库字段为user_uuid映射到代码中是userUuid`

### Dto类命名规范
由于[restful设计风格](restful API 规范)采用下划线命名，Dto类名为大驼峰，Dto类里面的属性为下划线格式，例如：
```typescript
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength, MaxLength, IsEnum } from "class-validator";
import { UserIdentityType } from "../constants/user.constant";

/** 用户登录请求DTO */
export class LoginReqDto {
  @ApiProperty({ description: '用户登录标识', enum: UserIdentityType })
  @IsEnum(UserIdentityType, { message: '用户登录标识类型不正确' })
  readonly identity_type: UserIdentityType

  @ApiProperty({ description: '登录身份' })
  @IsNotEmpty({ message: '登录身份不能为空' })
  @MinLength(2, { message: '登录身份至少2位' })
  @MaxLength(30, { message: '登录身份不超过30位' })
  readonly identifier: string

  @ApiProperty({ description: '密码（MD5加密）' })
  @IsString({ message: '密码应为字符串类型' })
  @IsNotEmpty({ message: '密码不能为空' })
  readonly credential: string
}
```

### service类方法传参规范
方法可穿参数一共有三类，必须参数，可选参数，默认参数，顺序是：必须参数 > 可选参数 > 默认参数。例如：
```typescript
async create(name:string,password:string,nickname?:string,gender=UserGender.male){
    ……
}
```

### Enum类命名规范
使用Typescript语言规范，https://www.typescriptlang.org/docs/handbook/enums.html <br />
参考示例：
```typescript
/** 用户性别 */
export enum UserGender {
  /** 男性 */
  Male = 'male',

  /** 女性 */
  Female = 'female'
}
```
## 顺序规范
### Entity字段顺序
* 按照主键->外键->普通字段这样的顺序写
* 普通字段中按照常用顺序来排，以`users`表来举例，`name`应该放到`created_at`之前

### Controller和Service中的方法顺序
* 统一按照增删改查的顺序来写
* 查询方法一般比较多，顺序为：findOne -> find -> getOne -> getList
* 逻辑方法写在最后

