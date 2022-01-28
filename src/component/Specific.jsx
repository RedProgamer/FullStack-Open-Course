function Specific(props) {
    const languages = props.languages;
    const langs = Object.values(languages);
    
    return (
        <div>
            <h1>{props.name.common}</h1>
            <p>
                <p>region : {props.continents}</p>
                <p>capital: {props.capital}</p>
                <p>population: {props.population}</p>
            </p>
            <h2>Languages : </h2>
            <ul>
                {langs.map(language => {
                    return <li>{language}</li>
                })}
            </ul>
            <img src={props.flags.png} alt="country's flag" />
        </div>
    );
}

export default Specific;