import { memo, ReactNode, VFC } from "react";

import { GridItem, Image, Stack } from '@chakra-ui/react'
import { TargetMediaData } from "../../../types/api/acount";

type Props = {
  postData: TargetMediaData
};

export const PhotoCard: VFC<Props> = memo((props) => {
  const { postData } = props;
  return (
    <>
    <Stack spacing={3}>
      <GridItem w={ [128, 240, 240, 293] } h={ [128, 240, 240, 293] } bg='blue.500'>
        <Image 
          boxSize="100%"
          src={typeof postData.thumbnail_url !== 'undefined' ? postData.thumbnail_url: postData.media_url}
          alt={postData.id}
        />
      </GridItem>
    </Stack>
    </>
  );
});
