//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////
///////////
// v4 - isLoading, v5 - isPending

const { data, error, isPending, refetch, iseFetching } = useQuery(
  queryKey,
  queryFn,
  options
);

// React Query features

// 1)Data Caching: Automatically caches fetched data and provides it for future requests.
options = {
  staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
};

// 2)Background Refetching: Automatically refetches data in the background when necessary.
/*
const { data, isPending, error, isFetching } = useQuery(["users"], fetchUsers, {
  refetchOnWindowFocus: true, // Refetch data when the window gains focus
  refetchInterval: 10000, // Automatically refetch every 10 seconds
});

<p>{isFetching ? 'Updating in background...' : 'Up to date'}</p>
*/

// 3)Retries on Failure: Automatically retries failed requests with exponential backoff.
options = {
  retry: 3, // Retry failed requests up to 3 times
  retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // Exponential backoff for retries
};

// 4)Synchronization: Synchronizes data across tabs and sessions.
/*
const { data, isPending, error, isFetching } = useQuery(["users"], fetchUsers, {
  refetchOnWindowFocus: true, // When you switch to this tab, the data will be refetched
});
<p>{isFetching ? 'Updating data...' : 'Up to date'}</p>
*/

// 5)Polling: Automatically refetch data at specified intervals.
options = {
  refetchInterval: 5000, // Poll the data every 5 seconds
  refetchIntervalInBackground: true, // Poll even when the tab is in the background
};

// 6)Query Invalidation: You can manually or automatically invalidate stale data, prompting a refetch.

const queryClient = useQueryClient(); // Access to the query client

// Fetching users with React Query
// const { data, isPending, error } = useQuery(["users"], fetchUsers);

// Mutation to add a new user
const mutation = useMutation(addUser, {
  onSuccess: () => {
    // Invalidate and refetch the 'users' query after adding a new user
    queryClient.invalidateQueries(["users"]);
  },
});

const handleAddUser = () => {
  const newUser = { name: "New User" }; // Dummy new user
  mutation.mutate(newUser); // Trigger the mutation
};
