import { Skeleton } from "../ui/skeleton";

const MessageSkeleton = () => {
	return (
		<div className='p-4'>
			<div className='flex gap-3 items-center'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex gap-2'>
					<Skeleton className='h-12 w-12 rounded-full' />
					<div className='flex flex-col gap-1'>
						<Skeleton className='w-40 h-4' />
						<Skeleton className='w-40 h-4' />
					</div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end '>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex gap-2'>
					<div className='flex flex-col gap-1'>
						<Skeleton className='w-40 h-4' />
						<Skeleton className='w-40 h-4' />
					</div>
					<Skeleton className='h-12 w-12 rounded-full' />
				</div>
			</div>
		</div>
	);
};
export default MessageSkeleton;
