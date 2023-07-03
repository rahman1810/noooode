import { skills } from "../skills";

export default function Skills() {
	return (
		<section id="skills" className="mx-auto mb-16 px-4">
			<h1 className="uppercase text-start text-3xl py-5 font-WorkSansSemiBold text-gray-500">
				Technologies <span className="text-white">Skills</span>
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{skills.map(({ icon, name, tech }, index) => (
					<div
						key={index}
						className={`skill md:mr-5 wow fadeIn`}
						style={{
							animationDelay: `${index * 100 + 100}ms`,
						}}
					>
						<div className="flex items-center">
							<div className="w-5 h-5 mr-5">
								<img width="20" height="20" src={icon} alt={name} />
							</div>
							<div>
								<p className="text-xs font-semibold leading-none">
									{name}
								</p>
								<p
									className="mt-2 leading-none"
									style={{ fontSize: "0.65rem" }}
								>
									{tech}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}