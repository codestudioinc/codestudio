import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
	{
		title: "JavaScript",
		iconType: JavascriptIcon,
	},
	{
		title: "HTML5",
		iconType: HTMLIcon,
	},
	{
		title: "CSS3",
		iconType: CssIcon,
	},
	{
		title: "React",
		iconType: ReactIcon,
	},
	{
		title: "Chrome",
		iconType: ChromeIcon,
	},
	{
		title: "Github",
		iconType: GithubIcon,
	},
];

export const AboutSection = () => {
	return (
		<div id="about" className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					eyebrow="About Us"
					title="A Glimpse Into Our World"
					description="Learn more about who I am, what I do, and what inspires me."
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="Reads"
								description="Explore the books shaping our perspectives."
							/>
							<div className="w-40 mx-auto mt-2 md:mt-0">
								<Image src={bookImage} alt="Book cover" />
							</div>
						</Card>
						<Card className="h-[320px] md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Our Toolbox"
								description="Explore the technologies and tools we use to craft exceptional digital experiences."
								className=""
							/>
							<ToolboxItems items={toolboxItems} className="mt-6" />
							<ToolboxItems
								items={toolboxItems}
								className="mt-3"
								itemsWrapperClassName="-translate-x-1/2"
							/>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
