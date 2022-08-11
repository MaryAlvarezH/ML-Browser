# practice Test - Frontend (Mercado libre)

This project include the following pages:

1. **Home** `/` -> To search a product or brand from search box
2. **Serch results** `/items?search=` -> To show four products of the made sarch
3. **Product details** `/items/:id` -> To show details for specific product

## Desktop version

1. Home
   ![Home pageview](https://user-images.githubusercontent.com/38545126/184041830-31c81155-4a61-48c9-8767-9e320fa7214c.png)

2. Search results
   ![Search results pageview](https://user-images.githubusercontent.com/38545126/184041839-558970ec-ba28-48e4-80ff-201a94be8b63.png)

3. Product details
   ![Product details pageview](https://user-images.githubusercontent.com/38545126/184041843-621eb069-8bb1-48b8-b263-9304accdb717.png)

## Mobile version

1. Home
   ![Home pageview](https://user-images.githubusercontent.com/38545126/184041943-6341053f-6885-4f21-8831-adaa39113633.png)

2. Search results
   ![Search results pageview](https://user-images.githubusercontent.com/38545126/184041946-bcdf084b-6644-40b3-9b8b-e762289de32e.png)

3. Product details
   ![Product details pageview](https://user-images.githubusercontent.com/38545126/184041948-2f167bfb-c634-496e-a7c6-488f682aa2e7.png)

## Extra components

In order to improve the UX the following components were added:

1. Message when there aren't any results for the search
   ![message desktop](https://user-images.githubusercontent.com/38545126/184042462-73aa4a58-5d32-4a4e-86a4-8102dac0873a.png)
   ![message mobile](https://user-images.githubusercontent.com/38545126/184042457-4ed4da5c-b4ca-4eb4-8523-8ef5bf750833.png)

2. Error message when there's an error getting product details
   ![error desktop](https://user-images.githubusercontent.com/38545126/184042466-23447e3c-bbfb-4d1a-a7c0-d1692624e84a.png)
   ![error mobile](https://user-images.githubusercontent.com/38545126/184042470-83f675d2-2bba-4889-877d-78d1f50afac1.png)

3. Loaders for **Search result** page:
   ![loader desktop](https://user-images.githubusercontent.com/38545126/184042505-2414d104-0e03-4d2a-8121-72944559fac4.png)
   ![loader mobile](https://user-images.githubusercontent.com/38545126/184042508-00a3c406-ed6a-46fe-9968-a8f671d6f445.png)

4. Loaders for **Product details** page:
   ![loader desktop](https://user-images.githubusercontent.com/38545126/184042510-16a67292-d70c-413b-8581-e79934888d5e.png)
   ![loader mobile](https://user-images.githubusercontent.com/38545126/184042509-9f759c00-48cf-42d2-afcc-f4e934f979e6.png)

### Dependencies

The project uses a server side, this server is hosted in [Heroku](https://www.heroku.com/free) so you will be able to start the project without running the server side, but if you want it you can run it and use it by replacing the value of the **BASE_URL** constant declared in `/src/ultis/constants` with the value of `http://localhost:3001`

[Go to backend repo](https://github.com/MaryAlvarezH/ML-server)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Author

María Isabel Álvarez Hernández
