export function wallCoordInteraction(x, y) {
  /* Which triangle was clicked?
    x =     0  1  2  3  4  5  6  7  8  9 10 11 12 13 14
    y =  0  b  a  a  a  a  a  a  a  a  a  a  a  a  a  c
         1  b  b  a  a  a  a  a  a  a  a  a  a  a  c  c
         2  b  b  b  a  a  a  a  a  a  a  a  a  c  c  c
         3  b  b  b  b  a  a  a  a  a  a  a  c  c  c  c
         4  b  b  b  b  b  a  a  a  a  a  c  c  c  c  c
         5  b  b  b  b  b  b  a  a  a  c  c  c  c  c  c
         6  b  b  b  b  b  b  b  a  c  c  c  c  c  c  c
         7  b  b  b  b  b  b  b  d  c  c  c  c  c  c  c
         8  b  b  b  b  b  b  d  d  d  c  c  c  c  c  c
         9  b  b  b  b  b  d  d  d  d  d  c  c  c  c  c
        10  b  b  b  b  d  d  d  d  d  d  d  c  c  c  c
        11  b  b  b  d  d  d  d  d  d  d  d  d  c  c  c
        12  b  b  d  d  d  d  d  d  d  d  d  d  d  c  c
        13  b  d  d  d  d  d  d  d  d  d  d  d  d  d  c
        14  d  d  d  d  d  d  d  d  d  d  d  d  d  d  d
  */
  const xM = x % 15;
  const yM = y % 15;
  const aOrB = xM + yM < 14;
  const aOrC = xM > yM;
  const xI = Math.floor(x / 15);
  const yI = Math.floor(y / 15);
  let triangle;

  if (aOrB && aOrC) triangle = "a";
  if (aOrB && !aOrC) triangle = "b";
  if (!aOrB && aOrC) triangle = "c";
  if (!aOrB && !aOrC) triangle = "d";
  return { triangle, xM, yM, xI, yI };
}
