import useImage from "common/hooks/useImage";

function QueryWithSuspense() {
  const { data, isError } = useImage({ usingSuspense: true });

  return (
    <div>
      {isError && <div>Error</div>}
      {data && <img src={data.url} alt="random" />}
    </div>
  );
}

export default QueryWithSuspense;
