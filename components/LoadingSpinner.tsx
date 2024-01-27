type Props = {
	color?: string;
	innerColor?: string;
};
const LoadingSpinner = ({ color, innerColor }: Props) => (
	<div className="w-full h-full grid place-items-center">
		<div className="relative h-9 w-9 sm:h-16 sm:w-16 ">
			<div
				className={`animate-loadspin rounded-full border-4 border-r-transparent border-b-transparent ${
					color || "border-success"
				} border-solid h-full w-full absolute `}
			/>

			<div
				className={` rounded-full border-4  ${
					innerColor || "border-success/30"
				} border-solid h-full w-full`}
			/>
		</div>
	</div>
);

export default LoadingSpinner;
