import React from 'react'
import { Button, Card } from 'react-bootstrap';

function Systeminformation(props: Props) {
      const { data } = props
      console.log('====================================');
      console.log(data);
      console.log('====================================');

      return (
            <div>
                  <Card>
                        <Card.Header as="h5">      {data?.name}
                        </Card.Header>
                        <Card.Body>
                              <Card.Title> {data?.timezone}</Card.Title>
                              <Card.Text>
                                    phone Number:{data?.phone_number}
                              </Card.Text>
                              <Button href={data?.url} >chec</Button>
                        </Card.Body>
                  </Card>

            </div>
      )
}

export default Systeminformation
