import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { useAuth } from "@/lib/context/auth-context";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LogoIcon } from "./Icons";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "./ui/dropdown-menu";

interface RouteProps {
	href: string;
	label: string;
}

const routeList: RouteProps[] = [
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#testimonials",
		label: "Testimonials"
	},
	{
		href: "#pricing",
		label: "Pricing"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { user, signInWithGoogle, logout } = useAuth();

	const handleGoogleSignIn = async () => {
		await signInWithGoogle();
	};

	const handleLogout = async () => {
		await logout();
	};

	const UserMenu = () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="cursor-pointer">
					<AvatarImage src={user?.photoURL || undefined} />
					<AvatarFallback>{user?.email?.[0].toUpperCase()}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);

	const AuthButton = () => (
		<Button
			variant="outline"
			onClick={handleGoogleSignIn}
			className="flex items-center gap-2"
		>
			<svg viewBox="0 0 24 24" className="h-5 w-5">
				<path
					d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
					fill="#4285F4"
				/>
				<path
					d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
					fill="#34A853"
				/>
				<path
					d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
					fill="#FBBC05"
				/>
				<path
					d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
					fill="#EA4335"
				/>
			</svg>
			{user ? "Switch Account" : "Continue with Google"}
		</Button>
	);

	return (
		<header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
			<NavigationMenu className="mx-auto">
				<NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
					<NavigationMenuItem className="font-bold flex">
						<a
							rel="noreferrer noopener"
							href="/"
							className="ml-2 font-bold text-xl flex"
						>
							<LogoIcon />
							ShadcnUI/React
						</a>
					</NavigationMenuItem>

					{/* mobile */}
					<span className="flex md:hidden items-center gap-2">
						{user ? <UserMenu /> : <AuthButton />}
						<ModeToggle />

						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger className="px-2">
								<Menu
									className="flex md:hidden h-5 w-5"
									onClick={() => setIsOpen(true)}
								>
									<span className="sr-only">Menu Icon</span>
								</Menu>
							</SheetTrigger>

							<SheetContent side={"left"}>
								<SheetHeader>
									<SheetTitle className="font-bold text-xl">
										Shadcn/React
									</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col justify-center items-center gap-2 mt-4">
									{routeList.map(({ href, label }: RouteProps) => (
										<a
											rel="noreferrer noopener"
											key={label}
											href={href}
											onClick={() => setIsOpen(false)}
											className={buttonVariants({
												variant: "ghost"
											})}
										>
											{label}
										</a>
									))}
									<a
										rel="noreferrer noopener"
										href="https://github.com/leoMirandaa/shadcn-landing-page.git"
										target="_blank"
										className={`w-[110px] border ${buttonVariants({
											variant: "secondary"
										})}`}
									>
										<GitHubLogoIcon className="mr-2 w-5 h-5" />
										Github
									</a>
								</nav>
							</SheetContent>
						</Sheet>
					</span>

					{/* desktop */}
					<nav className="hidden md:flex gap-2">
						{routeList.map((route: RouteProps, i) => (
							<a
								rel="noreferrer noopener"
								href={route.href}
								key={i}
								className={`text-[17px] ${buttonVariants({
									variant: "ghost"
								})}`}
							>
								{route.label}
							</a>
						))}
					</nav>

					<div className="hidden md:flex gap-2 items-center">
						{user ? <UserMenu /> : <AuthButton />}
						<a
							rel="noreferrer noopener"
							href="https://github.com/leoMirandaa/shadcn-landing-page.git"
							target="_blank"
							className={`border ${buttonVariants({ variant: "secondary" })}`}
						>
							<GitHubLogoIcon className="mr-2 w-5 h-5" />
							Github
						</a>
						<ModeToggle />
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};
