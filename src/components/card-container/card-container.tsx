import classNames from 'classnames';
import { CipherCard } from '../cipher-card/cipher-card';

import z4ypher from 'z4cipher';
import App_module from '../../App.module.scss';
import { useEffect } from 'react';

import Flickity from 'react-flickity-component';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/effect-cards';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import styles from './card-container.module.scss';

import './card-container.module.scss';
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

    // @ts-ignore
    const handleSwipe = (e) => {
        setCipher(e.activeIndex);
    };

    const pagination = {
        clickable: true,
    };

    return (
        <div className={classNames(className, styles['card-container'], styles['cipher-section'])}>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Pagination, Navigation]}
                className={classNames(styles['swiper'])}
                pagination={{
                    clickable: true,
                    // dynamicBullets: true,
                    bulletActiveClass: styles['swiper-pagination-bullet-active'],                    
                }}
                loop={true}
                onSlideChange={(e) => handleSwipe(e)}
            >
                {algos.map((cipher, index: number) => {
                    return (
                        <SwiperSlide className={classNames(styles['swiper-slide'])} key={index}>
                            <CipherCard
                                className="cipher-card"
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
