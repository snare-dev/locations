import { FaHeart } from "react-icons/fa"
import { FaCommentAlt } from "react-icons/fa";

type postProps = {
  image: string;
  description: string;
  name: string;
  totalGuesses: number;
}


const ImageCard = ({image, description,totalGuesses, name}: postProps) => {
  return (
    <div className="py-4">
      <img src={image} alt={name} className="rounded-sm" />
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-2">
          <FaHeart size={16} />
          <FaCommentAlt size={16} />
        </div>
        <div>
          <p className="font-medium text-sm">Total Guesses: {totalGuesses}</p>
        </div>
      </div>
      <p className="font-medium text-sm">
        <span className="font-bold text-sm">Fun Fact:</span> {description}
      </p>
    </div>
  );
};

export default ImageCard;
