/**
 * Title component should render the text Welcome and if a name is passed
 * into the component it should render Welcome followed by the name. 
 */
import Title from "./Title"
import {render, screen}  from "@testing-library/react"

test('Title renders correctly' , ()=>{
    render(<Title />)
    const textElement = screen.getByText(/welcome/i)
    expect(textElement).toBeInTheDocument()
})

test('Title renders with a name', ()=>{

    render(<Title name='Ather'/>)
    const textElement = screen.getByText(/welcome ather/i)
    expect(textElement).toBeInTheDocument()
})