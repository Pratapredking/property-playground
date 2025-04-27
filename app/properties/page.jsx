import properties from "/properties.json";
import ProperrtyCard from "/component/PropertyCard";
import connectDB from "/config/database";
import Property from '/models/Property';


const PropertiesPage = async () => {
   // console.log(properties);
    // return ( <div>Property Page</div> );
    
    await connectDB();

    const properties = await Property.find({}).lean();
 
    return ( <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
            {properties.length === 0 ? (<p>No Properties found</p>) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
                     {
                         properties.map((property) => (
                            <ProperrtyCard key={property._id} property={property}/>
                        ))
                    }
                </div>

            )}
            </div>
            </section>
);
}
 
export default PropertiesPage;