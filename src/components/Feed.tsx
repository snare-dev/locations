// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SinglePost from "./SinglePost";
import { getPosts } from "@/services/apiCalls";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Post, useAppSelector } from "@/types";
import { useState } from "react";
import LoadingSipnner from "./LoadingSipnner";
import ErrorMessage from "./ErrorMessage";

type dataProps = {
  latitude: number | undefined;
  longitude: number | undefined;
  country: string | undefined;
  addressError: string;
};

const Feed = ({ latitude, longitude, country, addressError }: dataProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const [radius, setRadius] = useState<number>(10);
  const coords = {
    latitude,
    longitude,
    country,
  };

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(coords, radius),
    staleTime: 1000 * 60 * 60, // 1 hr
  });

  const handleChange = (value: string) => {
    switch (value) {
      case "20":
        setRadius(20);
        break;
      case "50":
        setRadius(50);
        break;
      case "100":
        setRadius(100);
        break;
      default:
        setRadius(10);
    }
  };

  let content;

  if (isLoading) {
    content = <LoadingSipnner />;
  }
  if (isError) {
    console.log(error);
    content = <ErrorMessage message={error.message} />;
  }

  if (addressError !== "") {
    content = <ErrorMessage message={addressError} />;
  }

  if (data) {
    console.log(data);
    const locations = data.locations as Post[];

    if (locations.length === 0) {
      content = (
        <h1>
          No posts found near you please enable location or change country in
          the settings.{" "}
        </h1>
      );
    }

    content = (
      <ul>
        {locations.map((post: Post) => (
          <li key={post.id}>
            <SinglePost post={post} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-end py-2">
        <Select onValueChange={(val: string) => handleChange(val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Radius(miles)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="py-2 mx-auto">{content}</div>
    </div>
  );
};

export default Feed;
