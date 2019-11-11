import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CharacterCard(props) {
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        const { id } = props.match.params;
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        character ? (
        <section>
            {Object.entries(character).map(([key, value]) => {
                if (typeof value === 'object' && !Array.isArray(value)) return;
                return (
                    <p>
                    <span>{key}:</span> {Array.isArray(value) ? value.join(', ') : value}
                    </p>
                );
            })}
        </section>
        ) : null
    );
}
