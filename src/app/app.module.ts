import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SaldoComponent } from './components/dashboard/saldo/saldo.component';
import { OperacoesComponent } from './components/dashboard/operacoes/operacoes.component';
import { EstratoComponent } from './components/dashboard/estrato/estrato.component';
import { PerfilComponent } from './components/dashboard/saldo/perfil/perfil.component';
import { BoxComponent } from './shared/box/box.component';
import { CurrencyBoxComponent } from './components/dashboard/saldo/currency-box/currency-box.component';
import { CupomComponent } from './components/dashboard/operacoes/cupom/cupom.component';
import { TableComponent } from './components/dashboard/estrato/table/table.component';
import { DepositarComponent } from './components/dashboard/operacoes/depositar/depositar.component';
import { ResgatarComponent } from './components/dashboard/operacoes/resgatar/resgatar.component';
import { OperationBoxComponent } from './components/dashboard/operacoes/operation-box/operation-box.component';
import { PaginationComponent } from './components/dashboard/estrato/pagination/pagination.component';
import { LineComponent } from './shared/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SaldoComponent,
    OperacoesComponent,
    EstratoComponent,
    PerfilComponent,
    BoxComponent,
    CurrencyBoxComponent,
    CupomComponent,
    TableComponent,
    DepositarComponent,
    ResgatarComponent,
    OperationBoxComponent,
    PaginationComponent,
    LineComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
