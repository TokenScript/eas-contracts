import { ethers } from 'ethers';

const {
  constants: { AddressZero }
} = ethers;

export enum DeploymentNetwork {
  Mainnet = 'mainnet',
  ArbitrumOne = 'arbitrum-one',
  Sepolia = 'sepolia',
  Hardhat = 'hardhat',
  Tenderly = 'tenderly',
  AuroraTestnet = 'aurora-testnet'
}

export const ZERO_ADDRESS = AddressZero;
export const ZERO_BYTES = '0x';
export const ZERO_BYTES32 = '0x0000000000000000000000000000000000000000000000000000000000000000';

export const NO_EXPIRATION = 0;
