export const loadImages = () => {

  const imageUrls = [
    "assets/images/109.JPG",
    "assets/images/145.JPG",
    "assets/images/282.JPG",
    "assets/images/DSC_0181.JPG",
    "assets/images/yakomoto.jpg"
  ];

  const images = [];

  imageUrls.forEach((imageUrl) => {
    let image = new Image();
    image.src = imageUrl;
    images.push(image);
  });

  return images;
};
