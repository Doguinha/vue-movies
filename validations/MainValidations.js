VeeValidate.extend("required", {
  ...VeeValidateRules["required"],
  message: "{_field_} é um campo obrigatório.",
});
VeeValidate.extend("email", {
  ...VeeValidateRules["email"],
  message: "{_field_} deve ser um e-mail válido.",
});
VeeValidate.extend("alpha_spaces", {
  ...VeeValidateRules["alpha_spaces"],
  message: "{_field_} deve conter apenas letras e espaço em branco.",
});
VeeValidate.extend("confirmed", {
  ...VeeValidateRules["confirmed"],
  message: "{_field_} deve ser igual ao campo.",
});
VeeValidate.extend("max", {
  ...VeeValidateRules["max"],
  message: "{_field_} deve conter no máximo x caracteres.",
});
VeeValidate.extend("min", {
  ...VeeValidateRules["min"],
  message: "{_field_} deve conter no mínimo x caracteres.",
});

Vue.component("ValidationProvider", VeeValidate.ValidationProvider);
Vue.component("ValidationObserver", VeeValidate.ValidationObserver);
