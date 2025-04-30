import {it, expect, describe} from 'vitest'
import {getByRole, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import React from 'react'
import App from '../../src/App'


describe("App", ()=>{
    render(<App />)
    screen.debug();

    it("should have a para tag", ()=>{
        const para = screen.getByRole("paragraph")
        expect(para).toBeInTheDocument()
    })

    it("should've a button", ()=>{
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
    })

    it("should've a h4 tag", ()=>{
        const hfour = screen.getByRole('heading')
        expect(hfour).toBeInTheDocument()
    })

    it('should contain a IMG', ()=>{
        const img = screen.getByAltText("hello")
        expect(img).toBeInTheDocument()
    })

    // it('should contain a Anchor', ()=>{
    //     const linkk = screen.getByRole('link')
    //     expect(linkk).toBeInTheDocument()
    // })
})


describe("counter", ()=>{
    render(<App />)
    it("should be inc. and dec.", async()=>{
        const countElement = screen.getByText(/count:/i)
        const incBtn = screen.getByRole('button', {name:"increment"})
        const decBtn = screen.getByRole('button', {name:"decrement"})
        
    })
})
