import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { SearchPage } from "../../../page-objects/search-page"

const searchPage = new SearchPage();

Given("the user is on the search page for {string}", (keyword) => {
    searchPage.viewProductSearch(keyword);
});

When("the user sorts by {string}", (sort) => {
    searchPage.sortBy(sort);
})

Then("the results are in {string} order", (sort) => {
    searchPage.getPageURL().should('contain',searchPage.getSortURL(sort));
})