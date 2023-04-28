import classNames from 'classnames';
import styles from './cipher-container.module.scss';
import CardContainer_module from '../card-container/card-container.module.scss';
import CipherCard_module from '../cipher-card/cipher-card.module.scss';

export interface CipherContainerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cipher-containers-and-templates
 */
export const CipherContainer = ({ className }: CipherContainerProps) => {
    return (
        <div
            className={classNames(
                styles.root,
                className,
                styles['cipher-container'],
                CardContainer_module['cipher-section']
            )}
        >
            <div className={styles['cipher-wrapper']}>
                <div className={styles['cipher-field-wrapper']}>
                    <p className={styles['cipher-field-title']}>Alphabet</p>
                    <div className={styles['cipher-section-content']}>
                        <select className={styles['cipher-section-input']} />
                        <textarea className={styles['cipher-section-input']} />
                    </div>
                </div>
                <div className={styles['cipher-field-wrapper']}>
                    <p className={styles['cipher-field-title']}>key</p>
                    <div className={styles['cipher-section-content']}>
                        <textarea className={styles['cipher-section-input']} />
                        <textarea className={styles['cipher-section-input']} />
                    </div>
                </div>
                <div className={styles['cipher-field-wrapper']}>
                    <p className={styles['cipher-field-title']}>Encript / Decript</p>
                    <div className={styles['cipher-section-content']}>
                        <textarea className={styles['cipher-section-input']} />
                        <textarea className={styles['cipher-section-input']} />
                    </div>
                </div>
            </div>
        </div>
    );
};
