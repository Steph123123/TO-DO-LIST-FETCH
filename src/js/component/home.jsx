import React from "react";
import List from "./list.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
		<div className="container mt-5 todo">
			<div className="row">
				<h1 className="text-center mt-5">Steph´s to do list with fetch!</h1>
				<div className="col-12">
					<List />
				</div>
				<div className="img img-fluid">
					<img
						src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42676/t-rex-emoji-clipart-md.png"
						alt=""
					/>
					
				</div>
			</div>
		
		</div>
	);
};

export default Home;
