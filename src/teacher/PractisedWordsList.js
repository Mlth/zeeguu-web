import { Fragment } from "react";
import { AttemptIcons } from "./AttemptIcons";
import { v4 as uuid } from "uuid";
import { shortFormatedDate } from "./FormatedDate";
import ExerciseType from "./ExerciseType";

const PractisedWordsList = ({ words }) => {
  console.log(words)

  return (
    <Fragment>
      {words && words.map((word) => (
        <div key={word + uuid()}>
            <div
              key={uuid()}
              style={{
                borderLeft: "solid 3px #5492b3",
                marginBottom: "38px",
                minWidth: 325,
                userSelect: "none",
              }}
            >
              <p
                style={{
                  color: "#44cdff",
                  marginBottom: "-15px",
                  marginTop: "0px",
                  marginLeft: "1em",
                }}
              >
                {word.translation.toLowerCase()}
              </p>
              <p style={{ marginLeft: "1em", marginBottom: "-5px" }}>
                <b>{word.word}</b>
              </p>

              {word.exerciseAttempts.map((exercise) => (
                <div
                  key={uuid()}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "1em",
                    fontSize: "small",
                    marginBottom: "-25px",
                  }}
                >
                  <p style={{ color: "#808080" }}>{shortFormatedDate(exercise.time)}</p>
                  <p style={{ color: "#808080", marginLeft: ".5em" }}>
                  <ExerciseType source={exercise.source}/>
                  </p>
                  <AttemptIcons
                    attemptString={exercise.outcome}
                    feedback={exercise.feedback}
                  />
                </div>
              ))}
            </div>
        </div>
      ))}
      
{/*       {words && words.map((word) => (
        <div key={word + uuid()}>
          {word.isStudied === "true" && (
            <div
              key={uuid()}
              style={{
                borderLeft: "solid 3px #5492b3",
                marginBottom: "38px",
                minWidth: 270,
                userSelect: "none",
              }}
            >
              <p
                style={{
                  color: "#44cdff",
                  marginBottom: "-15px",
                  marginTop: "0px",
                  marginLeft: "1em",
                }}
              >
                {word.translation}
              </p>
              <p style={{ marginLeft: "1em", marginBottom: "-5px" }}>
                <b>{word.word}</b>
              </p>

              {word.exerciseAttempts.map((exercise) => (
                <div
                  key={uuid()}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "1em",
                    fontSize: "small",
                    marginBottom: "-25px",
                  }}
                >
                  <p style={{ color: "#808080" }}>{exercise.date}</p>
                  <p style={{ color: "#808080", marginLeft: ".5em" }}>
                    {exercise.type}
                  </p>
                  <AttemptIcons
                    attemptString={exercise.attempts}
                    feedback={exercise.feedback}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))} */}
    </Fragment>
  );
};
export default PractisedWordsList;
