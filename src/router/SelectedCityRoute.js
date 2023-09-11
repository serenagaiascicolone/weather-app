import { useSearchParams } from "react-router-dom"
import SelectedCity from "../components/City/SelectedCity";


export function SelectedCityRoute (){

    const [params] = useSearchParams ();

    const lat = params.get('lat')
    const lon = params.get('lon')
    
    return (
        <SelectedCity coords={{lat, lon}}>
            <p>{lat}/{lon}</p>
            </SelectedCity>
    )
}