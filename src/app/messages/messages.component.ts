/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { MessageService } from '../message.service';

/* Decorator */
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

/* Class */
export class MessagesComponent implements OnInit {

  /* Constructor */
  constructor(public messageService: MessageService) { } //messageService es pública porque haremos binding de la propiedad en el template

  ngOnInit(): void {
  }

}
