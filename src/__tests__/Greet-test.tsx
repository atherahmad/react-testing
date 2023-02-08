import {render, screen} from "@testing-library/react";
import Greet from "../components/greet/Greet"

xit("Greeting Test in tests Folder with coverage with watch", () =>{
    render(<Greet />)
    const textElement = screen.getByText(/welcome/i)
    expect(textElement).toBeInTheDocument()
    
})