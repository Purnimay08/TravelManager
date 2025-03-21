export const sortOptions = [
  {
    label: 'Select',
    value: '',
  },
  {
    label: 'Cheapest',
    value: 'price-asc',
  },
  {
    label: 'Most Expensive',
    value: 'price-desc',
  },
  {
    label: 'Best Rating',
    value: 'rating-desc',
  },
  {
    label: 'Worst Rating',
    value: 'rating-asc',
  },
];

export const initialValues = {
  name: '',
  location: '',
  address: '',
  description: '',
  amenities: '',
  rating: '',
  price_per_night: '',
  availability: false,
};

export const inputs = [
  {label: 'Title', name: 'name', placeholder: 'Seaside Villa'},
  {label: 'Location', name: 'location', placeholder: 'Ankara Turkey'},
  {label: 'Address', name: 'address', placeholder: '1985 Street No: 123'},
  {
    label: 'Description',
    name: 'description',
    placeholder: 'A villa with a sea view...',
  },
  {label: 'Amenities', name: 'amenities', placeholder: 'Wifi, Pool, Parking'},
  {label: 'Rating', name: 'rating', placeholder: '4.5'},
  {label: 'Price per Night', name: 'price_per_night', placeholder: '1000$'},
  {
    label: 'Availability (Is it available now?)',
    name: 'availability',
    type: 'checkbox',
  },
];
