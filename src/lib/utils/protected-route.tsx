import { Navigate, Outlet } from "@tanstack/react-router";
import { useAuth } from "../context/auth-context";

export function ProtectedRoute() {
	const { user, loading } = useAuth();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
}
