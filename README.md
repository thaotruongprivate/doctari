# doctari test project
## Description
This website displays names and addresses of 20 persons from a test-data text file. It also uses Google GeoCoding API to fetch the federal state of each address.

## Requirements
- you have yarn or npm installed

## Installation
- clone the repository and cd into the destination folder
- run `yarn install`
- go to config.js file and hard-code the google_api_key value 
- run webpack to compile a js file `yarn webpack --mode production`
- install some server to serve the website, I used http-server `yarn add http-server -g`
- run `http-server -o dist -d false`, the website will open in a browser automatically

