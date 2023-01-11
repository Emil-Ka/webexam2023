export const dateFormat = (date) => {
  if (date) {
    const [days, time] = date.split('T');
    const [year, month, day] = days.split('-');

    return `${day}.${month}.${year} ${time}`;
  }
}