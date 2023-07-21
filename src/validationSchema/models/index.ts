import * as yup from 'yup';

export const modelValidationSchema = yup.object().shape({
  name: yup.string().required(),
  file_path: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
