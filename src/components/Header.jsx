import { Component } from "react";

class Header extends Component{     //a Header megörökölt sok mindent a Componentből, ezeket tudjuk használni
    render()   {  //mi történjen a render metódus közben, a renderben található dolgokat átforgatja és a saját műveleteit hozzáadja
        return(
            <header>{this.props.title}</header>
        )
    }
}

export default Header;