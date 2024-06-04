import { RolInterface } from "./rol.interface";

export interface UserInterface 
{
  id: string;
  age: number;
  name: string;
  rols: RolInterface[];
  status: 'in-progress' | 'completed' | 'wait';
}