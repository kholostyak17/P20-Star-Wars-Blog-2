import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="TARJETA card text-center text-warning bg-dark border-warning m-3">
			<img
				className="card-img-top"
				src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
					continents except Antarctica
				</p>
				<a href="#" className="btn btn-warning font-weight-bold text-dark">
					Learn More
				</a>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string
};
