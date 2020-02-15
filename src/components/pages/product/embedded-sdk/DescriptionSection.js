import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import embeddedGraphics from '../../../../assets/product/subpage-cloud-diagram.svg';
import Heading from '../../../Heading';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';

const DescriptionSection = () => {
  return (
    <DefaultGridSection
      image={embeddedGraphics}
      direction="imageOnRight"
      id="content"
    >
      <Heading as="h2">
        The Embedded SDK is written in C and tuned for small devices.
      </Heading>
      <Text>
        Cloud applications can easily connect, authenticate, and trust data exchange with
        your embedded-scale hardware including:
      </Text>
      <CheckedListItem>
        Processors with secure enclaves
      </CheckedListItem>
      <CheckedListItem>
        Microcontroller boards equipped with cryptographic security elements
      </CheckedListItem>
      <CheckedListItem>
        Trusted platform modules (TPM)
      </CheckedListItem>
    </DefaultGridSection>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
