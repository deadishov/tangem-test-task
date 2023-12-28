import React, { useEffect, useState } from 'react'
import giftsImage from '../assets/images/gifts.png'

const BannerBottom = () => {
    const [scrollClass, setScrollClass] = useState('');
    const [isBannerClosed, setIsBannerClosed] = useState(
        localStorage.getItem('bannerClosed') === 'true'
    );

    const closeBanner = () => {
        setIsBannerClosed(true);
        setScrollClass('')
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            if (scrollPosition >= 108 && !isBannerClosed) {
                setScrollClass('shown');
            } else {
                setScrollClass('');
            }
        };

        localStorage.setItem('bannerClosed', `${isBannerClosed}`);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isBannerClosed]);


    return (
        <div className="content__bottom">
            <div className={`content__bottom-banner ${scrollClass}`}>
                <svg
                    onClick={closeBanner}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697Z" fill="white" fillOpacity="0.3" />
                </svg>
                <div className="content__bottom-img">
                    <img src={giftsImage} alt="gifts" />
                </div>
                <div className="content__bottom-text">
                    <h3 className="content__bottom-title">Black Friday</h3>
                    <p className="content__bottom-sale">10%OFF</p>
                    <p className="content__bottom-code">Use code <span>10FRIDAY</span> at checkout</p>
                    <button className="content__bottom-btn">Shop now through Monday</button>
                </div>
            </div>
        </div>
    )
}

export default BannerBottom
