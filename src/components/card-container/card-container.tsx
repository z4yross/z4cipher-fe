import classNames from 'classnames';
import styles from './card-container.module.scss';
import { CipherCard } from '../cipher-card/cipher-card';

import z4ypher from 'z4cipher';
import App_module from '../../App.module.scss';
import { useEffect } from 'react';

import Flickity from 'react-flickity-component';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";

import 'swiper/scss';
import "swiper/css/effect-cards";

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
    useEffect(() => {
        console.log(algos);
    }, [algos]);

    const flickityOptions = {
        initialIndex: 0,
        wrapAround: true,
    };

    const handleSwipe = (e) => {
        setCipher(e.activeIndex);
    }

    return (
        <div className={classNames(className, styles['card-container'], styles['cipher-section'])}>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={classNames(styles['swiper'])}
                onSlideChange={(e) => handleSwipe(e)}
            >
                {algos.map((cipher, index: number) => {
                    return (
                        <SwiperSlide className={classNames(styles['swiper-slide'])} key={index}>
                            <CipherCard
                                className='cipher-card'
                                cipherKey={index}
                                cipherType={cipher.type}
                                cipherName={cipher.cipherName}
                                cipherDescription={cipher.description}
                                setCipher={setCipher}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
