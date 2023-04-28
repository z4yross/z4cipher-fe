import classNames from 'classnames';
import styles from './card-container.module.scss';
import { CipherCard } from '../cipher-card/cipher-card';

import z4ypher from 'z4cipher';
import App_module from '../../App.module.scss';

export interface CardContainerProps {
    className?: string;
    setCipher: (key: number) => void;
    algos: typeof z4ypher.ciphers;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-card-containers-and-templates
 */
export const CardContainer = ({ className, setCipher, algos }: CardContainerProps) => {
    return (
        <div className={classNames(className, styles['card-container'], styles['cipher-section'])}>
            <div>
                {algos.map((cipher, index: number) => {
                    return (
                        <CipherCard
                            cipherKey={index}
                            cipherType={cipher.type}
                            cipherName={cipher.cipherName}
                            cipherDescription={cipher.description}
                            setCipher={setCipher}
                        />
                    );
                })}
            </div>
        </div>
    );
};
