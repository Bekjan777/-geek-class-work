import { useEffect, useState, useRef } from 'react';

export default function PageMain() {
    // State for Random Color Generator
    const [buttonColors, setButtonColors] = useState(Array(4).fill('#FFFFFF'));
    const [jsColor, setJsColor] = useState('#ff0000');

    // State for Slider
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef([]);

    // State for Slide Timer
    useEffect(() => {
        const autoSlider = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slidesRef.current.length);
        }, 10000);

        return () => clearInterval(autoSlider);
    }, []);

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code.toLowerCase() === 'space') {
                event.preventDefault();
                setRandomColors();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        setRandomColors();
    }, []);

    const generateRandomColor = () => {
        const hexCodes = '0123456789ABCDEF';
        let color = '';
        for (let i = 0; i < 6; i++) {
            color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
        }
        return '#' + color;
    };

    const setRandomColors = () => {
        const newColors = Array(4)
            .fill(null)
            .map(() => generateRandomColor());
        setButtonColors(newColors);
    };

    const handleColorButtonClick = color => {
        setJsColor(color);
    };

    const handleNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slidesRef.current.length);
    };

    const handlePrevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + slidesRef.current.length) % slidesRef.current.length);
    };

    const slides = [
        {
            title: 'regular expression',
            content:
                'Простыми словами, регулярное выражение - это набор символов, который задает определенные правила для поиска и сопоставления текста. Вы можете использовать регулярные выражения, чтобы найти определенные строки в тексте, заменить части строки на другие значения или извлечь нужную информацию из текста.',
            link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions',
        },
        {
            title: 'recursion',
            content:
                'Простыми словами, рекурсия - это, когда функция делает повторяющиеся вызовы самой себя для решения задачи, пока не достигнет определенного условия выхода из рекурсии.',
            link: 'https://learn.javascript.ru/recursion',
        },
        {
            title: 'json',
            content:
                'Простыми словами, JSON - это способ представления данных в виде текста, чтобы они могли быть легко поняты и использованы различными программами. Он использует простые правила для описания объектов и массивов, а также для представления простых типов данных, таких как строки, числа, логические значения и т.д.',
            link: 'https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON',
        },
        {
            title: 'event loop',
            content:
                'Простыми словами, event loop похож на дежурного, который непрерывно проверяет, произошло ли какое-либо событие, и реагирует на него, когда оно происходит. Он имеет список задач, которые нужно выполнить, и он перебирает этот список событий одно за другим, обрабатывая каждое событие, когда оно наступает.',
            link: 'https://highload.today/kak-ustroen-event-loop-v-javascript-parallelnaya-model-i-tsikl-sobytij/',
        },
    ];

    return (
        <>
            <div className="main_block">
                <div className="container">
                    <div className="inner_main">
                        <h1>
                            <strong id="js-color" style={{ color: jsColor }}>
                                JavaScript
                            </strong>{' '}
                            - на самом деле очень легко и просто!
                        </h1>
                        <div className="colors-buttons">
                            {buttonColors.map((color, index) => (
                                <button
                                    key={index}
                                    className="btn btn-color"
                                    onClick={() => handleColorButtonClick(color)}
                                    style={{ backgroundColor: color }}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider_block">
                <div className="container">
                    <div className="inner_slider">
                        <div className="slider">
                            <button className="btn-slide" id="prev" onClick={handlePrevSlide}>
                                &lt;prev
                            </button>
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`slide ${currentIndex === index ? 'active_slide' : ''}`}
                                    ref={el => (slidesRef.current[index] = el)}
                                    style={{ display: currentIndex === index ? 'block' : 'none' }}
                                >
                                    <div className="slide_card">
                                        <h3>{slide.title}</h3>
                                        <p>{slide.content}</p>
                                        <a href={slide.link} target="_blank" rel="noopener noreferrer">
                                            узнать подробнее
                                        </a>
                                    </div>
                                </div>
                            ))}
                            <button className="btn-slide" id="next" onClick={handleNextSlide}>
                                next&gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="botlle">
                <div className="container">
                    <div className="bottle_inner">
                        <a href="pages/monster.html">
                            <div className="bowl">
                                <div className="shadow"></div>
                                <div className="liquid"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="block_video">
                <div className="container">
                    <h3>Полезный ролик про Event Loop</h3>
                    <div className="inner_block_video">
                        <iframe
                            width="80%"
                            height="450"
                            src="https://www.youtube.com/embed/zDlg64fsQow"
                            title="YouTube video player"
                            frameBorder="2"
                            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}
