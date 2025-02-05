import { Component } from '@angular/core';

type Transaction = {
  date: string;
  amount: string;
  balance: string;
  additionalInfo: string;
  type: string;
};

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  transactions: Transaction[] = [
    {
      date: '27/07/2023, 10:53',
      amount: '+T$50 TradeCoins',
      balance: 'T$1.257',
      additionalInfo: 'T$ Diário - 76',
      type: 'Recompensa diária',
    },
    {
      date: '27/07/2023, 10:53',
      amount: '-R$25 reais',
      balance: 'R$40,00',
      additionalInfo: 'Conta Safe 20',
      type: 'Abertura Conta Safe',
    },
    {
      date: '27/07/2023, 10:53',
      amount: '+R$50 reais',
      balance: 'R$40,00',
      additionalInfo: 'Conta Safe 20',
      type: 'Premiação Conta Safe',
    },
    {
      date: '27/07/2023, 10:53',
      amount: '+T$50 TradeCoins',
      balance: 'T$1.257',
      additionalInfo: 'T$ Diário - 76',
      type: 'Recompensa diária',
    },
    {
      date: '27/07/2023, 10:53',
      amount: '-R$25 reais',
      balance: 'R$40,00',
      additionalInfo: 'Conta Safe 20',
      type: 'Abertura Conta Safe',
    },
    {
      date: '27/07/2023, 10:53',
      amount: '+R$50 reais',
      balance: 'R$40,00',
      additionalInfo: 'Conta Safe 20',
      type: 'Premiação Conta Safe',
    },
  ];

  isPositive(index: number) {
    const positive = this.transactions[index].amount.charAt(0) === '+';
    return positive ? 'positive' : 'negative';
  }
}
