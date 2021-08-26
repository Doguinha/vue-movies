VeeValidate.extend("secret", {
  validate: (value) => value === "example",
  message: "This is not the magic word",
});
// VeeValidate.extend("required", {
//   validate(value) {
//     return {
//       required: true,
//       valid: ["", null, undefined].indexOf(value) === -1,
//     };
//   },
//   computesRequired: true,
// });
// VeeValidate.extend("email", {
//   ...email,
//   message: "jadasdasd",
// });
// VeeValidate.extend("required", required);
Vue.component("ValidationProvider", VeeValidate.ValidationProvider);
