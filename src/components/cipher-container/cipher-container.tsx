import classNames from 'classnames';
import styles from './cipher-container.module.scss';
import CardContainer_module from '../card-container/card-container.module.scss';
import CipherCard_module from '../cipher-card/cipher-card.module.scss';

import * as z4cipher from 'z4cipher';
import { useEffect, useState } from 'react';

export interface CipherContainerProps {
    className?: string;
    cipherName: string;
    cipherType: string;
    cipher: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cipher-containers-and-templates
 */

export const CipherContainer = ({
    className,
    cipherName,
    cipherType,
    cipher,
}: CipherContainerProps) => {
    const alphabets = z4cipher.alphabets;
    const [alphabetID, setAlphabetID] = useState(Object.keys(alphabets)[0]);

    // @ts-ignore
    const [alphabet, setAlphabet] = useState(alphabets[Object.keys(alphabets)[0]].getInstance());

    const [privateKey, setPrivateKey] = useState(0);
    const [publicKey, setPublicKey] = useState(0);

    const [plainText, setPlainText] = useState('');
    const [cipherText, setCipherText] = useState('');

    useEffect(() => {
        setPlainText('');
        setCipherText('');
    }, [alphabetID]);

    useEffect(() => {
        const ci = new cipher(publicKey, true, alphabet);
        setCipherText(ci.encrypt(plainText));
    }, [publicKey]);
    
    const handleAlphabetChange = (_alphabet: string, value: string) => {
        const find = Object.keys(alphabets).find((key) => {
            if (key === 'custom') return false;
            // @ts-ignore
            if (alphabets[key].getInstance().getAlphabet() === value) return true;
        });

        if (find !== undefined && _alphabet !== 'custom') {
            setAlphabetID(_alphabet);
            // @ts-ignore
            setAlphabet(alphabets[find].getInstance());
            return;
        }

        if (alphabetID === 'custom' && _alphabet === 'custom') {
            const unique = value
                .split('')
                .filter((item, i, ar) => ar.indexOf(item) === i)
                .join('');

            if (unique.length !== value.length) return;

            if (value === alphabet.getAlphabet()) return;

            // @ts-ignore
            alphabets.custom.resetInstance();
            // @ts-ignore
            setAlphabet(alphabets.custom.getInstance(value));
            return;
        }

        // @ts-ignore
        const curr = alphabets[_alphabet];

        setAlphabetID(_alphabet);
        if (_alphabet === 'custom') {
            const unique = value
                .split('')
                .filter((item, i, ar) => ar.indexOf(item) === i)
                .join('');

            if (unique.length !== value.length) return;

            // @ts-ignore
            alphabets.custom.resetInstance();
            setAlphabet(curr.getInstance(value));
            return;
        }

        setAlphabet(curr.getInstance());
    };

    const handlePublicKeyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (cipherName === 'Caesar') {
            // chek if value is a number
            if (isNaN(parseInt(e.target.value))) return;
            setPublicKey(parseInt(e.target.value));
            const currentCipher = new cipher(parseInt(e.target.value), true, alphabet);
            const currentText = plainText;
            setCipherText(currentCipher.encrypt(plainText));
        }
    };

    const handlePlainTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const valid = e.target.value.split('').every((char) => {
            return alphabet.getAlphabet().includes(char);
        });

        if (!valid) return;

        setPlainText(e.target.value);
        const currentCipher = new cipher(publicKey, true, alphabet);
        setCipherText(currentCipher.encrypt(e.target.value));
    };

    const handleCipherTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const valid = e.target.value.split('').every((char) => {
            return alphabet.getAlphabet().includes(char);
        });

        if (!valid) return;

        setCipherText(e.target.value);
        const currentCipher = new cipher(publicKey, true, alphabet);
        setPlainText(currentCipher.decrypt(e.target.value));
    };

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
                        <select
                            className={styles['cipher-section-input']}
                            onChange={(e) =>
                                handleAlphabetChange(
                                    e.target.value,
                                    // @ts-ignore
                                    alphabets[e.target.value].getInstance().getAlphabet()
                                )
                            }
                            value={alphabetID}
                        >
                            {Object.keys(alphabets).map((key, index) => {
                                return (
                                    <option key={index} value={key} disabled={key === 'custom'}>
                                        {key}
                                    </option>
                                );
                            })}
                        </select>
                        <textarea
                            className={styles['cipher-section-input']}
                            value={alphabet.getAlphabet()}
                            onChange={(e) => handleAlphabetChange('custom', e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles['cipher-field-wrapper']}>
                    <p className={styles['cipher-field-title']}>key</p>
                    <div className={styles['cipher-section-content']}>
                        <textarea
                            className={styles['cipher-section-input']}
                            placeholder="private key"
                            disabled={cipherType === 'Symmetric'}
                        />
                        <textarea
                            className={styles['cipher-section-input']}
                            placeholder="public key"
                            value={publicKey}
                            onChange={handlePublicKeyChange}
                        />
                    </div>
                </div>
                <div className={styles['cipher-field-wrapper']}>
                    <p className={styles['cipher-field-title']}>Encript / Decript</p>
                    <div className={styles['cipher-section-content']}>
                        <textarea
                            className={styles['cipher-section-input']}
                            placeholder="cipher text"
                            value={cipherText}
                            onChange={handleCipherTextChange}
                        />
                        <textarea
                            className={styles['cipher-section-input']}
                            placeholder="plain text"
                            value={plainText}
                            onChange={handlePlainTextChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
