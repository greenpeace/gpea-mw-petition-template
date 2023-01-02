export function validation(values, props) {
  const { formContent } = props;
  const errors = {};

  if (!values.Email) {
    errors.Email = formContent.empty_data_alert;
  } else if (
    !/^(?!.*(?:''|\.\.))[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      values.Email,
    )
  ) {
    errors.Email = formContent.invalid_email_alert;
  }

  // if (!values.FirstName) {
  //   errors.FirstName = formContent.empty_data_alert;
  // }

  if (!values.LastName) {
    errors.LastName = formContent.empty_data_alert;
  }
 
  if (!values.MobilePhone) {
    errors.MobilePhone = formContent.empty_data_alert;
  } else if (!/^01([0|1|6|7|8|9])?-([0|2|3|4|5|6|7|8|9]{1})([0-9]{2,3})?-([0-9]{4})$/.test(values.MobilePhone)) {
    errors.MobilePhone = formContent.invalid_format_alert;
  }

  // if (!values.Birthdate) {
  //   errors.Birthdate = formContent.empty_data_alert;
  // }

  if (!values.Counties && typeof formContent.counties != 'undefined') {
    errors.Counties = formContent.empty_data_alert;
  }

  // if (values.MobilePhone) {
  //   /*
  //     11자리: 010, 011, 016, 019 로만 시작 가능하고 (02 이런거 안되고)
  //     010 네 번째 자리에 0이나 1이 올 수 없음
  //     011 네 번째 자리에 1이랑 9만 올 수 있음
  //     016 네 번째 자리에 9만 올 수 있음
  //     019 네 번째 자리에 9만 올 수 있음
  //     10자리:
  //     011/016/017/018/019 로 시작하고 네 번째 자리에 0, 1, 9는 올 수 없음
      
  //     */

  //   if (values.MobilePhone.lengh < 10) {
  //     errors.MobilePhone = formContent.invalid_format_alert;
  //   }
  //   var pre_fix = values.MobilePhone.substring(0, 3);
  //   var phone_Length = values.MobilePhone.length;
  //   var phoneReg = false;
  //   if (phone_Length == 11) {
  //     if (pre_fix == '010') {
  //       phoneReg = new RegExp(/^010[2-9]{1}[0-9]{3}[0-9]{4}$/).test(
  //         values.MobilePhone,
  //       );
  //     } else if (pre_fix == '011') {
  //       phoneReg = new RegExp(/^011[1|9]{1}[0-9]{3}[0-9]{4}$/).test(
  //         values.MobilePhone,
  //       );
  //     } else if (pre_fix == '016') {
  //       phoneReg = new RegExp(/^016[9]{1}[0-9]{3}[0-9]{4}$/).test(
  //         values.MobilePhone,
  //       );
  //     } else if (pre_fix == '019') {
  //       phoneReg = new RegExp(/^019[9]{1}[0-9]{3}[0-9]{4}$/).test(
  //         values.MobilePhone,
  //       );
  //     } else {
  //       errors.MobilePhone = formContent.invalid_format_alert;
  //     }
  //   } else if (phone_Length == 10) {
  //     if (
  //       pre_fix == '011' ||
  //       pre_fix == '016' ||
  //       pre_fix == '017' ||
  //       pre_fix == '018' ||
  //       pre_fix == '019'
  //     ) {
  //       phoneReg = new RegExp(
  //         /^01([1|6|7|8|9])([2|3|4|5|6|7|8])[0-9]{2}[0-9]{4}$/,
  //       ).test(values.MobilePhone);
  //     } else {
  //       errors.MobilePhone = formContent.invalid_format_alert;
  //     }
  //   } else {
  //     errors.MobilePhone = formContent.invalid_format_alert;
  //   }

  //   if (!phoneReg) {
  //     errors.MobilePhone = formContent.invalid_format_alert;
  //   }

  //   const phoneReg6 = new RegExp(
  //     /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/,
  //   ).test(values.MobilePhone);

  //   if (!phoneReg6) {
  //     errors.MobilePhone = formContent.invalid_format_alert;
  //   }
  // }
 
  //if(!errors.Email && !errors.LastName && !errors.MobilePhone) {
    if (!values.OptIn1) errors.OptIn1 = formContent.require_data_alert; //!values.OptIn1; 
    if (!values.OptIn2) errors.OptIn2 = formContent.require_data_alert; //!values.OptIn2; 
    if (!values.OptIn3) errors.OptIn3 = formContent.require_data_alert; //!values.OptIn3; 
  //}

  return errors;
}
