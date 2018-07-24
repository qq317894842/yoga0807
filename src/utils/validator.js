import { Validator } from 'vee-validate';

//提示语汉化
// Validator.locale ==="en" ? "zh_CN" : "en";
// Validator.localize(Validator.locale,{
//   messages: zh_CN.messages,
//   attributes:{
//     username:'登录名',
//     loginPassword:'密码'
//   }
// });
//验证方法扩展
Validator.extend('phone', {
  getMessage: (field, [args]) => `请输入正确的手机号码`,
  validate: (value, [args]) =>{
    const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return reg.test(value)
  }
});

Validator.extend('username', {
  getMessage: field => "请输入正确的手机号或邮箱",
  validate: value => (value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value))||
    (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value))
});
