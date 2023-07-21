import { ModelInterface } from 'interfaces/model';
import { GetQueryInterface } from 'interfaces';

export interface DefenseInterface {
  id?: string;
  name: string;
  recommendation: string;
  model_id: string;
  created_at?: any;
  updated_at?: any;

  model?: ModelInterface;
  _count?: {};
}

export interface DefenseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  recommendation?: string;
  model_id?: string;
}
