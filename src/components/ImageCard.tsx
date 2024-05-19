import { FaHeart } from "react-icons/fa"
import { FaCommentAlt } from "react-icons/fa";


const ImageCard = () => {
  return (
    <div className="py-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/86/City_of_London%2C_seen_from_Tower_Bridge.jpg"
        alt="London"
        className="rounded-sm"
      />
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-2">
          <FaHeart size={16} />
          <FaCommentAlt size={16} />
        </div>
        <div>
          <p className="font-medium text-sm">
            Total Guesses: [Overall Guess Counts]
          </p>
        </div>
      </div>
      <p className="font-medium text-sm">Description / Fun Fact</p>
    </div>
  );
};

export default ImageCard;
