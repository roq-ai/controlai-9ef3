import * as yup from 'yup';

export const attackValidationSchema = yup.object().shape({
  name: yup.string().required(),
  result: yup.string().required(),
  model_id: yup.string().nullable().required(),
});
