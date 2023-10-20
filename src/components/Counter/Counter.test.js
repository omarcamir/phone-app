import {fireEvent, render, screen} from '@testing-library/react'
import Counter from './Counter'

test('Should render the counter default value 0', () => { 
    //render component
    //select element
    //events
    //expect result

    render (<Counter/>);
    const counterText = screen.getByText('0');
    expect (counterText).toBeInTheDocument();
})
test('Should render increment Button', () => { 
    render (<Counter/>);


    const incrementBtn = screen.getByRole('button' , {name:'+'});
    expect (incrementBtn).toBeInTheDocument();
    expect (incrementBtn).toBeEnabled();
})
test('When we click the increment Button the value increases', () => { 
    render (<Counter/>);

    const counterText = screen.getByText('0')
    expect (counterText).toBeInTheDocument()
    expect (counterText).toHaveTextContent('0')
    //simulate click button
    //counter +1 => 1

    const incrementBtn = screen.getByRole('button' , {name:'+'});
    fireEvent.click(incrementBtn)
    expect(counterText).toHaveTextContent('1')
})
test('Should render decrement Button', () => { 
    render (<Counter/>);


    const decrementBtn = screen.getByRole('button' , {name:'-'});
    expect (decrementBtn).toBeInTheDocument();
    expect (decrementBtn).toBeEnabled();
})
test('When we click the decrement Button the value increases', () => { 
    render (<Counter/>);

    const counterText = screen.getByText('0')
    expect (counterText).toBeInTheDocument()
    expect (counterText).toHaveTextContent('0')
    //simulate click button
    //counter +1 => 1

    const decrementBtn = screen.getByRole('button' , {name:'-'});
    fireEvent.click(decrementBtn)
    expect(counterText).toHaveTextContent('0')
})