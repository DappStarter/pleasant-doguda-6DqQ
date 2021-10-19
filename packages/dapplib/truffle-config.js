require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain mistake guess private blue genre'; 
let testAccounts = [
"0x057426a74342ad976bb32d5cdc966203f7643ab2e1bfb765029900c85cf46b9a",
"0x82f640f29833281bfa4b48f0c298268cb3e073fa8155701310140dea4e522105",
"0xfaa8e83bc3f02ff55be514502a9c939c565b3f4e14839597f907d5ddcb6fdb30",
"0xb92dce35a5265dda7487ad77575cc919468bec74417f46dcb2afe3005b546074",
"0xa99f6b18cb8e9ba5b85bb8f03ab47b2e72dd827bfd5b3f4c1811220c64b32915",
"0x3ca447e7b1225f82919dafd69ab4dd73f71534dae33f1aa16550c3155b7c363a",
"0xe813eec6b87d065bfe96f6dbf5c5bfdde71bb5d5f695e5378492624f6a952027",
"0x76a0545781815074f4a01db66e069ec075519dc45393b5d1c39fef32deccb27d",
"0x6c12e18c9fd6bae9371d4e3909b6d2a624ced6e5b6038341834e320a03734107",
"0x32a836e5a3344870f855a19a7551b54571777a13d110a60acf66c3532c73d46e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

