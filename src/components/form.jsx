import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const myForm = ({
  values,
  touched,
  errors
}) => (
  <Form>
  <div>
      <Field type="text" name="sub" value={values.sub} placeholder="new sub"/> 
      {errors.sub && touched.sub && <div >{errors.sub}</div>}
    </div>
    <button type="submit">Add</button>
  </Form>
)

const FormikForm = withFormik({
  mapPropsToValues: () => ({ sub: '' }),
  validationSchema: Yup.object().shape({
    sub: Yup.string().min(3, 'try a longer name').required('add a sub!'),
  }),
  handleSubmit: (values, { props, resetForm }) => {
    props.addSub(values.sub)
    resetForm();
  }
})(myForm); 

export default FormikForm;