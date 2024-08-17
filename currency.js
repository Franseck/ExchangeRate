class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
    }

  async  exchange2(amount , firstCurrency , secCurrency){
    const response =    await fetch(`${this.url}${firstCurrency}`);
    const res = await response.json()
const  exchangedResult = amount*res.data[secCurrency]
return exchangedResult

}
}    