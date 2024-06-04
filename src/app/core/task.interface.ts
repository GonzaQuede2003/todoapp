import { AuthorInterface } from "./auth.interface";

export interface TaskInterface 
{
  title: string;
  description: string;
  author: AuthorInterface;
}