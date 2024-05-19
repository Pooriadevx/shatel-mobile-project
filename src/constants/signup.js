import passwordIcon from "../assets/hide password.svg";

export const CreateAccountFields = [
  {
    label: "your name",
    defaultValue: "John Doe",
    type: "text",
  },
  {
    label: "E-mail",
    defaultValue: "John@example.com",
    type: "text",
  },
  {
    label: "Password",
    defaultValue: "At least 8 characters",
    type: "password",
    icon: <img src={passwordIcon} />,
  },
];
