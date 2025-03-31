import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import type { Profile, ProfileSchema } from './model/types/profile';
import ProfileCard from './ui/ProfileCard/ProfileCard';

export {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  Profile,
  profileActions,
  ProfileCard,
  profileReducer,
  ProfileSchema,
};
