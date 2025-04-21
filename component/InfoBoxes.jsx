import InfoBox from "./InfoBox";

const InfoBoxes = () => {
    return ( 
        
        // <!-- Renters and Owners -->
        <section>
          <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
             <InfoBox heading="For Renters" 
             buttonInfo={{
                text: 'Browse Properties',
                link: '/properties',
                backgroundColor: 'bg-black',
              }}> 
             1 - tt Find your dream rental property. Bookmark properties and contact
             owners.</InfoBox>
             <InfoBox heading="For Prpoerty Owners" backgroundColor="bg-blue-100" 
              buttonInfo={{
                text: 'Add Property',
                link: '/properties/add',
                backgroundColor: 'bg-blue-500',
              }}
             > 2 - Find your dream rental property. Bookmark properties and contact
             owners. </InfoBox>
           
            </div>
          </div>
        </section>
    
     );
}
 
export default InfoBoxes;