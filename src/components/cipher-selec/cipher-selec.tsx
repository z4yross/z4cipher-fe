import classNames from 'classnames';
import styles from './cipher-selec.module.scss';

import * as z4ypher from 'z4cipher';
import { useState } from 'react';

export interface CipherSelecProps {
    className?: string;
    cipherList: typeof z4ypher.ciphers;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cipher-selecs-and-templates
 */
export const CipherSelec = ({ className }: CipherSelecProps) => {
    const [currentCipher, setCipher] = useState(z4ypher.ciphers[0]);

    const handleCipherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const cipherName = event.target.value;
        const cipher = z4ypher.ciphers.find((cipher) => cipher.cipherName === cipherName);
        if (cipher) {
            setCipher(cipher);
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <select onChange={handleCipherChange}>
                {z4ypher.ciphers.map((cipher, index) => {
                    return <option key={index}>{cipher.cipherName}</option>;
                })}
            </select>
            <div>
                <div>
                    <h3>Type</h3>
                    <p>{currentCipher.type}</p>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>{currentCipher.description}</p>
                </div>
            </div>
        </div>
    );
};
