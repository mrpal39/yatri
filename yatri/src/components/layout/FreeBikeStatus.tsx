import React from 'react'

function FreeBikeStatus(props: { data: any }) {
      const { data } = props
      console.log('===================FreeBikeStatus=================');
      console.log(data);
      console.log('====================================');
      return (
            <div className=''>
                  {data && (

                        <>
                              <div className='row'>

                                    {data?.bikes.map((res) => {
                                          return (
                                                <>

                                                      <div className="card">
                                                            <div className="card-header">
                                                                  {res.bike_id}
                                                                  current_range_meters: {res.current_range_meters}
                                                                  rental_uris:



                                                            </div>
                                                            <img src={res.rental_uris['android']} alt={"logo"} />

                                                      </div>
                                                </>

                                          )
                                    })}

                              </div>

                        </>

                  )}



                  { }
            </div>
      )
}

export default FreeBikeStatus