import Beer from './Beer.jsx';

/*function Beers(props) {
    console.log(props.list)
    return (
        <div className="beers">
            {props.list.map( item => <Beer info={item} />)}
        </div>
    )
}*/

//felsőből kivettük a propsot destructuringgel
const Beers = props => {
    const {list} = props;
    const a = 10;
    console.log(<Beer info={list[0]} randomNum={a} key={100}/>)
    return (
        <div className="beers">
            {list.map( (item, index)  => <Beer info={item} randomNum={a} key={index}/>)}
        </div>
    )
}

export default Beers;
