import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchResults } from "./SearchResults";
import axios from "axios";

const mockedResponse = {
  author: {
    name: "María",
    lastname: "Álvarez",
  },
  categories: [
    "Hogar, Muebles y Jardín",
    "Electrodomésticos y Aires Ac.",
    "Monitores y Accesorios",
    "Accesorios para Celulares",
    "Laptops y Accesorios",
  ],
  items: [
    {
      id: "MLA873236498",
      title: "Monitor Gamer LG 27ul500 Led 27   Blanco 100v/240v",
      price: {
        amount: 113900,
        currency: "ARS",
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_676111-MLA41418872467_042020-I.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA913409432",
      title: "Estufa Pantalla Directa 1500 Calorias A Gas Garrafa 10kg 15k",
      price: {
        amount: 2149.99,
        currency: "ARS",
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_959477-MLA45330035585_032021-I.jpg",
      condition: "new",
      free_shipping: false,
    },
    {
      id: "MLA785551421",
      title: "Pantalla Infrarroja 3000 Cal Gas Natural Valvula Y Robinete",
      price: {
        amount: 10596,
        currency: "ARS",
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_771890-MLA41571988806_042020-I.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA760203555",
      title: "Pantalla Para Proyector Tripode 120 Pulgadas - Envio Gratis",
      price: {
        amount: 38999,
        currency: "ARS",
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_684630-MLA31974553625_082019-I.jpg",
      condition: "new",
      free_shipping: true,
    },
  ],
};

jest.mock("axios");
const maxios = axios as jest.Mocked<typeof axios>;

describe("SearchResults", () => {
  it("should show results for the search", async () => {
    maxios.get.mockResolvedValue({ data: { ...mockedResponse } });
    render(
      <Router>
        <SearchResults onSearchResults={() => {}} />
      </Router>
    );

    const itemsContainer = await waitFor(() =>
      screen.getByTestId("items-container")
    );

    expect(itemsContainer).toBeTruthy();
  });

  // it("should error message when there isn't found items", async () => {
  //   maxios.get.mockResolvedValue({ data: [] });
  //   render(
  //     <Router>
  //       <SearchResults onSearchResults={() => {}} />
  //     </Router>
  //   );

  //   const notFoundItemsContainer = await waitFor(() =>
  //     screen.getByTestId("not-found-items-container")
  //   );

  //   expect(notFoundItemsContainer).toBeTruthy();
  // });
});
