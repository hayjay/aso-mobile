import * as yup from 'yup';

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

export const loginFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

export const registerFormSchema = yup.object({
  fullName: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  phoneNumber: yup
    .string()
    .matches(phoneRegex, 'Invalid phone number')
    .required('Phone is required'),
});

export const emailFormSchema = yup.object({
  email: yup.string().email().required(),
});
