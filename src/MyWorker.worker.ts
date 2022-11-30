import EthCrypto from "eth-crypto"
import Web3 from "web3"

declare const self: DedicatedWorkerGlobalScope;
export default {} as typeof Worker & { new (): Worker };

console.log(Web3.name)

//Test that it's possible to import external library other than Web3 in the worker thread
console.log('eth public key: ' + EthCrypto.publicKeyByPrivateKey('8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f'))

// create long looping function to test that worker thread is actually running
 for (let index = 0; index < 500000000; index++) {
    Math.random()
 }


console.log('[MyWorker] Running.');

self.addEventListener('message', (event: MessageEvent): void => {
  console.log('[MyWorker] Incoming message from main thread:', event.data);
});
