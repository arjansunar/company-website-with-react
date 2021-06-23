import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 10px;
    margin-top: 1.5rem;
    max-width: 10rem;
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '10px 25px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '14px')};
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#010606' : '#01BF71')};
        color: #fff;
        
    }
`