/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = (passTimes) => {
  passTimes.forEach(elem => {
    const date = new Date(elem.risetime * 1000);
    const msg = `Next pass at ${date} for ${elem.duration} seconds!`;
    console.log(msg);
  });
};

module.exports = { printPassTimes };