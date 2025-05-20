import { memo, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
import { Currency } from '../../model/const/const';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

const CurrencySelect: FC<CurrencySelectProps> = (props) => {
  const {
    className, value, readonly, onChange,
  } = props;

  const { t } = useTranslation('profile');

  const handleOnChange = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      label={t('card.data.currency')}
      onChange={handleOnChange}
      className={className}
      items={options}
      value={value}
      defaultValue={t('card.data.currency')}
      readonly={readonly}
    />
  );
};

export default memo(CurrencySelect);
