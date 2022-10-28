import Link from "next/link";
import colors from "./colors.json";

export default function Page() {
  return (
    <div>
      <h2>Colours</h2>
      <div>
        <h3>Your colours</h3>
        <ul
          style={{
            display: "flex",
          }}
        >
          {colors.map((c, i) => (
            <li key={i}>
              <Link
                style={{
                  backgroundColor: "#" + c,
                  display: "inline-block",
                  width: "80px",
                  height: "80px",
                }}
                href={`/routing/colour/${c}`}
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Create a new colour</h3>
        <form>
          <input type="text" name="color" />
        </form>
      </div>
    </div>
  );
}
