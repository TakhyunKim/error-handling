import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Loading from "components/Loading";
import QueryWithState from "components/QueryWtihState";
import QueryWithSuspense from "components/QueryWithSuspense";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Suspense fallback={<Loading />}>
        <QueryWithSuspense />
      </Suspense> */}
      <QueryWithState />
    </QueryClientProvider>
  );
}

export default App;
