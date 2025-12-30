import type { PhotoItem } from "../components/PhotoGrid";

export const places: PhotoItem[] = [
  {
    id: 1,
    title: "Navy Pier",
    image: "/assets/images/places/navyPier.avif",
    note: "Cold wind and pretty lights by the lake",
    location: "Lake Michigan ShoreLine, Chicago",
    locationLink: "https://maps.google.com/?q=Navy+Pier+Chicago"
  }, 
  {
    id: 2,
    title: "Chicago Christmas Tree",
    image: "/assets/images/places/christmasTree.avif",
    note: "Took a stroll around Chicago and saw the Christmas tree lighting",
    location: "Millennium Park, Chicago",
    locationLink: null
  }, 
  {
    id: 3,
    title: "ZooLight",
    image: "/assets/images/places/zooLight.avif",
    note: "Lights Lights and more lights that were absolutly breathtaking",
    location: "Lincolin Zoo, Chicago",
    locationLink: null
  },
  {
    id: 4,
    title: "Christkindl",
    image: "/assets/images/places/christkindl.avif",
    note: "The coolest christmas market and the handmade ornament I got this year was a painted glass bell for our tree",
    location: "Christkindl Market, Chicago",
    locationLink: null
  }
];