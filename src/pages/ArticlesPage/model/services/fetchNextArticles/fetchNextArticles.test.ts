import axios from 'axios';
import { TestAsyncThunk } from 'shared/config/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticles } from './fetchNextArticles';

jest.mock('../fetchArticlesList/fetchArticlesList');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchNextArticles', () => {
  test('should have correct dispatch numbers', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: true,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
  });

  test('should not call fetch and dispatch only two times', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: false,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('should not call fetch while loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: true,
        isLoading: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
