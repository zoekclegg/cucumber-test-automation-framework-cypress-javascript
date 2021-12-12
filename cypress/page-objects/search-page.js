import { BasePage } from "./base-page";

const url = "https://demo.opencart.com/index.php?route=product/search";

const sortDropdown = '#input-sort';

export class SearchPage extends BasePage{

    viewProductSearch(keyword){
        cy.visit(url + "&search=" + keyword);
    }

    sortBy(sort){
        cy.get(sortDropdown).select(sort);
    }

    getSortURL(sort){
        var sortURL = "";
        switch (sort) {
            case "Name (A - Z)":
              sortURL = "sort=pd.name&order=ASC";
              break;
            case "Name (Z - A)":
              sortURL = "pd.name&order=DESC";
              break;
            case "Price (Low > High)":
              sortURL = "sort=p.price&order=ASC";
              break;
            case "Price (High > Low)":
              sortURL = "sort=p.price&order=DESC";
              break;
            case "Rating (Highest)":
              sortURL = "sort=rating&order=DESC";
              break;
            case "Rating (Lowest)":
              sortURL = "sort=rating&order=ASC";
              break;
            case "Model (A - Z)":
              sortURL = "sort=p.model&order=ASC";
              break;
            case "Model (Z - A)":
              sortURL = "sort=p.model&order=DESC";
              break;
          }
        return sortURL;
    }

}