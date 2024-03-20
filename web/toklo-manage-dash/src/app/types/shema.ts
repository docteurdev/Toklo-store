import * as yup from 'yup';

const userRegisterShema = yup.object({
  userName: yup.string().min(4, "The Username must have at least 4 caracters").required("this field is required"),
  email: yup.string().email().required("this field is required"),
  permissionEmail: yup.string().email().required("this field is required"),
  password: yup.string().min(6,"The password must have at least 6 caracters").required("this field is required"),
});

const userLoginShema = yup.object({
 userName: yup.string().min(4, "The Username must have at least 4 caracters").required("this field is required"),
 email: yup.string().email().required("this field is required"),
 password: yup.string().min(6,"The password must have at least 6 caracters").required("this field is required"),
});

export  { userLoginShema, userRegisterShema}