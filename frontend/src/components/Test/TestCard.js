import React from "react";
import { Link } from "react-router-dom";
import text from "../../strings.json";

const TestCard = ({ data, onDelete, onEdit }) => {
    const handleDelete = () => onDelete(data.id);
    const handleEdit = () => onEdit(data);

    console.log("TEST CARD: ", data)

    return (
        <li className="movie_card">
            <div className="movie_info">
                <p>Node</p>
                <h4>{!data.Title ? "e" : data.Title}</h4>
                <p>{!data.Age ? "e" : data.Age}</p>
                <div className="movie_link">
                    <Link to={`/details/${data.id}`} target="_blank" className="link">
                        {text.strings.card.details}
                    </Link>
                    <Link onClick={handleDelete} className="link" style={{ color: "red", marginLeft: "1rem" }}>
                        {text.strings.card.delete}
                    </Link>
                    <button onClick={handleEdit} className="link" style={{ marginLeft: "1rem" }}>
                        {text.strings.button.edit}
                    </button>
                </div>
            </div>
        </li>
    );
};

export default TestCard;
