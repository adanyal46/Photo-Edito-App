import { Navbar, Typography, Button, Input } from '@material-tailwind/react'

export function AppNavbar({ imageUrl, setImageUrl }) {
	return (
		<Navbar
			fullWidth
			variant="gradient"
			color="blue-gray"
			className="from-blue-gray-900 to-blue-gray-800 px-4 py-3 "
		>
			<div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
				<Typography
					as="a"
					href="/"
					variant="h5"
					className="mr-4 ml-2 cursor-pointer py-1.5"
				>
					Photo Editor
				</Typography>

				<div className="relative flex w-full gap-2 md:w-max">
					<Input
						// value={imageUrl}
						onChange={e => setImageUrl(e.target.value)}
						type="search"
						color="white"
						label="Type here & search url..."
						className="pr-20"
						containerProps={{
							className: 'min-w-[288px]',
						}}
					/>
					<Button
						size="sm"
						color="white"
						className="!absolute right-1 top-1 rounded"
					>
						Search
					</Button>
				</div>
			</div>
		</Navbar>
	)
}
