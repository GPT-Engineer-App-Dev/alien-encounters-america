import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-6">
      <div className="relative h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">Welcome to UFO Watch USA</h1>
          <p className="mt-2 text-lg">Your source for UFO sightings and reports in the USA</p>
          <Button className="mt-4" onClick={() => navigate("/reports")}>Report a Sighting</Button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p>We are dedicated to collecting and sharing information about UFO sightings across the USA. Join us in uncovering the mysteries of the skies.</p>
      </div>
    </div>
  );
};

export default Index;