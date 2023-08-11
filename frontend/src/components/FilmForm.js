const { useState } = require("react")
const { Form } = require("react-router-dom")

const FilmForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [release_date, setReleaseDate] = useState('2023-12-12')
    const [rating, setRating] = useState('')
    const [ticket_price, setTicketPrice] = useState('')
    const [country, setCountry] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState(null)
    const [err, setErr] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const film = {
            name, description, release_date, rating, ticket_price, country, genre, image
        }

        const response = await fetch('/api/films/create', {
            method: 'POST',
            body: JSON.stringify(film),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if(!response.ok){
            setErr(json.error)
        }
        if (response.ok){
            setErr(null)
            console.log('New Film Added')
            window.location.href = '/';
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add new Film</h3>

            <label>Film Name:</label>
            <input 
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name} 
            />

            <label>Film Description:</label>
            <input 
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description} 
            />

            <label>Film Date:</label>
            <input 
            type="date"
            onChange={(e) => setReleaseDate(e.target.value)}
            value={release_date} 
            />

            <label>Film Rating:</label>
            <input 
            type="number"
            step="0.1"
            onChange={(e) => setRating(e.target.value)}
            value={rating} 
            />

            <label>Film Ticket:$</label>
            <input 
            type="number"
            step="0.01"
            onChange={(e) => setTicketPrice(e.target.value)}
            value={ticket_price} 
            />
            
            <label>Film Country:</label>
            <input 
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            value={country} 
            />
            
            <label>Film Genre</label>
            <input 
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            value={genre} 
            />
            <label htmlFor="imagePicker">Select an Image:</label>
            <input
                type="file"
                id="imagePicker"
                accept="image/*"
                onChange={(e) => setImage(e.target.value)}
            />
            {image && (
                <div>
                <p>Selected Image:</p>
                <img src={URL.createObjectURL(image)} alt="Selected" />
                </div>
            )}
        <button>Add Film</button>
        {err && <div className="error">{err}</div>}
        </form>
    )
}

export default FilmForm