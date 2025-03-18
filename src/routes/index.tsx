import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home
});

function Home() {
	return (
		<div>
			<Hero />
			<Footer />
			<ScrollToTop />
		</div>
	);
}
