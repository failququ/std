import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/article',
        params: {
          limit,
        },
      }),
    }),
  }),
});

export const { useGetArticleRecommendationsListQuery: useGetArticleRecommendations } = recommendationsApi;
