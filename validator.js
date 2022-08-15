// // Đối tượng `Validator`
// function Validator(options) {
//   // Hàm thực hiện validate
//   function validate(inputElement, rule) {
//     var errorElement = inputElement.parentElement.querySelector(
//       options.errorSelector
//     ); //lấy ra element cha của inputElement để từ đó lấy ra đc thẻ .form-message
//     var errorMessage = rule.test(inputElement.value);

//     // console.log(errorMessage)
//     if (errorMessage) {
//       errorElement.innerText = errorMessage;
//       inputElement.parentElement.classList.add("invalid");
//     } else {
//       errorElement.innerText = "";
//       inputElement.parentElement.classList.remove("invalid");
//     }
//   }
//   // console.log(options.form) // lấy ra css selector để từ đó lấy ra đc formElement
//   var formElement = document.querySelector(options.form); // lấy element của form cần validate

//   // console.log(options.rules)

//   if (formElement) {
//     // console.log(formElement)
//     options.rules.forEach((rule) => {
//       // console.log(rule.selector)
//       var inputElement = formElement.querySelector(rule.selector);
//       // console.log(inputElement)
//       if (inputElement) {
//         // Xử lý trường hợp blur khỏi input
//         inputElement.onblur = function () {
//           //   console.log("blur" + rule.selector);
//           //  console.log(inputElement.value)   // lấy value người dùng nhập vào
//           // console.log(rule.test) // lấy test func:
//           validate(inputElement, rule);
//         };

//         // Xử lý mỗi khi người dùng nhập vào input
//         inputElement.oninput = function () {
//           var errorElement =
//             inputElement.parentElement.querySelector(".form-message");
//           errorElement.innerText = "";
//           inputElement.parentElement.classList.remove("invalid");
//         };
//       }
//     });
//   }
// }

// // Định nghĩa các rules
// // Nguyên tắc của các rules đặt trong function test
// // 1.Khi có lỗi => trả ra message lỗi
// // 2. Khi hợp lệ => trả về undefined
// Validator.isRequired = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.trim() ? undefined : "Vui lòng nhập trường này";
//     },
//   };
// };

// Validator.isEmail = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       return regex.test(value) ? undefined : "Trường này phải là email";
//     },
//   };
// };

// Validator.minLength = function (selector, min) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.length >= 6
//         ? undefined
//         : `Vui lòng nhập tối thiểu ${min} ký tự`;
//     },
//   };
// };

//B1. Lấy ra formElement
//B2. Get element của các field để từ đó bắt sự kiên onblur

// Đối tượng `Validator`
// function Validator(options) {
//   //   console.log(options.form); //
//   //B6. Viết function validate để thực hiện việc hiện ra lỗi hoặc bỏ lỗi đi
//   function validate(inputElement, rule) {
//     var errorElement =
//       inputElement.parentElement.querySelector(".form-message"); //B7. lấy ra error element span để từ đó gán giá trị cho nó
//     var errorMessage = rule.test(inputElement.value);

//     // console.log(errorMessage)
//     //B7. Trong trường hợp có lỗi thì in ra message lỗi
//     if (errorMessage) {
//       // console.log(inputElement.parentElement.querySelector('.form-message'))
//       errorElement.innerText = errorMessage;
//       inputElement.parentElement.classList.add("invalid");
//     } else {
//       errorElement.innerText = "";
//       inputElement.parentElement.classList.remove("invalid");
//     }
//   }

//   var formElement = document.querySelector(options.form); //B1. Lấy ra formElement #form-1
//   //B2. kiểm tra xem có formElement hay k
//   console.log(options.rules);
//   if (formElement) {
//     // console.log(formElement);
//     //B3. Lặp qua các phần tử trong mảng rules để từ đó lấy ra đc các input element
//     options.rules.forEach((rule) => {
//       //   console.log(rule.selector);
//       var inputElement = formElement.querySelector(rule.selector); //B4. lấy ra các input Element

//       if (inputElement) {
//         // B5. Xử lý trường hợp blur khỏi input

//         inputElement.onblur = function () {
//           // console.log('blur' + rule.selector)
//           //   console.log(inputElement.value);
//           //   console.log(rule)
//           validate(inputElement, rule);
//         };

//         //  Xử lý mỗi khi người dùng nhập vào input
//         inputElement.oninput = function () {
//           var errorElement =
//             inputElement.parentElement.querySelector(".form-message");
//           errorElement.innerText = "";
//           inputElement.parentElement.classList.remove("invalid");
//         };
//       }
//     });
//   }
// }

