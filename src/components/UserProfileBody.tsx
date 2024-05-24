import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    alt: "Image 2",
    userId: "ujbfuhd789dslfnf",
  },
  {
    id: 3,
    src: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    alt: "Image 3",
    userId: "ujbfowjfoelfnf",
  },
  {
    id: 4,
    src: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    alt: "Image 4",
    userId: "ujb8740flfnf",
  },
  {
    id: 5,
    src: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    alt: "Image 5",
    userId: "ujbfhjdhidlfnf",
  },
  {
    id: 6,
    src: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    alt: "Image 6",
    userId: "ujbflfhdhjbjdnf",
  },
];

//not images but locations

const UserProfileBody = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="divider mb-0"></div>
      <div className="flex">
        <h3 className="font-medium">Locations</h3>
      </div>
      <div className="divider mt-0 "></div>
      <div>
        <div className="grid grid-cols-3 gap-4">
          {/* Images */}
          {images.map((image) => (
            <Link to={`/locations/:${image.id}`}>
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="min-w-24 h-auto object-contain border border-slate-400"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfileBody