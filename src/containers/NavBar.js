import "./NavBar.css";

function NavBar( {id} ) {
    return (
        <div id={id}>
            <p id="logo"><span>Dev</span>challenges.io</p>

            <ul>
                <li>Typography</li>
                <li>Grid</li>
                <li>Buttons</li>
                <li><strong>Inputs</strong></li>
            </ul>
        </div>
    )
}

export default NavBar;
