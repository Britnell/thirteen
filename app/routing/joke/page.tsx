const fetchJoke = async (): Promise<string> =>
  fetch("https://icanhazdadjoke.com/", {
    cache: "no-store",
    headers: {
      Accept: "text/plain",
    },
  })
    .then((res) => res.text())
    .then(
      (txt) =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve(txt);
          }, 800)
        )
    );

export default async function Page() {
  const joke = await fetchJoke();

  return (
    <div>
      <h2>Router/Joke</h2>
      <p>{joke}</p>
    </div>
  );
}
