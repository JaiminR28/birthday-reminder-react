import React from "react";

const List = ({ people }) => {
	console.log(people);
	return people.map((person) => <h2 key={person.id}>{person.name}</h2>);
};

export default List;
