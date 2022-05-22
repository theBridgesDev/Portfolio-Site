// Import Assets
import bridges from '../assets/bridge.png';
import coinflip from '../assets/coinflip.png';
import gasfee from '../assets/gasfee.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Bridges Token</h3>
                    <img src={bridges} alt="Bridges Token" />
                    <p>ERC20, ERC223 cryptocurrency with a maximum supply of
                    1337 AIP tokens.
                    </p>

                    <a href="https://ropsten.etherscan.io/address/0x90f60831dabcd45e64d563607b87f638def6c2ad" target="_blank" className="button">Site</a>
                    <a href="https://github.com/theBridgesDev/SmartContracts/tree/main/BridgesToken" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Coin Flip Game</h3>
                    <img src={coinflip} alt="Coin Flip Game" />
                    <p>Flip a coin and guess a side! Guess correctly and win
                    some Eth!
                    </p>

                    <a href="https://ropsten.etherscan.io/address/0xCC038db060c7e3DD32376AdF4c98128c10B424bc" target="_blank" className="button">Site</a>
                    <a href="https://github.com/theBridgesDev/SmartContracts/tree/main/CoinFlip" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>How Much Gas</h3>
                    <img src={gasfee} alt="How Much Gas" />
                    <p>See how much gas fees you have spent on Ethereum!
                    </p>

                    <a href="https://github.com/theBridgesDev/Web3/tree/main/GasFees" target="_blank" className="button">Site</a>
                    <a href="https://github.com/theBridgesDev/Web3/tree/main/GasFees" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
