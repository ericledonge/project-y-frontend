import Input from "../../../components/input/input";

export default {
  title: "Components/Input",
  component: Input,
};

export const InputComponent = () => (
  <Input
    label={"Email address"}
    placeholder={"Email address"}
    type={"text"}
    name={"email-address"}
    id={"email-address"}
    value="email"
    onChange={() => console.log("onChange")}
  />
);
