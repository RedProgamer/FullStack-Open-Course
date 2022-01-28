import List from "./List";
import Specific from "./Specific";

function Content({ filteredList, setCountry }) {

    const clickedHandler = (id) => {
        const country = [filteredList[id]];
        setCountry(country);
    };

    if(filteredList.length >= 10) {
        return (<h1>Too many queries</h1>)
    }else if(filteredList.length === 1) {
        return (<Specific {...filteredList[0]} />)
    }else if(filteredList.length <= 5) {
        return (
            <ul>
                {filteredList.map((country, idx) => {
                    return <List key={idx} id={idx} name={country.name.common} showClicked={clickedHandler}/>
                })}
            </ul>
        );
    }else if(filteredList.length === 0) {
        return <h2>Nothing found!</h2>
    }
}

export default Content;