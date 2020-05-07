**PersevereCodeCamp**- Information Security and Quality Assurance
------

1) Most logic will need done in `controllers/convertHandler.js` but do complete `routes/api.js`
2) You will add any security features to `server.js`

## Project Overview

Create a full stack application that allows a user to input a number and unit and converts the input from Metric to Imperial standard or vice versa.

## Key Concepts

1. Use Helmet JS
    - XXS, contentSecurityPolicy, frameGuard, dsnPrefetching
2. Regular Expressions / Parsing User Input

## User Stories

1. I will help prevent the client from trying to guess(sniff) the MIME type.
2. I will prevent cross-site scripting (XSS) attacks.
3. Set the content security policies to only allow loading of scripts and CSS from your server.
4. Only allow your site to be loaded in an iFrame on your own pages.
5. Do not allow DNS prefetching.
6. I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted.
Hint: Split the input by looking for the index of the first character.
7. I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
8. I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
9. I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
10. If my unit of measurement is invalid, returned will be 'invalid unit'.
11. If my number is invalid, returned with will 'invalid number'.
12. If both are invalid, return will be 'invalid number and unit'.
13. I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
14. My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.
