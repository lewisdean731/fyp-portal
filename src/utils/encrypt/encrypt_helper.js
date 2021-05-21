import NodeRSA from "node-rsa";
import { PUBLIC_KEY } from "./rsa_public_key";

export const encrypt = (input) => {
  const encrypter = new NodeRSA(PUBLIC_KEY);
  const encrypted = encrypter.encrypt(input, "base64");
  console.log(encrypted)
  return encrypted;
};

export default { decrypt };
