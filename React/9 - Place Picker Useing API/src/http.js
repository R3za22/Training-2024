export async function fetchAvailablePlaces() {
  const responce = await fetch("http://localhost:3000/places");
  const resData = await responce.json();

  if (!responce.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}
