
import { wapContainer2A } from './containers/wap-container-2a'
import { wapContainer2B } from './containers/wap-container-2b'
import { wapContainer2C } from './containers/wap-container-2c'
import { wapFooter2 } from './footers/wap-footer-2'
import { wapHeader2 } from './headers/wap-header-2'
import { wapHero2 } from './heros/wap-hero-2'
import { wapPreview2 } from './previews/wap-preview-2'


export const wapTemplate2 = {
	// _id: '',
	_id: "5e28393890dd7201a06d4e42",
	name: "Adventure Tour Company Traveling Agency",
	imgUrl: "https://res.cloudinary.com/dimirmc9j/image/upload/v1674039873/demi-template_e1ka0d.png",
	// imgUrl: "https://res.cloudinary.com/dimirmc9j/image/upload/v1673817085/%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97_%D7%A2%D7%9E%D7%99%D7%93%D7%AA_%D7%99%D7%93%D7%99%D7%99%D7%9D_qf2ku1.jpg",

	cmps: [
		wapHeader2,
		wapHero2,
		wapPreview2,
		wapContainer2A,
		wapContainer2B,
		wapContainer2C,
		wapFooter2
	],
	isPublic: true
}





