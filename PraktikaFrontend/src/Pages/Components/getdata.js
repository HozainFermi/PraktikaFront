import axios from "axios"

export default fetchdata = async () => {

    let response = await fetch('https://localhost:7178/ParsTask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
            "siteUrl": "https://www.scrapingcourse.com/ecommerce/page/2/",
            "selectors": [
             "//h2[@class='product-name woocommerce-loop-product__title']",
              "//span[@class='price']/span[@class='product-price woocommerce-Price-amount amount']/bdi"
            ],
            "selectorsType": "XPath"
          } });
      let result = await response.json();
      alert(result);
}