import { Image, Upload } from 'antd'

export function ImageCard({
	openDrawerRight,
	brightness,
	contrast,
	saturation,
	grayScale,
	sepia,
	hueRotate,
	blur,
	imageUrl,
	setImageUrl,
}) {
	const handleFileChange = ({ fileList }) => {
		const file = fileList.at(-1).originFileObj
		const url = URL.createObjectURL(file)
		setImageUrl(url)
	}
	return (
		<div
			className="relative max-w-4xl mx-auto border-[20px] my-5 border-[#F7F4F3]"
			style={{ height: 'calc(100vh - 15vh)', overflow: 'hidden' }}
		>
			<Image
				style={{
					filter: `${brightness.property}(${brightness.value}${brightness.unit}) 
					${contrast.property}(${contrast.value}${contrast.unit})
					${saturation.property}(${saturation.value}${saturation.unit})
					${grayScale.property}(${grayScale.value}${grayScale.unit})
					${sepia.property}(${sepia.value}${sepia.unit})
					${hueRotate.property}(${hueRotate.value}${hueRotate.unit})
					${blur.property}(${blur.value}${blur.unit}) `,
					height: '100vh',
				}}
				src={
					imageUrl
						? imageUrl
						: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
				}
				alt="card-image"
				className="image"
			/>
			<Upload
				multiple={false}
				accept={false}
				beforeUpload={() => false}
				onChange={handleFileChange}
				showUploadList={false}
			>
				<div className="absolute top-10 left-10 bg-white p-2 px-4 rounded-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
						/>
					</svg>
				</div>
			</Upload>
			<div
				onClick={() => openDrawerRight()}
				className="absolute top-10 right-10 bg-white p-2 rounded-lg cursor-pointer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 text-[#2F3E45]"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
					/>
				</svg>
			</div>
		</div>
	)
}
