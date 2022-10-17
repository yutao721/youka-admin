
/** 6位数字验证码正则 */
export const REGEXP_SIX = /^\d{6}$/;
/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;

/** 手机号码正则 */
export function isPhone(value) {
  const reg =
    /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;
  return reg.test(value);
}

const updateRules = {
  phone: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入手机号码"));
        } else if (!isPhone(value)) {
          callback(new Error("请输入正确的手机号码格式"));
        } else {
          callback();
        }
      },
      trigger: ['blur', 'change']
    }
  ],

  verifyCode: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入验证码"));
        } else if (!REGEXP_SIX.test(value)) {
          callback(new Error("请输入6位数字验证码"));
        } else {
          callback();
        }
      },
      trigger: ['blur', 'change']
    }
  ],
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else if (!REGEXP_PWD.test(value)) {
          callback(
            new Error("密码格式应为8-18位数字、字母、符号的任意两种组合")
          );
        } else {
          callback();
        }
      },
      trigger: ['blur', 'change']
    }
  ],
}

export { updateRules };