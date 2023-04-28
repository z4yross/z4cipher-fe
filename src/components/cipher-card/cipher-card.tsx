import classNames from 'classnames';
import styles from './cipher-card.module.scss';
import { useEffect } from 'react';

export interface CipherCardProps {
    className?: string;
    cipherName: string;
    cipherDescription: string;
    cipherType: string;
    setCipher: (key: number) => void;
    cipherKey: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cipher-cards-and-templates
 */
export const CipherCard = ({
    className,
    cipherName,
    cipherDescription,
    cipherType,
    cipherKey,
    setCipher
}: CipherCardProps) => {
    return (
        <div className={classNames(className, styles['cipher-card'])} onClick={() => setCipher(cipherKey)}>
            <div className={styles['cipher-card-container']}>
                <div>
                    <h6 className={styles['card-field-title']}>Name:</h6>
                    <h3 className={styles['card-field-content']}>{cipherName}</h3>
                </div>
                <div>
                    <h6 className={styles['card-field-title']}>Type:</h6>
                    <h3 className={styles['card-field-content']}>{cipherType}</h3>
                </div>
                <div className={styles.separator} />
                <div>
                    <div>
                        <h3 className={styles['card-field-content']}>Description:</h3>
                        <p className={styles['card-field-title']}>{cipherDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
