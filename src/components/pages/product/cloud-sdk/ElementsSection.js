import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import Heading from '../../../Heading';
import FeaturesCardGrid from '../../FeaturesCardGrid';
import PlaceholderIcon from 'emotion-icons/boxicons-regular/CodeCurly';
import { ReactComponent as CodeIcon } from '../../../../assets/core-icon.svg';
import { ReactComponent as VaultIcon } from '../../../../assets/vault-icon.svg';
import { ReactComponent as TransferIcon } from '../../../../assets/transfer-icon.svg';

const features = [
  {
    title: 'Cloud Core SDK',
    icon: CodeIcon,
    description:
      'The core functionality and protocols for Ockam are in the Core SDK. The Core creates interfaces to easily plug in Vaults and Transports to complete the Cloud SDK.',
  },
  {
    title: 'Vault',
    icon: VaultIcon,
    description:
      'Vaults are adaptors that allow any Hardware Security Modules to interface the Ockam Core. Store Ockam identifiers in cloud based HSMs.',
  },
  {
    title: 'Transport',
    icon: TransferIcon,
    description:
      'Transports are adaptors that allow any transport to interface with the Ockam Core. Pick from TCP and UDP.',
  },
];

const ElementsSection = () => {
  return (
    <PageSection>
      <Heading as="h2" mb={5} textAlign="center">
        {' '}
        Elements of the Ockam Cloud SDK
      </Heading>
      <FeaturesCardGrid features={features} />
    </PageSection>
  );
};

ElementsSection.propTypes = {};

export default ElementsSection;
