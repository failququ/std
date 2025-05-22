import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from './articleDetails';

describe('articleDetails', () => {
  test('getArticleDetailsData', () => {
    const data = {
      id: '1',
      title: 'title',
      subtitle: 'subtitle',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('getArticleDetailsIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true);
  });

  test('getArticleDetailsError', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
});
