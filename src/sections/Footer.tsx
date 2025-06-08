import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
	{
		title: "WhatsApp",
		href: "#",
	},
	{
		title: "Twitter",
		href: "https://x.com/CodeStudioinc",
	},
	{
		title: "Instagram",
		href: "https://www.instagram.com/codestudio.inc/",
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/codestudio-inc-25453b36a/",
	},
];

export const Footer = () => {
	return (
		<footer className="relative -z-10 overflow-hidden">
			<div
				className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30"
				style={{
					maskImage:
						"radial-gradient(50% 50% at bottom center, black, transparent -z-10)",
					WebkitMaskImage:
						"radial-gradient(50% 50% at bottom center, black, transparent -z-10)",
				}}
			></div>

			<div className="container">
				<div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
					<div className="text-white/40">&copy; 2025. All rights reserved.</div>
					<nav className="flex flex-col md:flex-row items-center gap-8">
						{footerLinks.map((link) => (
							<a
								href="#"
								key={link.title}
								className="inline-flex items-center gap-1.5"
							>
								<span className="font-semibold">{link.title}</span>
								<ArrowUpRightIcon className="size-4" />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
