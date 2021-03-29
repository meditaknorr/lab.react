const [error, setError] = useState({ code: 0, message: "" });
const [coordinates,setCoordinates] = useState({ lat: "", long: "" });
    
    function getGeocodes() {
        if(!navigator.geolocation) {
            setError(prevState => {
                prevState.code = -1;
                prevState.message = "Atualmente o seu navegador não suporta geo-códigos. Tente atualizar ou usar outro navegador.";
            });
        } else {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const coords = await position.coords;
                const { latitude, longitude } = await coords;
                setCoordinates(prevState => {
                    prevState.lat = latitude;
                    prevState.long = longitude;
                });
                setError(prevState => {
                    prevState.code = 0;
                    prevState.message = "";
                });
            }, () => {
                setErrormessage('');
                setError(prevState => {
                    prevState.code = 1;
                    prevState.message = "Ocorreu um erro ao tentar obter geo-códigos. Voltaremos a tentar obter mais tarde.";
                });
            });
        }
    }
