import { memo, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import ListBox from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

const CurrencySelect: FC<CountrySelectProps> = (props) => {
  const {
    className, value, readonly, onChange,
  } = props;

  const { t } = useTranslation('profile');

  const handleOnChange = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={className}
      onChange={handleOnChange}
      label={t('card.data.country')}
      items={options}
      value={value}
      defaultValue={t('card.data.country')}
      readonly={readonly}
    />
  );
};

export default memo(CurrencySelect);
