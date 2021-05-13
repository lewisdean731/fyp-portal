
export const createRowArray = (cols, children) => {
  let rows=[];
  let count = 1;
  let row = []

  for(const child in children) {
    if(count === cols) {
      row.push(child)
      rows.push(row)
      row = []
      count = 1
      
    } else {
      count += 1;
      row.push(child)
    }
    console.log(child)
  }
  rows.push(row)

  return rows

}
 
export default createRowArray