import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export interface Profile {
  _id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
