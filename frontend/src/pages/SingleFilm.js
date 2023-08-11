import {useEffect, useState} from 'react'
import FilmDetails from '../components/FilmDetails'
import { useParams } from 'react-router-dom'

const SingleFilm = () => {
    const [film, setFilm] = useState(null)
    const {id} = useParams()
    console.log("Id from params: " + id)
    // useEffect(()=>{
    //     console.log("use effect running")
    // }, [id])
    useEffect(() => {
        console.log("Getting id from server")
        const fetchFilm = async () => {
            const response = await fetch('/api/films/' + id)
            const json = await response.json()

            if(response.ok){
                setFilm(json)
                console.log("Data retrieved: " + film)
            }
        }

        fetchFilm()
    }, [])

    const deleteFilm = async () => {
        const confirmed = window.confirm('Are you sure you want to delete the film?');

        if (!confirmed) 
            return
        const response = await fetch('/api/films/'+id, {
            method: 'DELETE'
        })

        const json = await response.json()
        if(!response.ok){
            console.log(json.error)
        }
        if (response.ok){
            console.log('Film Deleted' + json.film)
            alert(`Film '${film.name}' Deleted successfully`)
            window.location.href = '/';
        }
    }
    return (
        <div>
            <button className="new-film-button" onClick={deleteFilm}>Delete</button>
            <div className="films-main"> 
            {film ? (
                // Render the data only if it's available
                <div>
                    {<FilmDetails film={film} filmDetails={true}></FilmDetails> }
                {/* Render data */}
                </div>
            ) : (
                // Render loading or placeholder UI
                <div>Loading...</div>
            )}
            </div>
        </div>
    )
}

export default SingleFilm