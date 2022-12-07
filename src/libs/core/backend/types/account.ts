import { User } from "./user";

export enum AccountType {
  Savings = 'SAVINGS',
  Current = 'CURRENT',
}

export interface Account {
  user: User;
  type: AccountType,
  balance: number;
}