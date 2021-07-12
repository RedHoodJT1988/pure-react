import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
    return (
        <>
            <Hello />
            <World />
            <br/>
            <SubmitButton />
            <br />
            <ValidIndicator />
        </>
        )
}

function Hello() {
    return (
        <span>Hello</span>
    );
}

function World() {
    return (
        <span>World</span>
    );
}

function SubmitButton() {
    const buttonLabel = "Submit";
    return (
        <button>{buttonLabel}</button>
    )
}

function ValidIndicator() {
    const isValid = true;
    return (
        <span>{isValid ? 'valid' : 'not valid'}</span>
    )
}

ReactDOM.render(
    <HelloWorld />, 
    document.querySelector('#root')
);