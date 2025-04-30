import {it, expect, describe} from 'vitest'
import {getByRole, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import React from 'react'
import List from '../../src/components/List'

describe('list', ()=>{
    const linkArr = ["/hello", "/hi", "/btech"]
    render(<List links= {linkArr} />)

    screen.debug()

    it("should contain links", ()=>{
        linkArr.forEach((linkText)=>{

        const lnk = screen.getByRole('link', {name:linkText})
        expect(lnk).toBeInTheDocument()
        expect(lnk).toHaveTextContent(linkText)
        expect(lnk).toHaveAttribute("href", linkText)
        })
    })
})