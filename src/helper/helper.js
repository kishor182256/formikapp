import * as Yup from 'yup';



export const INITIAL_FORM_STATE = {
    firsName:'',
    lastName:'',
    email: '',
    phone: '',
    arrivealDate: '',
    departureDate: '',
    city: '',
    state:'',
    country: '',
    message: '',
    termsOfService:false

}


export const FORM_VALIDATION_SCHEMA = Yup.object().shape({
    firstName: Yup.string()
      .required('Required firstName'),
    lastName: Yup.string()
      .required('Required lastName'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Required'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number')
      .required('Phone No Required'),
    addressLine1: Yup.string()
      .required('AddressLine1 Required'),
    addressLine2: Yup.string(),
    city: Yup.string()
      .required('AddressLine1 Required'),
    state: Yup.string()
      .required('State Required'),
    country: Yup.string()
      .required('Select country'),
    arrivealDate: Yup.date()
      .required('ArrivealDate Required'),
    departureDate: Yup.date()
      .required('DepartureDate Required'),
    message: Yup.string(),
    termsOfService: Yup.boolean()
      .oneOf([true], 'The terms and conditions must be accepted.')
      .required('The terms and conditions must be accepted.'),
  });
  