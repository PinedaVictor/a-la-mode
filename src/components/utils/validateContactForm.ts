type V = {
  value: string;
};

export interface Target extends EventTarget {
  name: V;
  email: V;
  phoneNumber: V;
  msg: V;
}

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  msg: string;
};

const regiEmail = /\S+@\S+\.\S+/;

export const validateContactForm = (
  data: FormData
): { valid: boolean; error: string } => {
  const validEmail = regiEmail.test(data.email);
  if (!validEmail && data.name.length <= 3) {
    return { valid: false, error: "Please enter a valid name and email." };
  }
  if (!validEmail) {
    return { valid: false, error: "Invaild email." };
  }
  if (data.name.length <= 3) {
    return { valid: false, error: "Invaild name." };
  }
  if (data.msg.length < 10) {
    return { valid: false, error: "Please enter a message." };
  }
  return { valid: true, error: "" };
};
