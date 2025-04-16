export default function Modak() {
  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  return (
    <>
      <img
        src="https://pipingpotcurry.com/wp-content/uploads/2022/08/Ukadiche-Modak-Piping-Pot-Curry-720x720.jpg"
        alt="modak-image"
      />
      <h1>Modak</h1>
      <p>{formatDate(today)}</p>
      <p>
        A modak is a traditional Indian sweet dumpling, especially popular
        during the Ganesh Chaturthi festival.
      </p>
    </>
  );
}
