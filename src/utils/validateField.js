const validateField = (name, value) => {
  const errors = { id: "", password: "", nickname: "" };
  if (name === "id" && (!value || value.length < 4)) {
    errors.id = "아이디는 최소 4자 이상이어야 합니다.";
  }
  if (name === "password" && (!value || value.length < 6)) {
    errors.password = "비밀번호는 최소 6자 이상이어야 합니다.";
  }
  if (name === "nickname" && (!value || value.length < 4)) {
    errors.nickname = "닉네임은 최소 4자 이상이어야 합니다.";
  }
  if (value.length === 0) {
    errors[name] = "";
  }
  return errors;
};

export default validateField;
