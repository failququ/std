import classNames from 'classnames';

import { useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';
import LangSwitcherItem from './LangSwitcherItem/LangSwitcherItem';

export enum Langs {
  en = 'EN',
  ru = 'RU'
}

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;
  const { i18n } = useTranslation();
  const handleChangeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, [i18n]);
  return (
    <div className={classNames(styles.switcher, className)} data-testid="lang-switcher">
      <LangSwitcherItem
        onClick={() => handleChangeLanguage(Langs.en)}
        isActive={i18n.language === Langs.en}
        language={Langs.en}
      />
      <div>/</div>
      <LangSwitcherItem
        onClick={() => handleChangeLanguage(Langs.ru)}
        isActive={i18n.language === Langs.ru}
        language={Langs.ru}
      />
    </div>
  );
};

export default LangSwitcher;
