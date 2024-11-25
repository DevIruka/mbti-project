export const StInput = ({ tag }) => {
  let name = "";
  let type = "";
  switch (tag) {
    case "아이디":
      name = "id";
      type = "text";
      break;
    case "비밀번호":
      name = "password";
      type = "password";
      break;
    case "닉네임":
      name = "nickname";
      type = "text";
      break;
  }
  return (
    <input
      type={type}
      className="border border-gray-300 rounded px-2 py-1 w-[300px] m-2"
      placeholder={tag}
      name={name}
    />
  );
};
