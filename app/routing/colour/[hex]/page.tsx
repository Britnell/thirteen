import Link from "next/link";
import colors from "../colors.json";

export default function Page({ params }: any) {
  const hex = params?.hex || "#ddd";

  return (
    <>
      <div
        style={{
          width: "400px",
          height: "400px",
          background: `#${hex}`,
        }}
      >
        <h1>#{hex}</h1>
      </div>
      <div>
        <Link href="/routing/colour">Back</Link>
      </div>
    </>
  );
}

// export async function generateStaticParams() {
//   return colors.map((col) => ({
//     hex: `${col}`,
//   }));
// }
