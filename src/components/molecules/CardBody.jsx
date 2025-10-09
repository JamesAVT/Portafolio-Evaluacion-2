import React from 'react';
import Text from '../atoms/Text';

function CardBody({ title, description, link, tecnologias }) {
 return (
   <>
     <Text variant="h5">{title}</Text>
     <Text variant="p">{description}</Text>
     <Text variant="p">{link}</Text>
     <Text variant="p">{tecnologias}</Text>
     <Text variant="span" className="text-muted">
     </Text>
   </>
 );
}

export default CardBody;
