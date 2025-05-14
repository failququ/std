const interfaceConst = 'interface';

module.exports = (componentName) => `import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './${componentName}.module.scss';
import { memo } from 'react';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = (props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(styles.${componentName}, {}, [className])}>
           
        </div>
    );
};

export default memo(${componentName});`;
