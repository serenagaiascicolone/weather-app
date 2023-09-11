import { useSearchParams } from "react-router-dom"
import SelectedCity from "../components/City/SelectedCity";
import { useOutletContext } from "react-router-dom";

export function SelectedCityRoute (){
const isNight = useOutletContext()
console.log(isNight)
    const [params] = useSearchParams ();

    const lat = params.get('lat')
    const lon = params.get('lon')
    
    return (
        <SelectedCity coords={{lat, lon}} isNight={isNight}>
            <p>{lat}/{lon}</p>
            </SelectedCity>
    )
}