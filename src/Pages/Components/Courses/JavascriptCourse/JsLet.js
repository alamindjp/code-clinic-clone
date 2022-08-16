import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const JsLet = () => {

    const jsLet = [
        {
            id: 2,
            topic: "Javascript Let",
            title1: "",
            title2: "Cannot be Redeclared",
            title3: "Block Scope",
            title4: "Redeclearing",
            title5: "Let Hoisting",
            description1: "The let keyword was introduced in ES6 (2015).Variables defined with let cannot be Redeclared.Variables defined with let must be Declared before use.Variables defined with let have Block Scope.",
            description2: "Variables defined with let cannot be redeclared. You cannot accidentally redeclare a variable.With let you can not do this:",
            description3: "Before ES6 (2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const.These two keywords provide Block Scope in JavaScript.Variables declared inside a { } block cannot be accessed from outside the block:",
            description4: "Redeclaring a JavaScript variable with var is allowed anywhere in a program, With let, redeclaring a variable in the same block is NOT allowed:",
            description5: "Variables defined with var are hoisted to the top and can be initialized at any time.Meaning: You can use the variable before it is declared:",
            exampleTitle1: "",
            exampleTitle2: "Example: can not be redeclared",
            exampleTitle3: "Example: Block scope",
            exampleTitle4: "Example: Redeclearing",
            exampleTitle5: "Example: let hoisting",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "",
            example2: "//with let, you can not do this\n\nx = 'John Doe';\nlet x = 0;\n\n// SyntaxError: 'x' has already been declared\n\n//nwith var, you can do this\n\nvar x = 'John Doe;\nvar x = 0;",
            example3: "\n{\nlet x = 2;\n}\n\n//x can not be used here",
            example4: "\nvar x = 2;    // Allowed\nlet x = 3;    // Not allowed\n\n{\nlet x = 2;    // Allowed\nlet x = 3     // Not allowed\n}\n\n{\nlet x = 2;    // Allowed\nvar x = 3     // Not allowed\n}",
            example5: "\ncarName = 'Volvo';\nvar carName;",
            example6: "",
            example7: "",
            example8: "",
            example9: "",
            example10: ""
        }
    ]
    return (
        <div>
            <h2 className="text-4xl text-primary mb-4">Javascript Course</h2>

            <div>
                {
                    jsLet.map((dataFlow) =>

                        <div>

                            <br /><br />

                            <div className='bg-gray-100' style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic && <p className="text-3xl font-bold">  {dataFlow.topic} </p>}
                                <br />
                                {dataFlow.title1 && <p className="text-2xl font-bold mb-3"> {dataFlow.title1} </p>}
                                {dataFlow.description1 && <p> {dataFlow.description1} </p>}
                                <br />
                                {dataFlow.title2 && <p className="text-2xl font-bold mb-3"> {dataFlow.title2} </p>}
                                {dataFlow.description2 && <p> {dataFlow.description2} </p>}
                                <br />
                                {dataFlow.title3 && <p className="text-2xl font-bold mb-3"> {dataFlow.title3} </p>}
                                {dataFlow.description3 && <p> {dataFlow.description3} </p>}
                                <br />
                                {dataFlow.title4 && <p className="text-2xl font-bold mb-3"> {dataFlow.title4} </p>}
                                {dataFlow.description4 && <p> {dataFlow.description4} </p>}

                                <br />
                                {dataFlow.title5 && <p className="text-2xl font-bold mb-3"> {dataFlow.title5} </p>}
                                {dataFlow.description5 && <p> {dataFlow.description5} </p>}
                                <br />
                                <hr />
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle1} </p>
                                <br />
                                {dataFlow.example1 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}


                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle2} </p>
                                <br />
                                {dataFlow.example2 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle3} </p>
                                <br />
                                {dataFlow.example3 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle4} </p>
                                <br />
                                {dataFlow.example4 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle5} </p>
                                <br />
                                {dataFlow.example5 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example5}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example5}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}
                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default JsLet;