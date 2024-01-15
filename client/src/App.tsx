import './App.css';
import { gql, useQuery } from '@apollo/client';

const query = gql`
	query GetTodosWithUser {
		getTodos {
			title
			completed
			user {
				name
			}
		}
	}
`;

function App() {
	const { data, loading } = useQuery(query);

	if (loading) return <p>Loading...</p>;

	return (
		<div className="App">
			{data.getTodos.map((todo: any) => (
				<div>
					<h2>{todo.title}</h2>
					<p>{todo.user?.name}</p>
				</div>
			))}
		</div>
	);
}

export default App;
