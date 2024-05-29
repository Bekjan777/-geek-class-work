import  { useState, useEffect } from 'react';

export default function Lessons() {
    // Phone Checker state and handlers
    const [phoneInput, setPhoneInput] = useState('');
    const [phoneResult, setPhoneResult] = useState('');

    const handlePhoneCheck = () => {
        const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/;
        if (regExp.test(phoneInput)) {
            setPhoneResult('OK');
        } else {
            setPhoneResult('NOT OK');
        }
    };

    // Tab Slider state and handlers
    const [activeTab, setActiveTab] = useState(0);
    const tabContentBlock = [
        {
            title: "Делегирование событий",
            content: "В JavaScript делегирование событий - это когда мы используем один обработчик событий для группы элементов..."
        },
        {
            title: "classList",
            content: "classList в JavaScript - это свойство, которое позволяет нам работать с классами элемента HTML..."
        },
        {
            title: "add()",
            content: "Метод add позволяет добавить новый класс к списку классов элемента..."
        },
        {
            title: "remove()",
            content: "Метод remove позволяет удалить класс из списка классов элемента..."
        },
        {
            title: "contains()",
            content: "Метод contains позволяет проверить, содержит ли элемент определенный класс..."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab(prev => (prev + 1) % tabContentBlock.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Converter state and handlers
    const [som, setSom] = useState('');
    const [usd, setUsd] = useState('');
    const [eur, setEur] = useState('');

    const handleConversion = async (value, currency) => {
        try {
            const response = await fetch("../data/converter.json", {
                headers: { "Content-type": "application/json" }
            });
            const data = await response.json();

            if (currency === 'som') {
                const usdValue = value ? (value / data.usd).toFixed(2) : '';
                const eurValue = value ? (value / data.euro).toFixed(2) : '';
                setUsd(usdValue);
                setEur(eurValue);
            } else if (currency === 'usd') {
                const somValue = value ? (value * data.usd).toFixed(2) : '';
                const eurValue = value ? ((value * data.usd) / data.euro).toFixed(2) : '';
                setSom(somValue);
                setEur(eurValue);
            } else if (currency === 'eur') {
                const somValue = value ? (value * data.euro).toFixed(2) : '';
                const usdValue = value ? ((value * data.euro) / data.usd).toFixed(2) : '';
                setSom(somValue);
                setUsd(usdValue);
            }
        } catch (error) {
            console.error('Error fetching conversion data:', error);
            setSom('');
            setUsd('');
            setEur('');
        }
    };

    const handleSomChange = (e) => {
        const value = e.target.value;
        setSom(value);
        handleConversion(value, 'som');
    };

    const handleUsdChange = (e) => {
        const value = e.target.value;
        setUsd(value);
        handleConversion(value, 'usd');
    };

    const handleEurChange = (e) => {
        const value = e.target.value;
        setEur(value);
        handleConversion(value, 'eur');
    };
    // Card Switcher state and handlers
    const [cardID, setCardID] = useState(1);
    const [cardData, setCardData] = useState({ title: '', completed: false });

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardID}`);
                const data = await response.json();
                setCardData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setCardData({ title: 'Error fetching data', completed: false });
            }
        };

        fetchCardData();
    }, [cardID]);

    const handleNextCard = () => {
        setCardID(prev => (prev < 200 ? prev + 1 : 1));
    };

    const handlePrevCard = () => {
        setCardID(prev => (prev > 1 ? prev - 1 : 200));
    };

    // Weather state and handlers
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({ name: '', temp: '', icon: '' });

    const handleCitySearch = async (event) => {
        setCity(event.target.value);
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=e417df62e04d3b1b111abeab19cea714`);
            const data = await response.json();
            setWeatherData({
                name: data.name || "City is not defined",
                temp: data?.main?.temp ? Math.round(data.main.temp - 273) + "°" : "///",
                icon: data?.weather ? `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` : "https://openweathermap.org/img/wn/02d.png"
            });
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData({ name: 'Error fetching data', temp: '///', icon: "https://openweathermap.org/img/wn/02d.png" });
        }
    };

    return (
        <>
            <div className="phone_block">
                <div className="container">
                    <h3>Phone checker</h3>
                    <div className="inner_phone_block">
                        <div className="form_phone">
                            <label htmlFor="phone_input">Phone Number</label>
                            <input type="text" id="phone_input" placeholder="+996 XXX XX-XX-XX" value={phoneInput}
                                   onChange={(e) => setPhoneInput(e.target.value)}/>
                            <button className="btn" id="phone_button" onClick={handlePhoneCheck}>Check number</button>
                            <span className="checker" id="phone_result"
                                  style={{color: phoneResult === 'OK' ? 'green' : 'red'}}>{phoneResult}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab_slider">
                <div className="container">
                    <h3>tab slider</h3>
                    <div className="inner_tab_slider">
                        <div className="tab_contents_block">
                            {tabContentBlock.map((content, index) => (
                                <div key={index} className="tab_content_block"
                                     style={{display: activeTab === index ? 'block' : 'none'}}>
                                    <h4>{content.title}</h4>
                                    <p>{content.content}</p>
                                </div>
                            ))}
                            <div className="tab_content_items">
                                {tabContentBlock.map((content, index) => (
                                    <div key={index}
                                         className={`tab_content_item ${activeTab === index ? 'tab_content_item_active' : ''}`}
                                         onClick={() => setActiveTab(index)}>
                                        {content.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="converter">
                <div className="container">
                    <h3>CONVERTER</h3>
                    <div className="inner_converter">
                        <div className="som">
                            <label htmlFor="som">Som</label>
                            <input type="number" id="som" value={som} onChange={handleSomChange}/>
                        </div>
                        <div className="usd">
                            <label htmlFor="usd">Usd</label>
                            <input type="number" id="usd" value={usd} onChange={handleUsdChange}/>
                        </div>
                        <div className="eur">
                            <label htmlFor="eur">Eur</label>
                            <input type="number" id="eur" value={eur} onChange={handleEurChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card_switcher">
                <div className="container">
                    <h3>Card Switcher</h3>
                    <div className="inner_card_switcher">
                        <button className="btn" id="btn-prev" onClick={handlePrevCard}>prev</button>
                        <div className="card" style={{borderColor: cardData.completed ? 'green' : 'red'}}>
                            <p>{cardData.title}</p>
                            <p style={{color: cardData.completed ? 'green' : 'red'}}>{cardData.completed ? 'Completed' : 'Not completed'}</p>
                            <span>{cardID}</span>
                        </div>
                        <button className="btn" id="btn-next" onClick={handleNextCard}>next</button>
                    </div>
                </div>
            </div>

            <div className="weather">
                <div className="container">
                    <h3>WEATHER</h3>
                    <div className="inner_weather">
                        <div>
                            <input type="text" className="cityName" placeholder="Найти погоду в..." value={city}
                                   onChange={handleCitySearch}/>
                        </div>
                        <div className="weather_block">
                            <span className="city">{weatherData.name}</span>
                            <hr/>
                            <span className="temp">{weatherData.temp}</span>
                            <img className="icon_weather" src={weatherData.icon} alt="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
