import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
};
type errorsType = {
  email?: string;
  password?: string;
};
const Login = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: errorsType = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <div className="flex flex-col gap-2">
            <h1 className="text-center">Login</h1>
            <Form>
              <div className="flex flex-col gap-2 w-lg m-auto border-2 border-blue-600 p-4 ">
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button
                  className="border-2 border-amber-500 rounded-2xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
