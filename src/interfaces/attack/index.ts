import { ModelInterface } from 'interfaces/model';
import { GetQueryInterface } from 'interfaces';

export interface AttackInterface {
  id?: string;
  name: string;
  result: string;
  model_id: string;
  created_at?: any;
  updated_at?: any;

  model?: ModelInterface;
  _count?: {};
}

export interface AttackGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  result?: string;
  model_id?: string;
}
