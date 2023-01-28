import { wapForm1 } from "../forms/wap-form-1";
import { wapFooter1 } from "../footers/wap-footer-1";
import { wapHeader1 } from "../headers/wap-header-1";
import { wapHero1 } from "../heros/wap-hero-1";
import { wapGallery1 } from "../galleries/wap-gallery-1";
import { wapVideo1 } from "../videos/wap-video-1";
import { wapMap1 } from "../maps/wap-map-1";
import { wapAbout1 } from "../about/wap-about-1";


export const wapDemo1 = {
	// _id: '',
	_id: "5e28393890dd7201a06d4e41",
	name: "Mario Shop Food Site",
	imgUrl: "https://res.cloudinary.com/dimirmc9j/image/upload/v1674323403/template1_xdkvrq.png",
	// imgUrl: "https://res.cloudinary.com/dimirmc9j/image/upload/v1673817085/%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97_%D7%A2%D7%9E%D7%99%D7%93%D7%AA_%D7%99%D7%93%D7%99%D7%99%D7%9D_qf2ku1.jpg",
	isDemo: true,
	cmps: [
		wapHeader1,
		wapHero1,
		wapAbout1,
		// wapGallery1A,
		wapGallery1,
		wapForm1,
		wapMap1,
		wapVideo1,
		wapFooter1
	],
	isPublished: false
}





