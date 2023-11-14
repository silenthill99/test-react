import React from "react"
import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import { CareScale } from "./CareScale"
import { PlantItem } from "./PlantItem"
import { YoutubeVideo } from "../datas/YoutubeVideos"

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
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        />
				))}
			</ul>
            <YoutubeVideo id="c-nm_ZclVHs"/>
        </div>
    )
}