// // Định nghĩa các rules
// // Nguyên tắc của các rules
// // 1. Khi có lỗi => trả ra message lỗi
// // 2. Khi không có lỗi => k trả ra cái gì (undefined)
// Validator.isRequired = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.trim() ? undefined : "Vui lòng nhập trường này";
//     },
//   };
// };

// Validator.isEmail = function (selector, min) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.length >= 6
//         ? undefined
//         : `Vui lòng nhập tối thiểu ${min} ký tự`;
//     },
//   };
// };

// Validator.minLength = function (selector, min) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.length >= 6
//         ? undefined
//         : `Vui lòng nhập tối thiểu ${min} ký tự`;
//     },
//   };
// };

// B1. Get formElement
// B2. Lặp qua các rules để get inputElement
// B3. Bắt sự kiện onblur trên từng input
// B4. Validate từng trường
// function Validator(options) {
//   // console.log(options.form)
//   function getParent(element, selector) {
//     while (element.parentElement) {
//       if (element.parentElement.matches(selector)) {
//         return element.parentElement;
//       }
//       element = element.parentElement;
//     }
//   }
//   // mong muốn sau khi forEach chạy xong sẽ lưu tất cả các rules của các selector vào 1 object selectorRules
//   var selectorRules = {};

//   function validate(inputElement, rule) {
//     // var errorElement = getParent(inputElement, '.form-group')
//     // var parentElement = getParent(inputElement, options.formGroupSelector); Cách 1.
//     var parentElement = inputElement.closest(options.formGroupSelector); // Cách 2
//     var errorElement = parentElement.querySelector(options.errorSelector);
//     var errorMessage;
//     // console.log(errorMessage)
//     // console.log(rule.selector)      // lấy ra các selector của từng input
//     var rules = selectorRules[rule.selector]; // lấy ra các rules của từng input selector

//     // lặp qua từng rule & kiểm tra, nếu có lỗi thì dừng việc kiểm tra
//     for (var i = 0; i < rules.length; ++i) {
//       switch (inputElement.type) {
//         case "radio":
//         case "checkbox":
//           errorMessage = rules[i](
//             formElement.querySelector(rule.selector + ":checked")
//           );
//           break;
//         default:
//           errorMessage = rules[i](inputElement.value);
//       }
//       if (errorMessage) break;
//     }

//     // console.log(rules)
//     if (errorMessage) {
//       errorElement.innerText = errorMessage;
//       parentElement.classList.add("invalid");
//     } else {
//       errorElement.innerText = "";
//       parentElement.classList.remove("invalid");
//     }

//     return !errorMessage;
//   }

//   var formElement = document.querySelector("#form-1");
//   // console.log(options.rules)
//   if (formElement) {
//     //Khi submit form
//     formElement.onsubmit = function (e) {
//       e.preventDefault();

//       var isFormValid = true;

//       //Lặp qua từng rules và validate
//       options.rules.forEach((rule) => {
//         var inputElement = formElement.querySelector(rule.selector);
//         var isValid = validate(inputElement, rule);
//         // nếu có một trường k hợp lệ
//         if (!isValid) {
//           isFormValid = false;
//         }
//       });

//       // Nếu form k hợp lệ
//       if (isFormValid) {
//         // console.log("Không có lỗi");
//         // Trường hợp submit với javascript
//         var enableInputs = formElement.querySelectorAll("[name]");

//         var formValues = Array.from(enableInputs).reduce((values, input) => {
//           values[input.name] = input.value;
//           return values;
//         }, {});

//         // console.log(formValues)
//         if (typeof options.onSubmit === "function") {
//           options.onSubmit(formValues);
//         }
//         // Trường hợp submit với hành vi mặc định
//         else {
//           formElement.submit();
//         }
//       }
//     };

//     //lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
//     options.rules.forEach((rule) => {
//       //console.log(rule.selector);

//       // Lưu lại các rules cho mỗi input, vì mỗi lần gán = như bên dưới nó sẽ ghi đè nên k thể nào lưu đc nhiều rule nên phải lưu vào 1 mảng
//       //   selectorRules[rule.selector] = rule.test
//       //   console.log(selectorRules[rule.selector])  -> kq in ra undefined
//       //  Ý tưởng: Khi selectorRules[rule.selector] == undefined ta sẽ gán cho nó bằng 1 cái mảng
//       //  Kiểm tra nếu nó có phải 1 cái mảng không
//       if (Array.isArray(selectorRules[rule.selector])) {
//         selectorRules[rule.selector].push(rule.test); //lần chạy thứ 2, thì các rule tiếp theo của selector sẽ lọt vào đây vì lần chạy đầu tiên nó đã = 1 cái mảng
//       } else {
//         selectorRules[rule.selector] = [rule.test]; //lần đầu tiên vòng forEach chạy nó sẽ lọt vào đây, nó sẽ gán rule cho các selector bằng 1 mảng có 1 phẩn tử rule
//       }

