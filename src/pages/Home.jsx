import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello! This is a blog page that use Hooks, Context y Router of REACT</h1>
			<p>
				<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png"} />
			</p>
		</div>
	);
}; 