import { TRating } from '@/entities/RatingCard';
import { rtkApi } from '@/shared/api/rtkApi';

interface RateArticlePayload {
  userId: string;
  articleId: string;
  rate: number;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<TRating[], string>({
      query: (articleId) => ({
        url: '/article-rating',
        params: {
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<TRating[], RateArticlePayload>({
      query: ({ articleId, userId, rate }) => ({
        url: '/article-rating',
        method: 'POST',
        body: {
          articleId,
          userId,
          rate,
        },
      }),
    }),
  }),
});

export const {
  useGetArticleRatingQuery: useGetArticleRating,
  useRateArticleMutation: useRateArticle,
} = articleRatingApi;
