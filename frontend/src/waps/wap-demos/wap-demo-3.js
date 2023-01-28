import { wapGallery3 } from "../galleries/wap-gallery-3.js";
import { wapHeader3 } from "../headers/wap-header-3";
import { wapHero3A } from "../heros/wap-hero-3a";
import { wapHero3B } from "../heros/wap-hero-3b.js";
import { wapForm3 } from "../forms/wap-form-3.js";
import { wapAbout3A } from "../about/wap-about-3a.js";
import { wapAbout3B } from "../about/wap-about-3b.js";
import { wapFooter3 } from "../footers/wap-footer-3.js";

// export default wapDemo3

export const wapDemo3 = {
	_id: "5e28393890asd01a06d4e42",
	name: "Baby consultant website",
	imgUrl: "https://res.cloudinary.com/dimirmc9j/image/upload/v1674576633/demo3_c0bfx4.png",
	isDemo: true,

	cmps: [
		wapHeader3,
		wapHero3A,
		wapAbout3A,
		wapHero3B,
		wapGallery3,
		wapAbout3B,
		wapForm3,
		wapFooter3
	],
	isPublished: false,
}
