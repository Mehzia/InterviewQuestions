
import { useQueries, QueryClient, QueryClientProvider } from "@tanstack/react-query";



function MakeupQuery() {
  const products = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn: () => fetch("http://localhost:2000/makeup").then((res) => res.json()),
      },
    ],
  });

  const [productsData] = products;

  return (
    <div>
      <h1>Makeup Query</h1>
      <ul>
        {productsData?.data?.map((product: any) => (
          <li key={product.price}>
            <h2>{product.product}</h2>
            <p>{product.price}</p>
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