import { MapPin } from "lucide-react";

const areas = [
  // Melbourne CBD Area
  "Melbourne CBD",
  "Carlton",
  "Carlton North",
  "Docklands",
  "East Melbourne",
  "Flemington",
  "Kensington",
  "Melbourne",
  "North Melbourne",
  "Parkville",
  "Port Melbourne",
  "Southbank",
  "South Wharf",
  "South Yarra",
  "West Melbourne",
  
  // St Kilda Area
  "Albert Park",
  "Balaclava",
  "Elwood",
  "Middle Park",
  "Ripponlea",
  "St Kilda",
  "St Kilda East",
  "St Kilda West",
  "South Melbourne",
  
  // Inner East
  "Abbotsford",
  "Alphington",
  "Burnley",
  "Clifton Hill",
  "Collingwood",
  "Cremorne",
  "Fairfield",
  "Fitzroy",
  "Fitzroy North",
  "Princes Hill",
  "Richmond",
  
  // North
  "Ivanhoe",
  "Ivanhoe East",
  "Coburg",
  "Coburg North",
  "Northcote",
  "Reservoir",
  "Brunswick",
  "Brunswick East",
  "Brunswick West",
  "Fawkner",
  "Glenroy",
  "Pascoe Vale",
  "Pascoe Vale South",
  "Mill Park",
  
  // East
  "Ashburton",
  "Balwyn",
  "Balwyn North",
  "Camberwell",
  "Camberwell North",
  "Camberwell South",
  "Camberwell West",
  "Canterbury",
  "Deepdene",
  "Glen Iris",
  "Hawthorn",
  "Hawthorn East",
  "Kew",
  "Kew East",
  "Mont Albert",
  "Surrey Hills",
  
  // Knox Area
  "Knoxfield",
  "Rowville",
  "Scoresby",
  "Wantirna",
  
  // Doncaster Area
  "Bullen",
  "Doncaster",
  "Doncaster Hill",
  "Doncaster East",
  "Donvale",
  "Park Orchards",
  "Templestowe",
  "Warrandyte",
  "Vermont",
  
  // Box Hill Area
  "Blackburn",
  "Blackburn North",
  "Blackburn South",
  "Box Hill",
  "Box Hill North",
  "Box Hill South",
  "Burwood",
  "Burwood East",
  "Forest Hill",
  "Mitcham",
  "Nunawading",
  
  // Bayside
  "Beaumaris",
  "Black Rock",
  "Brighton",
  "Brighton East",
  "Cheltenham",
  "Hampton",
  "Hampton East",
  "Highett",
  "Sandringham",
  
  // Dandenong Area
  "Doveton",
  "Endeavour Hills",
  "Narre Warren",
  "Narre Warren North",
  "Narre Warren South",
  "Dandenong",
  "Dandenong North",
  "Dandenong South",
  "Keysborough",
  "Noble Park",
  "Noble Park North",
  "Springvale",
  "Springvale South",
  
  // Caulfield Area
  "Bentleigh",
  "Bentleigh East",
  "Carnegie",
  "Caulfield",
  "Caulfield East",
  "Caulfield North",
  "Caulfield South",
  "Elsternwick",
  "Gardenvale",
  "Glen Huntly",
  "McKinnon",
  "Murrumbeena",
  "Ormond",
  
  // Mordialloc Area
  "Aspendale",
  "Aspendale Gardens",
  "Bonbeach",
  "Braeside",
  "Chelsea",
  "Chelsea Heights",
  "Clarinda",
  "Clayton",
  "Clayton south",
  "Dingley Village",
  "Edithvale",
  "Mentone",
  "Moorabbin",
  "Moorabbin Airport",
  "Mordialloc",
  "Parkdale",
  
  // Monash Area
  "Ashwood",
  "Chadstone",
  "Glen Waverley",
  "Hughesdale",
  "Huntingdale",
  "Monash University",
  "Mount Waverley",
  "Mulgrave",
  "Notting Hill",
  "Oakleigh",
  "Oakleigh South",
  "Oakleigh East",
  "Wheelers Hill",
  
  // Stonnington Area
  "Armadale",
  "Kooyong",
  "Malvern",
  "Malvern East",
  "Prahran",
  "Toorak",
  "Windsor",
  
  // West
  "Newport",
  "South Kingsville",
  "Williamstown",
  "Williamstown North",
  "Footscray",
  "Kingsville",
  "Maribyrnong",
  "West Footscray",
  "Yarraville",
  "Ascot Vale",
  "Avondale Heights",
];

const AreasServed = () => {
  return (
    <section 
      className="relative py-16 md:py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/locksmith-8559026_1280.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Areas we serve
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            We serve all areas across Melbourne
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-2.5 hover:bg-white/20 transition-colors"
            >
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-accent shrink-0" />
              <span className="text-sm md:text-base text-white font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasServed;

