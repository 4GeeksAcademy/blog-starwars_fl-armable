import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Back to home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/blog">
						<button className="btn btn-primary">Check REACT in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};