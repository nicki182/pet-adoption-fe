export const advancedSearchOptions = [
  {
    label: 'Dog',
    value: { type: 'dog' },
  },
  {
    label: 'Cat',
    value: { type: 'cat' },
  },
  {
    label: 'Bird',
    value: { type: 'bird' },
  },
  {
    label: 'Weigth between 0kilos and 2kilos',
    value: { weight: { min: 0, max: 2 } },
  },
  {
    label: 'Weigth between 2kilos and 5kilos',
    value: { weight: { min: 2, max: 5 } },
  },
  {
    label: 'Weigth between 5kilos and 10kilos',
    value: { weight: { min: 5, max: 10 } },
  },
  {
    label: 'Heigth between 0 and 0.1meters',
    value: { height: { min: 0, max: 0.1 } },
  },
  {
    label: 'Heigth between 0.1meters and 0.2meters',
    value: { height: { min: 0.1, max: 0.2 } },
  },
  {
    label: 'Heigth between 0.2meters and 0.5meters',
    value: { height: { min: 0.2, max: 0.3 } },
  },
  {
    label: 'Adopted',
    value: { status: 'ADOPTED' },
  },
  {
    label: 'Fostered',
    value: { status: 'FOSTERED' },
  },
  {
    label: 'Available',
    value: { status: 'AVAILABLE' },
  },
];
