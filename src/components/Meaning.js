import React from "react";
import Synonyms from "../components/Synonyms";
import "../App.css";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        console.log(definition.synonyms);
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <small className="text-muted">i.e. {definition.example}</small>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
