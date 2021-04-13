import { RouterModule, Routes } from "@angular/router";
import { MessageComponent } from "./message/message.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
const routes: Routes = [
  {
    path: "messages",
    component: MessageComponent,
    outlet: "popup",
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MessageComponent],
})
export class MessagesModule {}
