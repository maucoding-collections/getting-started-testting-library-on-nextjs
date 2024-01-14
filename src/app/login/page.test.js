import { render, waitFor, fireEvent } from "@testing-library/react";
import Component from "./page";

const routerPush = jest.fn();

jest.mock("next/navigation", () => {
  return {
    useRouter: () => {
      return {
        push: routerPush,
      };
    },
  };
});

describe("Login Page Unit Test", () => {
  async function init() {
    const utils = render(<Component />);

    await waitFor(() => utils.container);

    const title = utils.getByText("Login Page");
    const username = utils.getByLabelText("Username");
    const password = utils.getByLabelText("Password");
    const button = utils.getByTestId("button");

    return { title, username, password, button, ...utils };
  }

  it("Rendering", async () => {
    const { title, username, password, button } = await init();

    expect(title).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Login Failed", async () => {
    const { username, password, button, ...utils } = await init();

    fireEvent.change(username, {
      preventDefault: jest.fn(),
      target: {
        value: "username",
      },
    });

    fireEvent.change(password, {
      preventDefault: jest.fn(),
      target: {
        value: "password",
      },
    });

    expect(username.value).toBe("username");
    expect(password.value).toBe("password");

    fireEvent.click(button);

    expect(utils.getByText("Login Failed")).toBeInTheDocument();
  });

  it("Login Success", async () => {
    const { username, password, button, ...utils } = await init();

    fireEvent.change(username, {
      preventDefault: jest.fn(),
      target: {
        value: "password",
      },
    });

    fireEvent.change(password, {
      preventDefault: jest.fn(),
      target: {
        value: "password",
      },
    });

    expect(username.value).toBe("password");
    expect(password.value).toBe("password");

    fireEvent.click(button);

    expect(utils.getByText("Login Success")).toBeInTheDocument();
    await new Promise((r) => setTimeout(r, 1500));
    expect(routerPush).toBeCalledTimes(1);
    expect(routerPush).toBeCalledWith("/dashboard");
  });
});
