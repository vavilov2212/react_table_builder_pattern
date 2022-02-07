import * as React from 'react';

import styles from './DetailTable.css';

class DetailTable extends React.PureComponent {
  render() {
    console.log('this.props', this.props);
    const {
      wallet: {
        ravanaServerId,
        walletId,
        walletTag,
        transportId,
        id,
        clientId,
      },
      balanceEntries
    } = this.props;

    return (
      <table className={styles.table}>
        <tbody>
          { this.renderRow('Wallet ID', walletId) }
          { balanceEntries && balanceEntries.map(({ currency, amount }) => (
            this.renderRow(`${currency} Balance`, amount)
            ))
          }
          { this.renderRow('ID', id) }
          { this.renderRow('Client ID', clientId) }
          { this.renderRow('Ravana server ID', ravanaServerId) }
          { this.renderRow('Transport', transportId) }
          { this.renderRow('Wallet Tag', walletTag) }
        </tbody>
      </table>
    );
  }

  renderRow(label, value, keyID) {
    console.log('styles', styles);
    return (
      <tr className={styles.tableRow} key={keyID}>
        <td className={styles.tableCell}>{ label }</td>
        <td className={styles.tableCell}>{ value }</td>
      </tr>
    );
  }
}

export default DetailTable;
