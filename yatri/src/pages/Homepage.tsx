import React, { useEffect, useState } from 'react'
import { MainApiProtectedVersion } from '../utils/axios/requests'

function Homepage() {

      const [variousType, setVarioustype] = useState()
      const [selectType, setSelecttype] = useState()

      console.log('====================================');
      console.log(selectType);
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
            <div className='container'>
                  {selectType != null && (<>
                        {selectType?.name}</>)}





                  {variousType != null && (<>
                        {
                              variousType['en']['feeds'].map((item, key) => {

                                    return (
                                          <>

                                                <div className="card" key={key} style={{ width: '18rem' }}
                                                      onClick={(e) => {
                                                            setSelecttype(item)
                                                      }}

                                                >
                                                      <div className="card-body">
                                                            <h5 className="card-title"> {item?.name}</h5>

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
