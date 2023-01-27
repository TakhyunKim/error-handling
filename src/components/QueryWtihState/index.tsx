import useImage from "common/hooks/useImage";

function QueryWithState() {
  const { data, isError, isLoading } = useImage({ usingSuspense: false });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && <img src={data.url} alt="random" />}
    </div>
  );
}

export default QueryWithState;
