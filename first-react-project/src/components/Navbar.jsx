function Navbar (props) {

    return(
        <div >
           <h1> {props.element.appName} </h1>
           <img src={props.element.appLogo}/>
            
        </div>
    )

}

export default Navbar