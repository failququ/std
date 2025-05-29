import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { api } from '@/shared/api/api';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import EditableProfileCard from './EditableProfileCard';

const profile: Profile = {
  _id: '1',
  firstName: 'John',
  lastName: 'Doe',
  currency: Currency.USD,
  country: Country.Armenia,
  age: 30,
  city: 'New York',
  username: 'johndoe',
  avatar: 'https://example.com/avatar.jpg',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      userData: {
        id: '1',
        username: 'johndoe',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  it('should turn off read only mode', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    expect(screen.getByTestId('EditableProfileCardHeader.Cancel')).toBeInTheDocument();
  });

  it('should return prev value on cancel', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'Alex');
    await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'Alex');

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('Alex');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('Alex');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Cancel'));

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('John');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('Doe');
  });

  it('should show validation error', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Save'));

    expect(screen.getByTestId('EditableProfileCard.ValidationError')).toBeInTheDocument();
  });

  it('should send request on save', async () => {
    const mockPutRequest = jest.spyOn(api, 'put');
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'Alex');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Save'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
