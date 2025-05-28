import {
  useQueries,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function MakeupQuery() {
  const products = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn: () =>
          fetch("http://localhost:2000/makeup").then((res) => res.json()),
      },
      {
        queryKey: ["chats"],
        queryFn: () =>
          fetch("http://localhost:2000/chat").then((res) => res.json()),
      },
    ],
  });

  const [makeupQuery, chatQuery] = products;
  if (makeupQuery.isLoading || chatQuery.isLoading)
    return <div>Loading...</div>;
  if (makeupQuery.error || chatQuery.error)
    return <div>Error loading data</div>;

  return (
    <div>
      <h1>Makeup Query</h1>
      <ul>
        {makeupQuery.data?.map((product: any) => (
          <li key={product.price}>
            <h2>{product.product}</h2>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      <h1>Book Query</h1>
      <ul>
        {chatQuery.data?.map((chats: any) => (
          <li key={chats.email}>
            <h2>{chats.name}</h2>
            <h2>{chats.email}</h2>

          </li>
        ))}
      </ul>
    </div>
  );
}
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MakeupQuery />
    </QueryClientProvider>
  );
}
