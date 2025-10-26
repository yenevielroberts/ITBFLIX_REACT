import React from "react";

class Footer extends React.Component {

    render() {

        const {icons}=this.props;
        const iconsFooter= icons.map((icon, index)=> (//Itero el array de objectos
               //container para cada icon 
            <div key={index}className="m-1">
                <a href='' dangerouslySetInnerHTML={{ __html: icon.tag }} >
                </a>
            </div>
        ));

        return (
            <footer className="bg-blue-900 flex flex-col justify-center items-center w-screen h-32 ">
                {/*Container para juntar los icons */}
                <div className="flex flex-row">
                 {iconsFooter}
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <p>ITB-FLIX Yeneviel Roberts</p>
                    <p>Copyright@2025</p>
                </div>
            </footer>
        )
    }
}

export default Footer;