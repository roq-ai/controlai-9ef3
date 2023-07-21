import { AttackInterface } from 'interfaces/attack';
import { DefenseInterface } from 'interfaces/defense';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ModelInterface {
  id?: string;
  name: string;
  file_path: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  attack?: AttackInterface[];
  defense?: DefenseInterface[];
  organization?: OrganizationInterface;
  _count?: {
    attack?: number;
    defense?: number;
  };
}

export interface ModelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  file_path?: string;
  organization_id?: string;
}
