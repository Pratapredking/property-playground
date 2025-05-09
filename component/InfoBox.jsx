
const InfoBox = ({ heading,backgroundColor="bg-gray-100",children,textColor,buttonInfo }) => {
    return ( 
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
        <p className={`${textColor} mt-2 mb-4`}>
          {children}
        </p>
        <a
         href={buttonInfo.link}
         className={`inline-block ${buttonInfo.backgroundColor} text-red rounded-lg px-4 py-2 hover:opacity-80`}
 
        >
           {buttonInfo.text}

        </a>
      </div> 
      );
}
 
export default InfoBox;