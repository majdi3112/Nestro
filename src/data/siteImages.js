/** Beelden in `public/images/` (bron: C:\\Users\\hp\\Pictures\\nesto — na wijziging opnieuw kopiëren indien nodig). */
export function publicImage(file) {
  return `${import.meta.env.BASE_URL}images/${file}`;
}

export const food = {
  brunchPlate: publicImage("foto1.jpg"),
  pastry: publicImage("nestro.jpg"),
  sandwich: publicImage("foto3.jpg"),
  coffeeTable: publicImage("foto4.jpg"),
  kidsCorner: publicImage("kids.jpg"),
};
