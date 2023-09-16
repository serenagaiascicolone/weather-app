import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { addedCity } from './citiesSlice'

export const weatherApi = createApi ({
    reducerPath: 'weatherApi',
    // prima parte di url che rimane sempre uguale
    baseQuery: fetchBaseQuery({ baseUrl : 'https://api.openweathermap.org/'}),
    endpoints: (builder) => ({

        // aggiungere nuova città => 
        // passo nome città
        // ottengo le sue coordinate

        getCoordinatesByCityName: builder.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                // seconda parte URL (query) che cambia in base alla fetch che richiediamo
                const coordsResult = await fetchWithBQ(`geo/1.0/direct?q=${_arg.name}&limit=1&lang=it&appid=${process.env.REACT_APP_OPENWEATHER_API}`);

                if(coordsResult.error) return {error:coordsResult.error}

                const city = {
                    id: _arg.id,
                    name: coordsResult.data[0].name,
                    coords: {
                        lat: coordsResult.data[0].lat,
                        lon: coordsResult.data[0].lon,
                    }
                }
                 // l'oggetto city proviene direttamente dal server quindi faccio il dispaccio dell'azione dall'endpoint   
                _queryApi.dispatch(addedCity(city));
                return coordsResult.data ? city : {error: coordsResult.error}
            }

        }),
        getCityNameByCoordinates: builder.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const cityResult = await fetchWithBQ(`geo/1.0/reverse?lat=${_arg.coords.lat}&lon=${_arg.coords.lon}&limit=1&lang=it&appid=${process.env.REACT_APP_OPENWEATHER_API}`);
                if(cityResult.error) return {error: cityResult.error}
                const city = {
                    id: _arg.id,
                    name: cityResult.data[0].name,
                    // coords: _arg.coords,
                    coords: {
                        lat: cityResult.data[0].lat,
                        lon: cityResult.data[0].lon
                      },
                    position: true,
                    }
                    _queryApi.dispatch(addedCity(city));
                
                return cityResult.data ? city : {error: cityResult.error}
            }
        }),
        // con questa chiamata prendiamo il meteo giornaliero delle città salvate in local storage 
            getWeatherByCoords: builder.query({
            query: (coords) => `data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&lang=it&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`,
        
        }),
        // meteo settimanale e orario
        getForecastByCoords: builder.query({
            query: (coords) => `data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&lang=it&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`
        })
    })
})


export const {useGetCoordinatesByCityNameQuery, useGetWeatherByCoordsQuery, useGetCityNameByCoordinatesQuery, useGetForecastByCoordsQuery} = weatherApi