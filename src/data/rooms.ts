export type Room = {
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  guests: number;
  size: number;
  bed: string;
  images: string[];
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    description:
      "A comfortable retreat designed for effortless relaxation.",
    fullDescription:
      "Experience understated elegance in our Deluxe Room. Thoughtfully designed with warm interiors and a relaxing atmosphere, this room offers a comfortable retreat for couples and individual travelers.",
    price: 850000,
    guests: 2,
    size: 32,
    bed: "1 King Bed",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    ],
    amenities: [
      "Air Conditioning",
      "Complimentary Wi-Fi",
      "Flat-Screen TV",
      "Private Bathroom",
      "Coffee and Tea Maker",
      "Work Desk",
    ],
  },
  {
    slug: "premier-room",
    name: "Premier Room",
    description:
      "Elevated comfort with thoughtful details and refined style.",
    fullDescription:
      "The Premier Room combines generous space with refined interiors. Enjoy a restful environment, thoughtful amenities, and a sophisticated atmosphere designed for a memorable stay.",
    price: 1200000,
    guests: 2,
    size: 42,
    bed: "1 King Bed",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    ],
    amenities: [
      "Air Conditioning",
      "Complimentary Wi-Fi",
      "Flat-Screen TV",
      "Private Bathroom",
      "Coffee and Tea Maker",
      "Premium Toiletries",
      "Work Desk",
      "Seating Area",
    ],
  },
  {
    slug: "executive-suite",
    name: "Executive Suite",
    description:
      "A spacious sanctuary for a truly exceptional stay.",
    fullDescription:
      "Discover a more spacious retreat in our Executive Suite. With an elegant living area and carefully selected amenities, it offers a welcoming setting for guests who appreciate additional room and comfort.",
    price: 1800000,
    guests: 3,
    size: 58,
    bed: "1 King Bed",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
    ],
    amenities: [
      "Air Conditioning",
      "Complimentary Wi-Fi",
      "Flat-Screen TV",
      "Private Bathroom",
      "Coffee and Tea Maker",
      "Premium Toiletries",
      "Separate Living Area",
      "Work Desk",
      "Seating Area",
    ],
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}