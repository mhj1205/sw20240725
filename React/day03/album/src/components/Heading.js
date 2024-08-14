import { Link } from "react-router-dom";

export default () => {
    return (<div class="w3-container w3-teal">
        <h1>Summer Holiday</h1>
        <nav><p>
            <Link to="/">Home</Link> | 
            <Link to="/album">Album</Link> | 
            <Link to="/contact">Contact</Link> | 
            <Link to="/blogs">Blogs</Link>
        </p></nav>
    </div>);
}