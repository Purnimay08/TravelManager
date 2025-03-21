import * as yup from 'yup';

// regex: regular expression
// only letters and space characters are allowed
const nameRegex = /^[A-Za-zÇĞİÖŞÜçğıöşü ]+$/;

// ! yup: schema creation
// create a schema that expresses the necessary conditions for the data obtained from the form inputs to be valid
export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be longer than 3 characters')
    .matches(nameRegex, 'Title can only contain letter characters'),

  location: yup
    .string()
    .required('Location is required')
    .min(3, 'Location must be longer than 3 characters'),
  address: yup
    .string()
    .required('Address is required')
    .min(3, 'Address must be longer than 3 characters'),
  description: yup
    .string()
    .required('Description is required')
    .min(10, 'Description must be longer than 10 characters'),
  amenities: yup.string().required('Amenities are required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(1, 'Rating must be between 1-5')
    .max(5, 'Rating must be between 1-5'),
  price_per_night: yup
    .number()
    .required('Price is required')
    .min(20, 'Price must be between 20-1000')
    .max(1000, 'Price must be between 20-1000'),
});
