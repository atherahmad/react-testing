import {render, screen} from "@testing-library/react";
import Greet from "./Greet"

test("Greeting renders correctly", () =>{
    render(<Greet />)
    const textElement = screen.getByText(/welcome/i)
    expect(textElement).toBeInTheDocument()
})