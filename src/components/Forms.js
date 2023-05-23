import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// const CheckUsernameAvailability = (value) => {
//   return fetch("http://localhost:8000/profiles", { value })
//       .then(response => {
//         if (response.ok) {

//         }
//         resolve(true);
//       })
//       .catch((error) => {
//         if (error.response.data.content === "The username has already been taken") {
//           resolve(false);
//         }
//       });
//   });
// };

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", userName: "", difficulty: "" }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
        lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        userName: Yup.string().min(3, "Minimum 3 characters").required("Required"),
        // .test("userName,", "Username already in use", function (userName) {
        //   return CheckUsernameAvailability(userName);
        // })
        difficulty: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const userData = JSON.stringify(values, null, 2);
          const fetchOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: userData,
          };
          fetch("http://localhost:8000/profiles", fetchOptions);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" id="firstName" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" id="lastName" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" id="email" />
        <ErrorMessage name="email" />

        <label htmlFor="userName">Username</label>
        <Field name="userName" type="text" id="userName" />
        <ErrorMessage name="userName" />

        <label htmlFor="contactNumber">Difficulty Level</label>
        <Field as="select" name="difficulty" id="difficulty">
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
          <option value="Grandmaster">Grandmaster</option>
        </Field>
        <ErrorMessage name="difficulty" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default SignupForm;
