import { render } from "@testing-library/react";

import Header from "../Header.js";
import { Provider } from "react-redux";
import { appStore } from "../../stores/appStore.js";
import { BrowserRouter } from "react-router-dom";

it("Should be load header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
