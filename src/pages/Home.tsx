import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/types";

import { getAddress } from "@/services/apiCalls";
import Feed from "@/components/Feed";
import LoadingSipnner from "@/components/LoadingSipnner";
import ErrorMessage from "@/components/ErrorMessage";
import { locationActions } from "@/redux/locationSlice";
import { useAppDispatch } from "@/types";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //get location data
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["address"],
    queryFn: getAddress,
  });

  const auth = useAppSelector((state) => state.auth);

  if (!auth.isAuthenticated) {
    navigate("/login");
  }

  let content;

  if (isLoading) {
    content = <LoadingSipnner />;
  }
  if (isError) {
    content = <ErrorMessage message={error.message} />;
  }

  const newData = data as {
    address: string | undefined;
    latitude: number | undefined;
    longitude: number | undefined;
    watchID: number | undefined;
    country: string | undefined;
  };

  if (data) {

    dispatch(locationActions.setLocation(newData));
  }

  return (
    <div>
      {content ? (
        content
      ) : (
        <Feed
          latitude={newData?.latitude}
          longitude={newData?.longitude}
          country={newData?.country}
        />
      )}
    </div>
  );
};

export default Home;
