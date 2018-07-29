import React from 'react';
import { withFormik, Form } from 'formik';
import { Button, Input } from 'antd';
import * as Yup from 'yup';

const myForm = ({
  values,
  touched,
  errors,
  handleChange
}) => (
  <Form>
  <div className="form">
  <Input 
    className="form__input"
    type="text" 
    name="sub" 
    value={values.sub} 
    onChange={handleChange} 
    placeholder="Add sub.."
  /> 
  <Button htmlType="submit">+</Button></div>
  {errors.sub && touched.sub && <div className="form__validation">{errors.sub}</div>}
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