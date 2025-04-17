import { addNewCommentReducer } from './model/slice/addNewCommentSlice';
import type { AddNewCommentSchema } from './model/types/addNewComment';
import { AddNewCommentFormLazy } from './ui/AddCommentForm/AddCommentForm.lazy';

export { AddNewCommentFormLazy as AddNewCommentForm, addNewCommentReducer, AddNewCommentSchema };
