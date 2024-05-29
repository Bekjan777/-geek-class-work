import { useEffect } from 'react';
import '../../style.css';

export default function Modal({ isVisible, onClose }) {
    useEffect(() => {
        const closeModalOnScroll = () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const threshold = viewportHeight / 2;

            if (scrollTop > threshold) {
                onClose();
            }
        };

        if (isVisible) {
            window.addEventListener('scroll', closeModalOnScroll);

            const timer = setTimeout(() => {
                onClose();
            }, 10000);

            return () => {
                window.removeEventListener('scroll', closeModalOnScroll);
                clearTimeout(timer);
            };
        }
    }, [isVisible, onClose]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const { name, phone } = Object.fromEntries(new FormData(form).entries());
        const text = `Name: ${name}\nPhone: ${phone}`;
        const token = 'YOUR_BOT_TOKEN';
        const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;
        const chatId = '@YOUR_CHAT_ID';

        await fetch(URL_API, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }),
        });
    };

    if (!isVisible) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal_dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal_content">
                    <form onSubmit={handleFormSubmit}>
                        <div className="modal_close" onClick={onClose}>&times;</div>
                        <div className="modal_title">Мы свяжемся с вами как можно быстрее!</div>
                        <input
                            required
                            placeholder="Ваше имя"
                            name="name"
                            type="text"
                            className="modal_input"
                        />
                        <input
                            required
                            placeholder="Ваш номер телефона"
                            name="phone"
                            type="text"
                            className="modal_input"
                        />
                        <button className="btn btn_dark btn_min">Перезвонить мне</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
