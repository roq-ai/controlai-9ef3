import * as yup from 'yup';

export const defenseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  recommendation: yup.string().required(),
  model_id: yup.string().nullable().required(),
});
