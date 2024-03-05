import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListCardComponent } from "./components/list-card/list-card.component";
import { BentoComponent } from './components/bento/bento.component';
import { BentoCardComponent } from './components/bento-card/bento-card.component';

@NgModule({
  declarations: [ListCardComponent, BentoComponent, BentoCardComponent],
  imports: [CommonModule],
  exports: [ListCardComponent, BentoComponent, BentoCardComponent],
})
export class SharedModule {}
