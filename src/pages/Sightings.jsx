import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchSightings = async () => {
  const response = await fetch("/api/sightings");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Sightings = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["sightings"],
    queryFn: fetchSightings,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4">
      {data.map((sighting) => (
        <Card key={sighting.id}>
          <CardHeader>
            <CardTitle>{sighting.date} - {sighting.location}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{sighting.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Sightings;