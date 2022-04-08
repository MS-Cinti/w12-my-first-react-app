function Beer({info, randomNum}) {
    //console.log(list.info)
    const {title, sub, text} = info;
    return (
        <div className="beer">
            <h3>{title}</h3>
            <p>{sub}</p>
            <p>{text}</p>
            <button onClick={ () => {console.log(`clicked`) }}>Click me</button>
        </div>
    )
}

export default Beer;
