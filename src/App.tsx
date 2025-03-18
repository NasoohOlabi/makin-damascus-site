import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./App.css";
import { AuthProvider } from "./lib/context/auth-context";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
}

export default App;
