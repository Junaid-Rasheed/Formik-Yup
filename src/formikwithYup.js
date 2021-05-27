import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export const UseformikformYup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // validate: (values) => {
    //   const error = {};
    //   if (!values.name) {
    //     error.name = "please enter name";
    //   } else if (!values.name.length > 20) {
    //     error.name = "Enter name under 20 character";
    //   } else if (!values.age) {
    //     error.age = "Enter age";
    //   }
    //   return error;
    // },
    validationSchema: Yup.object({
      name: Yup.string().required("enter name").max(12, "not more than 12"),
      age: Yup.number().max(50, "no more than 50").min(2, "no less than 2"),
    }),
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label>Age</label>
          <input
            id="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.errors.age ? (
            <div style={{ color: "red" }}>{formik.errors.age}</div>
          ) : null}

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
