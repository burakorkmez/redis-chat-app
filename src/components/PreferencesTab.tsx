"use client";
import { MoonIcon, SunIcon, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { usePreferences } from "@/store/usePreferences";
import { useSound } from "use-sound";

const PreferencesTab = () => {
	const { setTheme } = useTheme();

	const { soundEnabled, setSoundEnabled } = usePreferences();
	const [playMouseClick] = useSound("/sounds/mouse-click.mp3");
	const [playSoundOn] = useSound("/sounds/sound-on.mp3", { volume: 0.3 });
	const [playSoundOff] = useSound("/sounds/sound-off.mp3", { volume: 0.3 });

	return (
		<div className='flex flex-wrap gap-2 px-1 md:px-2'>
			<Button
				variant={"outline"}
				size={"icon"}
				onClick={() => {
					setTheme("light");
					soundEnabled && playMouseClick();
				}}
			>
				<SunIcon className='size-[1.2rem] text-muted-foreground' />
			</Button>
			<Button
				variant={"outline"}
				size={"icon"}
				onClick={() => {
					setTheme("dark");
					soundEnabled && playMouseClick();
				}}
			>
				<MoonIcon className='size-[1.2rem] text-muted-foreground' />
			</Button>
			<Button
				variant={"outline"}
				size={"icon"}
				onClick={() => {
					setSoundEnabled(!soundEnabled);
					soundEnabled ? playSoundOff() : playSoundOn();
				}}
			>
				{soundEnabled ? (
					<Volume2 className='size-[1.2rem] text-muted-foreground' />
				) : (
					<VolumeX className='size-[1.2rem] text-muted-foreground' />
				)}
			</Button>
		</div>
	);
};
export default PreferencesTab;
