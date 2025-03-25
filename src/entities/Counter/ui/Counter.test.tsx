import { fireEvent, screen } from '@testing-library/dom';
import { componentRender } from 'shared/config/test/componentRender/componentRender';
import Counter from './Counter';

describe('Counter', () => {
  const initialState = { counter: { value: 10 } };

  it('should render with state value', () => {
    componentRender(<Counter />, {
      initialState,
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  it('should increment on btn click', () => {
    componentRender(<Counter />, {
      initialState,
    });
    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });

  it('should decrement on btn click', () => {
    componentRender(<Counter />, {
      initialState,
    });
    const decrementBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
