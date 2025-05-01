// .storybook/decorators/RouterDecorator.tsx
import {
  BrowserRouter, MemoryRouter, Route, Routes,
} from 'react-router-dom';

export const RouterDecorator = (
  Story: any,
  { parameters: { router } }: { parameters: { router?: { path: string; initialEntries?: string[] } } },
) => {
  if (router?.initialEntries) {
    return (
      <MemoryRouter initialEntries={router.initialEntries}>
        <Routes>
          <Route path={router.path} element={<Story />} />
        </Routes>
      </MemoryRouter>
    );
  }

  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
