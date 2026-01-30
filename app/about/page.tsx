import TiltedCard from "@/components/utilities/ProfileCard";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <TiltedCard
        imageSrc="/asset/profile/mehh2.svg"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Abdul Ashik"
        containerHeight="100px"
        containerWidth="100px"
        imageHeight="100px"
        imageWidth="100px"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip
        displayOverlayContent
        overlayContent={<p className="tilted-card-demo-text">Abdul </p>}
      />
    </div>
  );
};

export default page;
