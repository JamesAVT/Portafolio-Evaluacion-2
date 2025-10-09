import React from "react";
import Text from "../atoms/Text";

function NoticiaCard({ title, description, link }) {
 return (
   <>
     <Text variant="h5">{title}</Text>
     <Text variant="p">{description}</Text>
     <Text variant="p">{link}</Text>
     <Text variant="span" className="text-muted">
     </Text>
   </>
 );
}

export default NoticiaCard;