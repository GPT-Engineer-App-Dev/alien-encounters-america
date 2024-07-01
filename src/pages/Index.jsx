import { Button } from "@/components/ui/button";
import { newImage } from "@/utils/newImage";

const Index = () => {
  return (
    <div className="text-center space-y-6">
      <div className="relative w-full h-64">
        <newImage
          src="/images/hero-background.jpg"
          alt="Night sky with UFOs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">Welcome to UFO Watch USA</h1>
          <p className="mt-4 text-lg">Your source for UFO sightings and reports in the USA</p>
          <Button variant="primary" className="mt-6">Report a Sighting</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;