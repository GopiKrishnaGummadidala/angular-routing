import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "../message.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent {
  get messages() {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService, private router: Router) {}

  close(): void {
    // Close the popup.
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
}
