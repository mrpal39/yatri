import React from 'react'
import { Card } from 'react-bootstrap';

function VehicleTypes(props) {
      const { data } = props
      console.log(data);

      return (
            <div className='row'>
                  <h2>Vehicle Types </h2>

                  {data?.vehicle_types.map((e) => {
                        return (
                              <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                          <Card.Title>{e.form_factor}</Card.Title>
                                          <Card.Subtitle className="mb-2 text-muted">{e.propulsion_type}</Card.Subtitle>

                                    </Card.Body>
                              </Card>

                        )
                  })}

            </div>
      )
}

export default VehicleTypes