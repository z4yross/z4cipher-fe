import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { CardContainer } from './components/card-container/card-container';

import * as z4ypher from 'z4cipher';
import { CipherContainer } from './components/cipher-container/cipher-container';

function App() {
    const algos = z4ypher.ciphers;
    const [currentCipher, setCipher] = useState(0);

    const handleCipher = (key: number) => {
        setCipher(key);
    };

    useEffect(() => {
        // console.log(currentCipher);
    }, [currentCipher]);

    return (
        <div className={styles.App}>
            <CardContainer algos={algos} setCipher={handleCipher} />
            <CipherContainer
                cipherName={algos[currentCipher].cipherName}
                cipherType={algos[currentCipher].type}
                cipher={algos[currentCipher].cipher}
                // @ts-ignore
                cipherAlphabet={algos[currentCipher].allowedAlphabets}
            />
        </div>
    );
}

export default App;
