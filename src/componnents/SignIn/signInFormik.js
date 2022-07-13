import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../css/signIn.css';
import { useHistory } from "react-router-dom";
import signInAction from '../../Store/Actions/SignInAction';
import store from '../../Store/store'
const SignInFormFormik = () => {
    const history = useHistory();

    return (
        <Formik
            initialValues={{ userName: store.getState().email, password: '' }}
            validationSchema={Yup.object({
                password: Yup.string()
                    .max(4, 'Must be 4 characters or less')
                    .required('Required'),
                userName: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={ async(values, { setSubmitting }) => {
                 
                    const user = await signIn(values.userName, values.password)
                    if (user !== null) {
                      debugger
                      alert(`welcome back ${user}`)
                      history.push('/');
                      
                    setSubmitting(false);
                    }

            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <label htmlFor="userName">userName</label>
                        <input
                            id="userName"
                            type="email"
                            {...formik.getFieldProps('userName')}
                            placeholder='enter@email.com'
                            value={formik.values.userName}
                        />
                        {formik.touched.userName && formik.errors.userName ? (
                            <div>{formik.errors.userName}</div>
                        ) : null}
                    </div>
                    <div className="row">
                        <label htmlFor="password">password</label>
                        <input id="password" 
                        type="password" 
                        {...formik.getFieldProps('password')} 
                        placeholder='enter password'
                        value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div id="button" className="row">
                    <button type="submit">logIn</button>
                    </div>
                </form>
            )}
        </Formik>
    );
};
export default SignInFormFormik

    ;
async function signIn(userName, password) {
  debugger
  let data
  console.log('Initial state: ', store.getState())
  console.log(userName, password)
  try {
    debugger
    const response = await fetch(`http://localhost:4020/api/users/${userName}/${password}`)
    if (response.ok && response.status === 200) {

      data = await response.json()
      store.dispatch(signInAction(data))
      console.log(store.getState())
      alert("hi " + data.lastname);
    }
  } catch (error) {
    alert("err:" + error)
  }
}



