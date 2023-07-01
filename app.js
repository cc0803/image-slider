const arrows = Array.from(document.querySelectorAll(".arrow"));
const imageContainer = document.querySelector(".img-container");
const imageCount = Array.from(
	document.querySelectorAll(".img-container img")
).length;
let cssTranslate = 0;

arrows.forEach((arrow) => {
	arrow.addEventListener("click", () => {
		if (arrow.classList.contains("left") && cssTranslate !== 0) {
			// Translate image container to display nex image
			imageContainer.style.transform = `translateX(${
				cssTranslate + 100 / imageCount
			}%)`;
			// Increment cssTranslate property
			cssTranslate += 100 / imageCount;

			// Checking for not equal -80 because -100 would make whole container invisible
		} else if (arrow.classList.contains("right") && cssTranslate !== -80) {
			console.log(cssTranslate);
			imageContainer.style.transform = `translateX(${
				// divide by imageCount to get percentile of image size
				cssTranslate - 100 / imageCount
			}%)`;
			// Increment the cssTranslate count
			cssTranslate += -100 / imageCount;
		}
	});
});
