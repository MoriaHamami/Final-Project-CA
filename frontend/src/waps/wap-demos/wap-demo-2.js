import { wapGallery2A } from "../galleries/wap-gallery-2a";
import { wapGallery2B } from "../galleries/wap-gallery-2b";
import { wapFooter2 } from "../footers/wap-footer-2";
import { wapHeader2 } from "../headers/wap-header-2";
import { wapHero2 } from "../heros/wap-hero-2";
import { wapVideo2 } from "../videos/wap-video-2";
// import { wapGallery2C } from "../galleries/wap-gallery-2b";
import { wapForm2 } from "../forms/wap-form-2";
import { wapAbout2 } from "../about/wap-about-2";

export const wapDemo2 = {
	_id: "5e28393890dd7201a06d4e42",
	name: "Adventure Tour Company Traveling Agency",
	imgUrl: "https://res.cloudinary.com/dimirmc9j/image/upload/v1674323391/template2_njflc4.png",
	isDemo: true,

	cmps: [
		wapHeader2,
		wapHero2,
		wapAbout2,
		// wapGallery,
		wapGallery2A,
		wapGallery2B,
		wapVideo2,
		wapForm2,
		wapFooter2
	],
	isPublished: false,
}





