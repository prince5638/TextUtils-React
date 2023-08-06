// import React, { useState } from 'react'

export default function About(props) {
    // defining the states
    // const [mystyle, setmystyle] = useState(
    //     {
    //         color: 'white',
    //         backgroundColor: 'black',
    //     });

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36,74,104)' : 'white'
    }

    return (
        <div className='container my-2 py-1' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1>Know More About TextUtils</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>1) Versatile Text Manipulation for React Web Pages</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils is a dynamic React-based web application designed to provide users with a powerful set of text manipulation tools. Whether you're a writer, student, professional, or simply someone who deals with text regularly, TextUtils simplifies various tasks related to text processing. From counting words and characters to converting text cases, it offers a range of features that streamline text-related operations.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>2) Efficient and User-Friendly Features</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils offers a suite of user-friendly features that enhance productivity and convenience. Users can effortlessly count the number of words and characters in a given text, helping writers meet specific word count requirements. The application's case conversion functionality allows users to swiftly transform text between uppercase, lowercase, title case, and more. Additionally, TextUtils provides an estimated reading time for a piece of text, aiding in gauging the time needed to comprehend or present the content. The text copying feature simplifies the process of copying manipulated text, while the extra space removal tool ensures clean and consistent formatting.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>3) Simplifying Text-Related Tasks with Ease</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils is a go-to tool for anyone looking to streamline their text-related tasks. Whether it's preparing written content, optimizing text for better readability, or ensuring consistency in formatting, this application covers a wide array of use cases. By offering an intuitive and responsive user interface, TextUtils ensures that users can access its features seamlessly across different devices and platforms. With its focus on enhancing efficiency and saving time, TextUtils empowers users to accomplish their text manipulation goals effortlessly.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
