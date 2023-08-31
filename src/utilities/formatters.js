const formatDuration = (durationMinutes) => {
  let durationString = "";
  let minutes = durationMinutes % 60;
  let hours = (durationMinutes - minutes) / 60;

  if (hours > 0) {
    durationString += `${hours}h `;
  }

  durationString += `${minutes}m`;

  return durationString;
};

export default { formatDuration };
