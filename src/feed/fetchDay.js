export default async function fetchDay(inputDate, keyword) {

  const currentDate = new Date(inputDate);
  const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
  const yyyy = oneWeekAgo.getFullYear();
  const mm = String(oneWeekAgo.getMonth() + 1).padStart(2, "0");
  const dd = String(oneWeekAgo.getDate()).padStart(2, "0");
  const endDate = yyyy + "-" + mm + "-" + dd;
  console.log(endDate);

  const data = fetch(
    
    "https://api.nasa.gov/planetary/apod?api_key=NRBwI2gQUZo7Cj4zV1SmTXuAL8bNYhLqHCCcb380&start_date=" + endDate
     + "&end_date=" + inputDate
    
  )
    .then((response) => response.json())
    .then((fetchData) => {

    if (keyword === "") {
      return fetchData;
    }
    else {
      let newData = [];
      let i = 0;
      while (i < fetchData.length) {
        if (fetchData[i].explanation.includes(keyword)) {
          newData.push(fetchData[i]);
        }
        i = i + 1;
      }
      
      return newData;
    }

    });

  return data;
}
