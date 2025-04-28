import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticlesView } from 'entities/Article';
import { LS_ARTICLES_VIEW_KEY } from 'shared/constants/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article, string>({
  selectId: (article: Article) => article._id,

});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    view: ArticlesView.SMALL,
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesView>) => {
      state.view = action.payload;
      localStorage.setItem(LS_ARTICLES_VIEW_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(LS_ARTICLES_VIEW_KEY) as ArticlesView || ArticlesView.SMALL;
      state.view = view;
      state.limit = view === ArticlesView.SMALL ? 9 : 4;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        articlesAdapter.addMany(state, action.payload);
        state.isLoading = false;
        state.error = undefined;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPageSlice;
