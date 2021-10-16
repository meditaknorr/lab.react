import React, { useState, useEffect } from 'react';
import './styles.scss';
import localstorage from '../../hooks/useLocalStorage'
import Checkbox from '../../components/checkbox/componente.jsx';

export default function () {
    const [isprocessing, setIsprocessing] = useState(false);
    const [consentcookies, setConsentCookies] = useState(false);
    const [consentlocation, setConsentlocation] = useState(false);
    const [fail, setFail] = useState({ code: 0, message: "" });
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const { setData, getData, getObject, setObject, remove, check } = localstorage();

    useEffect(() => {
        if (consentcookies && consentlocation) {
            alert("10 Dez");
        }
    }, [consentcookies, consentlocation]);

    return (
        <React.Fragment>
            <div className={'consent-container'}>
                Preload
                <form>
                    <Checkbox mame={'consent_Cookies'} desc={'Permitir o uso e acesso a Cookies.'} onPress={CookiesHandler} />
                    <Checkbox mame={'consent_Geocodes'} desc={'Permitir o acesso e o uso de geocódigos.'} onPress={GeoHandler} />
                    <span>{latitude + ',' + longitude}</span>
                </form>
            </div>
        </React.Fragment>
    )

    function CookiesHandler() {
        setConsentCookies(prevState => !consentcookies);
        setData("@cookies", !consentcookies);
    }

    function GeoHandler() {
        if(!navigator.geolocation) {
            setFail(prevState => {
                prevState.code = -1;
                prevState.message = "Atualmente o seu navegador não suporta geo-códigos. Tente atualizar ou usar outro navegador.";
            });
        } else {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const coords = await position.coords;
                const { latitude, longitude } = coords;
                setLongitude(longitude);
                setLatitude(latitude);
                setConsentlocation(prevState => !consentlocation);
                setData("@geo", !consentlocation);
                setObject("@coords", { lat: latitude, long: longitude });
            }, () => {
                setFail(prevState => {
                    prevState.code = 1;
                    prevState.message = "Ocorreu um erro ao tentar obter geo-códigos. Voltaremos a tentar obter mais tarde.";
                });
            });
        }
    }
}
