import 'app/styles/index.scss';

export const StyleDecorator = (Story: () => any) => (
  <div>
    <Story />
  </div>
);
