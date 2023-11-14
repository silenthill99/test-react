import { CareScale } from "./CareScale"
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export const PlantItem = ({cover, name, light, water}) => {
    return(
        <li className="lmj-plant-item" onClick={() => handleClick(name)}>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    )
}