//       var inputElements = formElement.querySelectorAll(rule.selector);
//       // console.log(inputElements)

//       inputElements.forEach((inputElement) => {
//         // console.log(inputElement)
//         //Xử lý trường hợp blur khỏi input
//         inputElement.onblur = function () {
//           validate(inputElement, rule);
//         };

//         //Xử lý trường hợp mỗi khi ng dùng nhập vào input
//         inputElement.oninput = function () {
//           var parentElement = getParent(
//             inputElement,
//             options.formGroupSelector
//           );
//           var errorElement = parentElement.querySelector(options.errorSelector);
//           errorElement.innerText = "";
//           parentElement.classList.remove("invalid");
//         };
//       });

//       //   console.log(inputElement)
//     });
//     // console.log(selectorRules);
//   }
// // // }

// function Validator(options) {
//   // console.log(options.rules);
//   var selectorRules = {};

//   function validate(inputElement, rule) {
//     // console.log(errorMessage)
//     var parentElement = inputElement.closest(options.formGroupSelector);
//     var errorElement = parentElement.querySelector(options.errorSelector);
//     var errorMessage;

//     var rules = selectorRules[rule.selector];

//     //lặp qua từng rule và kiểm tra
//     for (var i = 0; i < rules.length; i++) {
//       switch (inputElement.type) {
//         case "radio":
//         case "checkbox":
//           errorMessage = rules[i](
//             formElement.querySelector(rule.selector + ":checked")
//           );
//           break;
//         default:
//           errorMessage = rules[i](inputElement.value);
//       }
//       if (errorMessage) break;
//     }

//     // console.log(errorElement)
//     if (errorMessage) {
//       errorElement.innerText = errorMessage;
//       parentElement.classList.add("invalid");
//     } else {
//       errorElement.innerText = "";
//       parentElement.classList.remove("invalid");
//     }
//     return !errorMessage;
//   }

//   var formElement = document.querySelector(options.form);
//   // console.log(formElement);
//   if (formElement) {
//     var isFormValid = true;

//     formElement.onsubmit = function (e) {
//       e.preventDefault();

//       // Lặp qua từng rules và validate
//       options.rules.forEach((rule) => {
//         var inputElement = formElement.querySelector(rule.selector);
//         var isValid = validate(inputElement, rule);
//         if (!isValid) {
//           isFormValid = false;
//         }
//       });

//       if (isFormValid) {
//         if (typeof options.onSubmit === "function") {
//           var enableInputs = formElement.querySelectorAll("[name]");
//           // console.log(Array.from(enableInputs));
//           var formValues = Array.from(enableInputs).reduce((values, input) => {
//             switch (input.type) {
//               case "radio":
//                 values[input.name] = formElement.querySelector(
//                   'input[name="' + input.name + '"]:checked'
//                 ).value;
//                 break;
//               case "checkbox":
//                 if (!input.matches(":checked")) {
//                   values[input.name] = "";
//                   return values;
//                 }
//                 if (!Array.isArray(values[input.name])) {
//                   values[input.name] = [];
//                 }
//                 values[input.name].push(input.value);
//                 break;
//               case "file":
//                 values[input.name] = input.files;
//                 break;
//               default:
//                 values[input.name] = input.value;
//             }
//             return values;
//           }, {});
//           // console.log(formValues)
//           options.onSubmit(formValues);
//         } else {
//           formElement.submit();
//         }
//       }
//     };

//     options.rules.forEach((rule) => {
//       // console.log(rule.selector);
//       // console.log(selectorRules[rule.selector] = rule.test)

//       if (Array.isArray(selectorRules[rule.selector])) {
//         selectorRules[rule.selector].push(rule.test);
//       } else {
//         selectorRules[rule.selector] = [rule.test];
//         // console.log(selectorRules[rule.selector] = [rule.test])
//       }

//       var inputElements = formElement.querySelectorAll(rule.selector);
//       // console.log(inputElement)

//       Array.from(inputElements).forEach((inputElement) => {
//         inputElement.onblur = function () {
//           validate(inputElement, rule);
//         };

//         inputElement.oninput = function () {
//           var parentElement = inputElement.closest(options.formGroupSelector);
//           var errorElement = parentElement.querySelector(options.errorSelector);
//           errorElement.innerText = "";
//           parentElement.classList.remove("invalid");
//         };

//         inputElement.onchange = function () {
//           validate(inputElement, rule);
//         };
//       });
//     });
//     // console.log(selectorRules)
//   }
// }

