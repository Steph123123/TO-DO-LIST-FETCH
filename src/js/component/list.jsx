import React, { useState,useEffect } from "react";

const List = () => {
	// Variables para almacenar informacion
	const [imputText, setImputText] = useState("");
	const [TodoList, setTodoList] = useState([]);
	useEffect(() => {
		// Update the document title using the browser API
		getitem()
	  },[]); 
	// funcion para añadir texto
	const addText = (text) => {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/steph123123', {
      method: "PUT",
	  body: JSON.stringify([...TodoList, {"label":text,"done":false}]),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        setTodoList([...TodoList, {"label":text, "done":false}]); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
		console.log(TodoList)
	};
	// funcion para condicionar el input a lo que queremos
	const handleKey = (event) => {
		if (event.key === "Enter" && imputText !== " " && imputText !== "") {
			addText(imputText);
			setImputText("");
		}
	};
	// Funcion para borrar elementos
	const DeleteItems = (indexItem) => {
		setTodoList((prevState) =>
			prevState.filter((item, index) => index !== indexItem)
		);
		fetch('https://assets.breatheco.de/apis/fake/todos/user/steph123123', {
      method: "PUT",
	  body: JSON.stringify(TodoList),
      headers: {
        "Content-Type": "application/json"
      }
    })
	.then(resp => {
        
        return resp.json(); 
    })
    .then(data => {
        
       
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
	

	};
	const getitem = () => {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/steph123123', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        setTodoList(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
	}
	return (
		<div>
			<div className="input mb-2 fs-5">
				<input
					type="text"
					onKeyPressCapture={(e) => handleKey(e)}
					onChange={(event) => {
						setImputText(event.target.value);
						console.log(event.target.value);
					}}
					name=""
					id=""
					value={imputText}
				/>
			</div>
			<div>
				<ul className="list-group ">
					{TodoList.map((value, index) => (
						<li
							key={index}
							className=" list-group-item mb-1 p-1 border border-dark d-flex justify-content-between">
							{value.label}
							<button
								className="btn btn-outline-danger btn-sm DelItem"
								onClick={() => DeleteItems(index)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-trash"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="#009988"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round">
									<path
										stroke="none"
										d="M0 0h24v24H0z"
										fill="none"
									/>
									<line x1="4" y1="7" x2="20" y2="7" />
									<line x1="10" y1="11" x2="10" y2="17" />
									<line x1="14" y1="11" x2="14" y2="17" />
									<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
									<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
								</svg>
							</button>
						</li>
					))}
				</ul>
				<div>
					<span className="badge bg-light text-dark me-2">
						Total Tasks: {TodoList.length}
					</span>
					
					
				</div>
			</div>
		</div>
	);
};
export default List;