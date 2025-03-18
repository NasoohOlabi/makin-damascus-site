import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	component: Login
});

function Login() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6">
					<div className="rounded-md shadow-sm space-y-4">
						<div>
							<label htmlFor="email" className="sr-only">
								Email address
							</label>
							<Input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								placeholder="Email address"
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<Input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Password"
							/>
						</div>
					</div>

					<div>
						<Button type="submit" className="w-full">
							Sign in
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
