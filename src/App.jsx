import { useState } from 'react'

import { AppNavbar } from './components/AppNavbar'
import { ImageCard } from './components/ImageCard'
import ImageFilterDrawer from './components/ImageFilterDrawer'

function App() {
	const [openRight, setOpenRight] = useState(false)
	const [imageUrl, setImageUrl] = useState('')
	const [brightness, setBrightness] = useState({
		name: 'Brightness',
		property: 'brightness',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	})
	const [contrast, setContrast] = useState({
		name: 'Contrast',
		property: 'contrast',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	})
	const [saturation, setSaturation] = useState({
		name: 'Saturation',
		property: 'saturate',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	})
	const [grayScale, setGrayScale] = useState({
		name: 'GrayScale',
		property: 'grayscale',
		value: 0,
		range: {
			min: 0,
			max: 100,
		},
		unit: '%',
	})
	const [sepia, setSepia] = useState({
		name: 'Sepia',
		property: 'sepia',
		value: 0,
		range: {
			min: 0,
			max: 100,
		},
		unit: '%',
	})
	const [hueRotate, setHueRotate] = useState({
		name: 'Hue Rotate',
		property: 'hue-rotate',
		value: 0,
		range: {
			min: 0,
			max: 360,
		},
		unit: 'deg',
	})
	const [blur, setBlur] = useState({
		name: 'Blur',
		property: 'blur',
		value: 0,
		range: {
			min: 0,
			max: 20,
		},
		unit: 'px',
	})
	const openDrawerRight = () => setOpenRight(true)
	const closeDrawerRight = () => setOpenRight(false)

	return (
		<>
			<AppNavbar imageUrl={imageUrl} setImageUrl={setImageUrl} />
			<ImageCard
				setImageUrl={setImageUrl}
				imageUrl={imageUrl}
				brightness={brightness}
				contrast={contrast}
				saturation={saturation}
				grayScale={grayScale}
				sepia={sepia}
				hueRotate={hueRotate}
				blur={blur}
				openDrawerRight={openDrawerRight}
			/>
			<ImageFilterDrawer
				openRight={openRight}
				closeDrawerRight={closeDrawerRight}
				brightness={brightness}
				setBrightness={setBrightness}
				contrast={contrast}
				setContrast={setContrast}
				saturation={saturation}
				setSaturation={setSaturation}
				grayScale={grayScale}
				setGrayScale={setGrayScale}
				sepia={sepia}
				setSepia={setSepia}
				hueRotate={hueRotate}
				setHueRotate={setHueRotate}
				blur={blur}
				setBlur={setBlur}
			/>
		</>
	)
}

export default App
