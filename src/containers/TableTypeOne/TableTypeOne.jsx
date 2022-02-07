import React from 'react';
import DetailTable from './DetailTable/DetailTable';
import wallets from './data/data';

import styles from './TableTypeOne.css';

export default class TableTypeOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* const { */
    /*   wallets, */
    /*   selectedWallet, */
    /* } = data; */

    console.log('wallets[0]', wallets[0]);
    return (
      <div>
        <p className={ styles.detailHeader }>Details</p>
        <div className={ styles.detailWrapper } >
          {wallets.length &&
            <DetailTable
              wallet={ wallets[0].wallet }
              balanceEntries={ wallets[0].balanceEntries }
            />
          }
        </div>
      </div>
    );
  }
}


