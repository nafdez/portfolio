import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListCardComponent } from "./components/list-card/list-card.component";
import { BentoComponent } from './components/bento/bento.component';
import { BentoCardComponent } from './components/bento-card/bento-card.component';
import { BtnPicComponent } from './components/btn-pic/btn-pic.component';

@NgModule({
  declarations: [ListCardComponent, BentoComponent, BentoCardComponent, BtnPicComponent],
  imports: [CommonModule],
  exports: [ListCardComponent, BentoComponent, BentoCardComponent, BtnPicComponent],
})
export class SharedModule {}
