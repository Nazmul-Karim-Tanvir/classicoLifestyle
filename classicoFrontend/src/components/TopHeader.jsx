import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const TopHeader = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="w-full bg-black text-white text-md py-2 px-4">
            <div className="max-w-[1170px] mx-auto flex justify-between items-center">

                {/* Center Part */}
                <div className="flex-1 text-center">
                    <span className="text-gray-200">{t('promo')}</span>
                    <Link
                        to="/product"
                        className="text-white font-semibold underline ml-2"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        {t('shop_now')}
                    </Link>
                </div>

                {/* Right Part */}
                <div className="ml-4">
                    <select
                        className="bg-black text-white"
                        onChange={handleLanguageChange}
                        value={i18n.language}
                    >
                        <option value="en">English</option>
                        <option value="bn">বাংলা</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
