require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush strong rival prefer purity hundred light army giant'; 
let testAccounts = [
"0x6ddd5bd6ecb97cef3d71883cc9a020d96326888689daf21a5421682d8dd4c6f5",
"0xb7b3502c388a8410985fd782ca9cc375d39196bea03ab325c788475d84e8105d",
"0x4c2d08cb3b1fe4c3a878c35bae9ea1ea9897d4f9b305104351fdfb69cf9f641d",
"0x43aa54f0e4fc72561e6ff3dc2d9d51f3a10526714994dd65aac4370bcc9f4d34",
"0xffdf5fc733b2bbbb4da98dc8548731824a2a7079939bc0bfe94459e0c176f572",
"0x107de7da563ec47a8c542bacbefe70082909edecaf5c55767c7305399aead063",
"0x962db2878a0182dd3c99c314d355937d99cdc1f2e7f72c7d7ed91fbe87cc4730",
"0x2288e66563df6c2bb6ad9faa0e90303ab10a317c742f5732b0361ffb2e242f03",
"0x45d5761597271350569a2d37ea0c8176e451762417fff5b69d33a1771c6d16c4",
"0x58486b99f56a686afaeacf3bca8d48fc283956f07359730474c59436ce7ffc8f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


