import { useEffect, useState } from "react";

export default function DisneyContacts() {
  const [characters, setCharacters] = useState([]);
  async function fetchData() {
    const response = await (
      await fetch("https://api.disneyapi.dev/character")
    ).json();
    console.log(response);
    setCharacters(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ margin: 10, padding: 10 }}>
      <table border={3} cellSpacing={0} cellPadding={10}>
        <th>Image</th>
        <th>Name</th>
        <th>Films</th>
        <th>Tv Shows</th>
        <th>Source Url</th>
        {characters &&
          characters.length > 0 &&
          characters.map((character) => (
            <tr>
              <td>
                <img width={"200px"} src={character.imageUrl} />
              </td>
              <td>{character.name}</td>
              <td>{character.films}</td>
              <td>{character.tvShows}</td>
              <td>
                <a href={character.sourceUrl}>visit</a>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
