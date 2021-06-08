# 该规范与技术无关，仅为了保证所有人写出来的代码风格一致
# 开发流程
1. 必须是Eolinker先驱，没有Eolinker不要写接口，`再次强调：先写Eolinker`,Eolinker是标准！swagger实现的和Eolinker不一致，那就是开发的问题。
1. 多入口项目必须区分入口，绝对不可混用api接口
1. DTO类不可继承除公共基础dto之外的其他自定义dto类，不可跨文件去继承，同时，系统中`不允许出现重名dto`
1. DTO类中一旦写了校验规则，必须写清楚错误的返回信息，不允许默认返回！<br />
例如：
```typescript
export class CreateDeviceReqDto {
  @ApiProperty({ description: "经度" })
  @IsNumber()
  @IsOptional()
  longitude: number;

  @ApiProperty({ description: "版本号" })
  @IsNumber()
  @IsOptional()
  version_code: number;
}
```
`@IsNumber()`修饰符没有返回前台错误信息，这个请求里面会包含很多字段，前台只能一个一个找，甚至有的时候是后台的问题，却让前台去找问题。


5. 接口写完，任务勾掉的时候，必须上传postman调用结果图片。