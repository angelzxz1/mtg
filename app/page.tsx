import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const res = await axios.get(
    "https://api.scryfall.com/cards/named?exact=Tegwyll+Duke+of+Splendor"
  );
  if (!res) return <div>loading...</div>;
  // console.log(res.data);
  const { name, image_uris } = res.data;
  const { png } = image_uris;
  console.log(png);
  return (
    <div>
      <Image src={image_uris.png} alt={name} width={300} height={300} />
      <div>{res.data}</div>
    </div>
  );
}
