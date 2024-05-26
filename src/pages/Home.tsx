import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/types";
import "react-toastify/dist/ReactToastify.css";

import { getAddressData } from "@/services/apiCalls";
import Feed from "@/components/Feed";
import { locationActions } from "@/redux/locationSlice";
import { useAppDispatch } from "@/types";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [latLng, setLatLng] = useState<object | undefined>();
  const [isCoords, setIsCoords] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(user);

  // if (user === undefined) {
  //   navigate("/login");
  // }

  let longitude: number;
  let latitude: number;

  const watchID = navigator.geolocation.watchPosition((position) => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    if (!longitude || !latitude) {
      throw new Error(
        "Unable to get location data, please allow location data for better user experience!"
      );
    }

    console.log(longitude, latitude);

    const coords = { lat: latitude, lng: longitude };
    setLatLng(coords);
    setIsCoords(true);
  });
  navigator.geolocation.clearWatch(watchID);

  // Use the position coordinates to fetch data && allow user to change anytime the country in settings
  const { data, isError, error } = useQuery({
    queryKey: ["address", { coordinates: latLng }],
    queryFn: () => getAddressData(latLng?.lat, latLng?.lng),
    enabled: isCoords === true, // only fetch data when coordinates are is available
    //staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (data?.message) {
    toast.error(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  let newData = data as {
    address: string | undefined;
    latitude: number | undefined;
    longitude: number | undefined;
    watchID: number | undefined;
    country: string | undefined;
  };

  newData = { ...newData, watchID };

  if (data) {
    dispatch(locationActions.setLocation(newData));
    navigator.geolocation.clearWatch(watchID);
  }

  return (
    <>
      {data?.message && <ToastContainer />}

      <Feed
        latitude={newData?.latitude}
        longitude={newData?.longitude}
        country={newData?.country}
        addressError={isError ? error.message : ""}
      />
    </>
  );
};

export default Home;
