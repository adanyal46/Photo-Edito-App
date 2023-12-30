import { Button, Drawer, Typography } from '@material-tailwind/react'
import { Slider } from 'antd'
import React from 'react'

function ImageFilterDrawer({
	openRight,
	closeDrawerRight,
	brightness,
	setBrightness,
	contrast,
	setContrast,
	saturation,
	setSaturation,
	grayScale,
	setGrayScale,
	sepia,
	setSepia,
	hueRotate,
	setHueRotate,
	blur,
	setBlur,
}) {
	return (
		<Drawer
			placement="right"
			open={openRight}
			onClose={closeDrawerRight}
			className="p-4"
		>
			<div className="mb-4">
				<Typography variant="h5">Image Filter Changes</Typography>
			</div>
			<hr className="mb-3 border-[1.5px]" />
			<Typography className="mb-2" variant="h6">
				Brightness
			</Typography>
			<div className="mb-[40px]">
				<Slider
					marks={{
						0: brightness.range.min,
						200: brightness.range.max,
					}}
					value={brightness.value}
					onChange={value =>
						setBrightness({ ...brightness, value: `${value}` })
					}
					min={brightness.range.min}
					max={brightness.range.max}
				/>
			</div>
			<Typography className="mb-2" variant="h6">
				Contrast
			</Typography>
			<div className="mb-[40px]">
				<Slider
					marks={{
						0: contrast.range.min,
						200: contrast.range.max,
					}}
					value={contrast.value}
					onChange={value => setContrast({ ...contrast, value: `${value}` })}
					min={contrast.range.min}
					max={contrast.range.max}
				/>
			</div>
			<Typography className="mb-2" variant="h6">
				Saturation
			</Typography>
			<div className="mb-[40px]">
				<Slider
					marks={{
						0: saturation.range.min,
						200: saturation.range.max,
					}}
					value={saturation.value}
					onChange={value =>
						setSaturation({ ...saturation, value: `${value}` })
					}
					min={saturation.range.min}
					max={saturation.range.max}
				/>
			</div>
			<Typography className="mb-2" variant="h6">
				GrayScale
			</Typography>
			<div className="mb-[40px]">
				<Slider
					marks={{
						0: grayScale.range.min,
						100: grayScale.range.max,
					}}
					value={grayScale.value}
					onChange={value => setGrayScale({ ...grayScale, value: `${value}` })}
					min={grayScale.range.min}
					max={grayScale.range.max}
				/>
			</div>
			<Typography className="mb-2" variant="h6">
				Sepia
			</Typography>
			<div className="mb-[40px]">
				<Slider
					marks={{
						0: sepia.range.min,
						100: sepia.range.max,
					}}
					value={sepia.value}
					onChange={value => setSepia({ ...sepia, value: `${value}` })}
					min={sepia.range.min}
					max={sepia.range.max}
				/>
			</div>
			<Typography className="mb-2" variant="h6">
				Hue Rotate
			</Typography>
			<div className="mb-[40px]">
				<Slider
					marks={{
						0: hueRotate.range.min,
						360: hueRotate.range.max,
					}}
					value={hueRotate.value}
					onChange={value => setHueRotate({ ...hueRotate, value: `${value}` })}
					min={hueRotate.range.min}
					max={hueRotate.range.max}
				/>
			</div>
			<Typography className="mb-2" variant="h6">
				Blur
			</Typography>
			<div className="mb-[40px]">
				<Slider
					marks={{
						0: blur.range.min,
						20: blur.range.max,
					}}
					value={blur.value}
					onChange={value => setBlur({ ...blur, value: `${value}` })}
					min={blur.range.min}
					max={blur.range.max}
				/>
			</div>
			<div className="text-right">
				<Button onClick={() => closeDrawerRight()}>Apply</Button>
			</div>
		</Drawer>
	)
}

export default ImageFilterDrawer
