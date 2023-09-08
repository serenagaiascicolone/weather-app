import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { addedCity } from './citiesSlice'

export const weatherApi = createApi ({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl : 'https://api.openweathermap.org/'}),
    endpoints: (builder) => ({

        // aggiungere nuova città => 
        // passo nome città
        // ottengo le sue coordinate

        getCoordinatesByCityName: builder.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const coordsResult = await fetchWithBQ(``);

                if(coordsResult.error) return {error.coordsResult.error}

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

        })
    })
})