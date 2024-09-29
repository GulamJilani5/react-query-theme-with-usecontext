import { useQuery } from "@tanstack/react-query";
import itemsFetch from "../../utils";
import Spinner from "../../component/spinner/spinner";
import { useTheme } from "../../component/theme/themeContext";

export default function Product() {
  const { theme } = useTheme();
  const { data, error, isPending } = useQuery({
    queryKey: ["items"],
    queryFn: () => itemsFetch.get("/"),
  });

  //   console.log(data?.data?.products);
  const items = data?.data?.products;
  console.log(items);

  console.log("isPending:", isPending);
  console.log(error);

  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return <Error error={error} />;
  }
  return (
    // <div className={theme}>
    <div>
      <h1>Product page</h1>
      {items.map((item) => (
        <div key={item.id}>
          <p>Title: {item.title}</p>
          <p>Description: {item.description}</p>
          <p>
            Thumbnail:
            <img src={item.thumbnail} alt={item.title} />
          </p>
          <br />
        </div>
      ))}
    </div>
  );
}
