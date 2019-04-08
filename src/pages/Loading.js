import React from 'react'
import './Loading.scss'

/**
 * Functional react component that creates a
 * loading icon to render on screen.
 * @funtion Loading
 * @params {Object} props - Component props specific to setup.
 * @returns {JSX.Element} - rendered component.
 */
const Loading = () => (
    <div data-test="component-loading" className="sk-fading-circle">
        <div data-test="circle" className="sk-circle1 sk-circle" />
        <div data-test="circle" className="sk-circle2 sk-circle" />
        <div data-test="circle" className="sk-circle3 sk-circle" />
        <div data-test="circle" className="sk-circle4 sk-circle" />
        <div data-test="circle" className="sk-circle5 sk-circle" />
        <div data-test="circle" className="sk-circle6 sk-circle" />
        <div data-test="circle" className="sk-circle7 sk-circle" />
        <div data-test="circle" className="sk-circle8 sk-circle" />
        <div data-test="circle" className="sk-circle9 sk-circle" />
        <div data-test="circle" className="sk-circle10 sk-circle" />
        <div data-test="circle" className="sk-circle11 sk-circle" />
        <div data-test="circle" className="sk-circle12 sk-circle" />
    </div>
)

export default Loading
