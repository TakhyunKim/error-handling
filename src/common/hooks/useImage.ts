import { useQuery } from "@tanstack/react-query";

import { getImage } from "common/api/image";

const useImage = ({ usingSuspense }: { usingSuspense: boolean }) => {
  const { data, isError, isLoading } = useQuery(["image"], getImage, {
    suspense: usingSuspense,
  });

  return { data, isLoading, isError };
};

export default useImage;
