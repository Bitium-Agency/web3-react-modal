
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# @bitiumagency/web3-react-modal
@Web3-react's plugin to display modal

NOTE THAT THIS PLUGIN IS COMPATIBLE WITH [@WEB3-REACT V6](https://github.com/NoahZinsmeister/web3-react/tree/v6)

(we will update this plugin as soon as @web3-react V8 officially released)

## Features

 - Display modal with as little code as possible
 - Multi-Chain support
 - Support all [@web3-react connectors](https://github.com/NoahZinsmeister/web3-react/tree/v6/docs/connectors)
 - Keep user connected when the page is refreshed (Metamask)
 - Add the network when user’s provider doesn’t have it


Note : all @web-react features are still the same, such as useWeb3React hook and so on.

## When should I use @bitiumagency/web3-react-modal?

If you are using @web3-react v6  in your project and you want to allow the user to select the desired provider without the need for additional code, this package can come in handy.

## Usage
Add it to your project: (note that @web-react/core must be pre-installed in your project)

    npm i @bitiumagency/web3-react-modal
Add  `Web3ReactModal` component to your react Dapp:

    <Web3ReactModal
	    useWeb3React={}
	    supportedChains={}
	    connectors={} //optional
	/>
And then call connect function from useWeb3ReactModal hook whenever you want :

    const {connect} = useWeb3ReactModal()
    function handleButtonClick() {
	    connect();
    }

#### Props
###### useWeb3React
    useWeb3React = Import directly from @web3-react and add it to this prop
##### supportedChains
    supportedChains = list of supported chains
    interface {
	    chainId:  number;
	    name?:  string; //These values are used when the network needs to be added
	    rpcUrl?:  string;
	    nativeCurrency?: {
		    name:  string;
		    decimals:  number;
		    symbol:  string;
	    };
    }
##### connectors

    connectors = list of connectors
    //Metamask is added by default
    interface {
	title:  String;
	id:  String; //id is unique
	logo?:  React.ReactNode;
	connector:  any; //import directly from connector package and add it to this prop
	options:  Object; //connector options
	}
if you use these values ```(walletconnect - authereum - fortmatic - frame - portis - injected - ledger - trezor)``` for ```id``` you don't need to use the ```logo``` prop.

## Example
To run the examples, switch to the `example` directory. Then, simply run `yarn install` to install, and `yarn start` to run the example on `localhost:3000`.

## Contributing
Contributions are always welcome, no matter how large or small.



<!-- 
## Example

#### [Online example](#)
#### [Link to article](#)
		
<br/>
<br/> -->


----
this package is a part of Bitium Agency's contribution to the industry!
