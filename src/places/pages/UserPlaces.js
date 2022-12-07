import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Kailash Temple",
    description: "One the finest pice of art in Mumbai,India",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png",
    address: "Ellora, Maharashtra 431102",
    coordinates: "20°01′26″N 75°10′45″E",
    location: {
      lat: 20.0237503,
      lng: 75.1791233,
    },
    creatoerId: "u1",
  },
  {
    id: "p2",
    title: "Kailash Temple",
    description: "One the finest pice of art in Mumbai,India",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png",
    address: "Ellora, Maharashtra 431102",
    coordinates: "20°01′26″N 75°10′45″E",
    location: {
      lat: 20.0237503,
      lng: 75.1791233,
    },
    creatoerId: "u2",
  },
];
const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};
export default UserPlaces;
