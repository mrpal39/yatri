import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainApiProtectedVersion } from '../utils/axios/requests';
import FreeBikeStatus from '../components/layout/FreeBikeStatus';
import StationStatus from '../components/layout/StationStatus';
import VehicleTypes from '../components/layout/VehicleTypes';
import Systeminformation from '../components/layout/Systeminformation';

function FeedPage() {
  const { name } = useParams()
  const [feedData, setfeedData] = useState([])
  const [loading, setloading] = useState(false)
  console.log('=======dfeedData=============================');
  console.log(feedData);
  console.log('====================================');

  useEffect(() => {

    async function fetchDataByName(name: string) {
      const res = new MainApiProtectedVersion("", name);
      const response = await res.requstGetbyName()
      if (response.data?.data) {
        setfeedData(response.data?.data?.data)
        setloading(true)
      }

    }
    fetchDataByName(name)
  }, [name])



  return (
    <div>
      {loading ? (
        <>   {(() => {
          switch (name) {
            case 'free_bike_status':
              return <FreeBikeStatus data={feedData} />
                ;
            case 'station_status':
              return <StationStatus data={feedData} />
                ;
            case 'vehicle_types':
              return <VehicleTypes data={feedData} />
                ;
            case 'system_information':
              return <Systeminformation data={feedData} />
                ;

            default:
              return 'foo';

          }
        })()}

        </>

      ) : (

        <>   <h1>loadng</h1>   </>

        // <>      </>




      )}


    </div>
  )
}

export default FeedPage
