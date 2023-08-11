import { Link } from "react-router-dom";

const FilmDetails = ({ film, filmDetails }) => {
    console.log("Details for Film:" + film + filmDetails)
    return (
        <div className="film-details">
            {!filmDetails && (<Link style={{height: 21}} to={"/"+film._id} className="new-film-button">Go to Details</Link>)}
             
            <img className="film-item film-image" src={film.image || "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"} alt="Film Image" />
            <h4 className="film-item" style={{fontSize: 20, color: "#052144"}}>{film.name}</h4>
            <div className="film-item">
                <span className="film-item-heading">Description</span>
                <span className="film-item-details">{film.description}</span>
            </div>
            <div className="film-item"><span className="film-item-heading">Release Date</span><span className="film-item-details">{film.release_date.toString().split("T")[0]}</span></div>
            <div className="film-item"><span className="film-item-heading">Rating</span><span className="film-item-details">{film.rating}/5</span></div>
            <div className="film-item"><span className="film-item-heading">Ticket Price</span><span className="film-item-details">${film.ticket_price}</span></div>
            <div className="film-item"><span className="film-item-heading">Country</span><span className="film-item-details">{film.country}</span></div>
            <div className="film-item"><span className="film-item-heading">Genre</span><span className="film-item-details">{film.genre}</span></div>
        </div>
    )
}

export default FilmDetails;