// //Định nghĩa các rules
// // Nguyên tắc của các rules:
// //1. Khi có lỗi =>  Trả ra message lỗi
// //2. Khi hợp lệ => trả về undefined
// Validator.isRequired = function (selector, message) {
//   return {
//     selector: selector,
//     test(value) {
//       return value ? undefined : message || "Vui lòng nhập trường này";
//     },
//   };
// };

// Validator.isEmail = function (selector, message) {
//   return {
//     selector: selector,
//     test(value) {
//       var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       return regex.test(value)
//         ? undefined
//         : message || "Trường này phải là email";
//     },
//   };
// };

// Validator.minLength = function (selector, min, message) {
//   return {
//     selector: selector,
//     test(value) {
//       var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       return value.length >= min
//         ? undefined
//         : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
//     },
//   };
// };

// Validator.isConfirmed = function (selector, getConfirmValue, message) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value === getConfirmValue()
//         ? undefined
//         : message || "Giá trị nhập vào không chính xác"; // check Nếu value nhập vào trùng với value của field password( tức là giá trị mà hàm callback getConfirmValue nó return)
//     },
//   };
// };

function Validator(options) {
  function validate(inputElement, rule) {
    var parentElement = inputElement.closest(options.formGroupSelector);
    var errorElement = parentElement.querySelector(options.errorSelector);

    var errorMessage;

    // console.log(selectorRules[rule.selector])

    var rules = selectorRules[rule.selector];

    for (var i = 0; i < rules.length; i++) {
      switch (inputElement.type) {
        case "checkbox":
        case "radio":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerHTML = errorMessage;
      parentElement.classList.add("invalid");
    } else {
      errorElement.innerHTML = "";
      parentElement.classList.remove("invalid");
    }
    return !errorMessage;
  }

  var selectorRules = {};

  var formElement = document.querySelector(options.form);
  if (formElement) {
    // console.log(formElement);
    // console.log(options.rules.length)
    options.rules.forEach((rule) => {
      var inputElements = formElement.querySelectorAll(rule.selector);

      // console.log(selectorRules[rule.selector]);

      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      inputElements.forEach((inputElement) => {
        inputElement.onblur = function () {
          // console.log(rule.test(inputElement.value));
          validate(inputElement, rule);
        };

        inputElement.oninput = function () {
          if (inputElement.value) {
            validate(inputElement, rule);
          }
        };

        inputElement.onchange = function () {
          validate(inputElement, rule);
        };
      });
    });

    // console.log(selectorRules)
    isFormValid = true;

    if (typeof options.onSubmit === "function") {
      formElement.onsubmit = function (e) {
        e.preventDefault();
        options.rules.forEach((rule) => {
          var inputElement = formElement.querySelector(rule.selector);
          if (inputElement) {
            var isValid = validate(inputElement, rule);
            if (!isValid) {
              isFormValid = false;
            }
          }
        });

        // console.log(formElement.querySelectorAll('input[name]'));
        if (isFormValid) {
          var enableInputs = formElement.querySelectorAll("input[name]");
          if (enableInputs) {
            var formValues = Array.from(enableInputs).reduce(
              (values, input) => {
                switch (input.type) {
                  case "radio":
                    if (input.matches(":checked")) {
                      values[input.name] = input.value;
                    }
                    break;
                  case "checkbox":
                    if (!input.matches(":checked")) { // code nay cua Sơn vẫn có bug
                      values[input.name] = "";
                      return values;   
                    }
                    if (!Array.isArray(values[input.name])) {
                      values[input.name] = [];
                    }
                    values[input.name].push(input.value);
                    break;
                    // if (input.matches(":checked")) {
                    //   if (!Array.isArray(values[input.name])) {
                    //     values[input.name] = [];
                    //   }
                    //   values[input.name].push(input.value);
                    // }
                    // break;
                  case "file":
                    values[input.name] = input.files;
                    break;

                  default:
                    values[input.name] = input.value;
                }
                return values;
              },
              {}
            );
          }
          options.onSubmit(formValues);
        }
      };
    } else {
      formElement.submit();
    }
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector,
    test(value) {
      return value ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector,
    test(value) {
      var regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(value)
        ? undefined
        : message || "Trường này phải là email";
    },
  };
};

Validator.isLengthRequired = function (selector, min, message) {
  return {
    selector,
    test(value) {
      return value.trim() > min
        ? undefined
        : message || `Giá trị nhập vào phải lớn hơn ${min} ký tự`;
    },
  };
};

Validator.isConfirmedPassword = function (selector, getConfirmValue, message) {
  return {
    selector,
    test(value) {
      return value.trim() === getConfirmValue()
        ? undefined
        : message || "Mật khẩu nhập vào không trùng khớp";
    },
  };
};
