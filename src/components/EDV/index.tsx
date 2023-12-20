function EDV() {
    function calcEDV(amount:number, currency:string) {
        return amount *0.18 + " " + currency 
    }
  return (
    <>
        <h1>EDV: {calcEDV(200, "AZN")}</h1>
    </>
  )
}

export default EDV
