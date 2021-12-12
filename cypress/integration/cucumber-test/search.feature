Feature: Search for products

Scenario Outline: Sort search by '<sort>'
Given the user is on the search page for "macbook"
When the user sorts by "<sort>"
Then the results are in "<sort>" order

Examples:
|sort              |
|Name (A - Z)      |
|Name (Z - A)      |
|Price (Low > High)|
|Price (High > Low)|
|Rating (Highest)  |
|Rating (Lowest)   |
|Model (A - Z)     |
|Model (Z - A)     |