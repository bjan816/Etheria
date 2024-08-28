// https://eth-sepolia.g.alchemy.com/v2/CkJl0aTpf7_xYwKiaSzV3crtevtXjdVe

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/CkJl0aTpf7_xYwKiaSzV3crtevtXjdVe',
      accounts: ['741f0f8f40c87b3c0e4db024a0c14711b8ba71f60c7d3cc2abff59a3dc9d3251']
      // To change the account, go to Account details and show & copy the private key.
    },
  }
};
