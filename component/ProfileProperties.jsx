'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const ProfileProperties = ({  properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);


  return ( properties.map((property)=>
         <div key={property._id} className="mb-10">
                <Link href={`/properties/${property._id}`}>
                  <img
                    className="h-32 w-full rounded-md object-cover"
                    src="/images/properties/b1.jpg"
                    alt="Property 2"
                    width={1000}
                    height={200}
                  />
                </Link>
                <div className="mt-2">
                  <p className="text-lg font-semibold">{property.name}</p>
                  <p className="text-gray-600">Address: {property.location.street} {property.location.city} { ' ' } {property.location.state}</p>
                </div>
                <div className="mt-2">
                  <a
                    href="/add-property.html"
                    className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </a>
                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
  ) );
}
 
export default ProfileProperties;