import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const App = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    const formattedData = `Ім'я: ${values.name}, Електронна пошта: ${values.email}, Телефон: ${values.phone}`;
    document.getElementById('form-data').innerText = formattedData;
    setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Ім\'я є обов\'язковим полем';
    }
    if (!values.email) {
      errors.email = 'Електронна пошта є обов\'язковою';
    } else if (!values.email.includes('@') || !values.email.includes('.')) {
      errors.email = 'Неправильний формат email';
    }
    if (!values.phone) {
      errors.phone = 'Телефон є обов\'язковим полем';
    } else if (isNaN(values.phone) || values.phone.length !== 12) {
      errors.phone = 'Телефон повинен бути 12 цифр';
    }
    return errors;
  };

  return (
    <div>
      <h1>Форма</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Ім'я:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="email">Електронна пошта:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="phone">Телефон:</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting}>Відправити</button>
          </Form>
        )}
      </Formik>
      <div id="form-data"></div>
    </div>
  );
};


export default App;