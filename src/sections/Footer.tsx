import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
	return (
		<footer className="relative overflow-hidden">
			<div
				className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30"
				style={{
					maskImage:
						"radial-gradient(50% 50% at bottom center, black, transparent)",
					WebkitMaskImage:
						"radial-gradient(50% 50% at bottom center, black, transparent)",
				}}
			></div>

			<div className="container">
				<div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
					<div className="text-white/40">&copy; 2025. All rights reserved.</div>
					<nav className="flex flex-col md:flex-row items-center gap-8">
							<p
								className="inline-flex items-center gap-1.5 z-50"
							>
								WhatsApp: {" "}
								<span className="font-semibold">+919394070912</span>
								<ArrowUpRightIcon className="size-4" />
							</p>

							<p
								className="inline-flex items-center gap-1.5 z-50"
							>
								Email: {" "}
								<span className="font-semibold">codestudio.service@gmail.com</span>
								<ArrowUpRightIcon className="size-4" />
							</p>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
