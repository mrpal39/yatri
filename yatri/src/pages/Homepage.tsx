import React, { useEffect, useState } from 'react'
import { MainApiProtectedVersion } from '../utils/axios/requests'
import { Link } from 'react-router-dom';

function Homepage() {

      const [variousType, setVarioustype] = useState()
      const [selectType, setSelecttype] = useState()

      console.log('====================================');
      console.log(variousType);
      console.log('====================================');
      useEffect(() => {
            async function fetchData() {

                  const res = new MainApiProtectedVersion();
                  const response = await res.requstGetBike();
                  if (response.status == 200) {
                        console.log('============done========================');
                        setVarioustype(response?.data?.data)
                  }
            }
            fetchData()
      }, [])





      return (
            <div className='row'>
                  {selectType != null && (<>
                        {selectType?.name}</>)}





                  {variousType != null && (<>
                        {
                              variousType.map((item, key) => {

                                    return (
                                          <>

                                                <div className="card" key={key} style={{ width: '18rem' }}
                                                      onClick={(e) => {
                                                            setSelecttype(item)
                                                      }}

                                                >
                                                      <div className="card-body">
                                                            <Link to={`${item?.name}`}>
                                                                  <h5 className="card-title"> {item?.name}</h5></Link>

                                                            <a href="/#" className="card-link">Card link</ a>
                                                      </div>
                                                </div>


                                          </>
                                    )
                              })
                        }

                  </>)}

            </div>
      )
}

export default Homepage
