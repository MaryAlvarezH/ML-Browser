import { render, screen, waitFor } from "@testing-library/react";
import { ItemDetails } from "./ItemDetails";
import axios from "axios";

const mockedItemID: string = "MLA873236498";

const mockedResponse = {
  author: {
    name: "María",
    lastname: "Álvarez",
  },
  item: {
    id: "MLA873236498",
    title: "Monitor Gamer LG 27ul500 Led 27 Blanco 100v/240v",
    price: {
      amount: 113900,
      currency: "ARS",
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_676111-MLA41418872467_042020-O.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 150,
    description:
      'Disfrutá de todas las cualidades que el monitor LG 27UL500 tiene para ofrecerte. Vas a percibir las imágenes de una manera completamente diferente y podrás complementar cualquier espacio de tu casa.\n\nUn monitor a tu medida\nGracias a su pantalla led, tendrás una mejor visualización de los colores y vas a poder ahorrar energía.\n\nUna experiencia visual de calidad\nSus 27" te resultarán de gran comodidad para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 3840 x 2160 píxeles te permitirá disfrutar de momentos únicos gracias a una imagen con gran nitidez. Por último, sus 5 milisegundos de tiempo de respuesta lo hacen ideal para gamers y cinéfilos porque será capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.',
  },
};

jest.mock("axios");
const maxios = axios as jest.Mocked<typeof axios>;

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useParams: () => ({
    id: mockedItemID,
  }),
}));

describe("ItemDetails", () => {
  it("should show item details", async () => {
    maxios.get.mockResolvedValue({ data: { ...mockedResponse } });
    render(<ItemDetails />);

    const itemDetailsContent = await waitFor(() =>
      screen.getByTestId("item-details-content")
    );

    const itemTitle = await waitFor(() => screen.getByTestId("item-title"));

    const itemImage = (await waitFor(() =>
      screen.getByTestId("item-image")
    )) as HTMLImageElement | null;

    const itemQuantity = await waitFor(() =>
      screen.getByTestId("item-quantity")
    );

    expect(itemDetailsContent).toBeTruthy();
    expect(itemTitle.innerHTML).toEqual(mockedResponse.item.title);
    expect(itemImage?.src).toEqual(mockedResponse.item.picture);
    expect(Number(itemQuantity.innerHTML)).toEqual(
      mockedResponse.item.sold_quantity
    );
  });

  it("should error message when there isn't found item details", async () => {
    maxios.get.mockResolvedValue({ data: {} });
    render(<ItemDetails />);

    const itemErrrorContent = await waitFor(() =>
      screen.getByTestId("item-error-content")
    );

    expect(itemErrrorContent).toBeTruthy();
  });
});
