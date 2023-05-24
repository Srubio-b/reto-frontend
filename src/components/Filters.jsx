import { useEffect, useId, useState } from 'react'
import './Filters.css'




export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const [searchTerm, setSearchTerm] = useState('');


    const minPriceFilteredId = useId()
    const categoryFilteredId = useId()
    const titleFilteredId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }

    const handleChangeTitle = (event) => {
        setSearchTerm(event.target.value)
        onChange(prevState =>({
            ... prevState,
            title: event.target.value
        }))
    }


    return (
        <section className="filters">

            <div className='title-filter'>
                <label htmlFor={titleFilteredId}>Busque aquí</label>
                <input 
                type="text" 
                id={titleFilteredId}
                placeholder='Buscar productos'
                value={searchTerm}
                onChange={handleChangeTitle}
                />
            </div>

            <div>
                <label htmlFor={minPriceFilteredId}>Price a partir de:</label>
                <input 
                type="range"
                id={minPriceFilteredId} 
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilteredId}>Categoría</label>
                <select id={categoryFilteredId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>



    )
}