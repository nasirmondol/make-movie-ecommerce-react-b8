import { useEffect, useState } from "react";
import Actor from "../Actor/Actor";

const Actors = ({handleNameCart}) => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setActors(data))

    }, []);
    // console.log(actors);
    return (
        <div className="w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-10">
                {
                    actors.map(actor => <Actor
                        key={actor.id}
                        actor={actor}
                        handleNameCart={handleNameCart}
                    ></Actor>)
                }
            </div>
        </div>
    );
};

export default Actors;