import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice', () => {
  it('should have correct init state', () => {
    const initialState: DeepPartial<ArticleDetailsSchema> = {
      data: undefined,
      isLoading: false,
      error: '',
    };

    expect(articleDetailsReducer(initialState as ArticleDetailsSchema, { type: 'unknown' }))
      .toEqual(initialState);
  });
});
