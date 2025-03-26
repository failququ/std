import classNames from 'classnames';

import { useAppDispatch } from 'app/providers/StoreProvider';
import { type FC } from 'react';
import { useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface Props {
  className?: string;
}

const Counter: FC<Props> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const count = useSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames(className)}>
      <h1 data-testid="counter-value">{count}</h1>
      <Button data-testid="increment-btn" onClick={handleIncrement}>+</Button>
      <Button data-testid="decrement-btn" onClick={handleDecrement}>-</Button>
    </div>
  );
};

export default Counter;
