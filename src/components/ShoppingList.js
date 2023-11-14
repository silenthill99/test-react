import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'

export const ShoppingList = () => {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    console.log(categories)
    return(
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
                        {plant.isSpecialOffer ? <span>Soldes</span> : null}
					</li>
				))}
			</ul>
        </div>
    )
}