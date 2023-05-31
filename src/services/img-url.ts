/**
 * This api supports cropping images on the fly through the url.
 * So we write a service that does that. This way we optimize page load by already
 * loading images as small as we need them.
 */

const getCroppedImageUrl = (url: string) => {
    const target = "media/";
    const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;