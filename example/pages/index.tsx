import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import ClvWalletCard from '../components/connectorCards/ClvWalletCard'
import NetworkCard from '../components/connectorCards/NetworkCard'
import WalletConnectV2Card from '../components/connectorCards/WalletConnectV2Card'
import ProviderExample from '../components/ProviderExample'

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <ClvWalletCard />
        <MetaMaskCard />
        <WalletConnectV2Card />
        <CoinbaseWalletCard />
        <NetworkCard />
        <GnosisSafeCard />
      </div>
    </>
  )
}
