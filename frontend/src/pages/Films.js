import {useEffect, useState} from 'react'
import FilmSlider from '../components/FilmSlider'

const Films = () => {
    const [films, setFilms] = useState(null)

    useEffect(() => {
        const fetchFilms = async () => {
            const response = await fetch('/api/films')
            const json = await response.json()

            if(response.ok){
                setFilms(json)
            }
        }

        fetchFilms()
    }, [])

    return (
        <div>
            <button className="new-film-button"onClick={()=>{
                window.location.href="/create"
            }}>Add new Film</button>
            <p style={{textAlign: 'center'}}>Slide through to see all films</p>
            <div className="films-main"> 
                <FilmSlider films={films}/>
            </div>
        </div>
    )
}

export default Films