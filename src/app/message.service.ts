/* Angular Imports */
import { Injectable } from '@angular/core';

/* Decorator */
@Injectable({
  providedIn: 'root'
})

/* Class */
export class MessageService {

  /* Properties */
  messages: string[] = []; //Cache de mensajes

  /* Constructor */
  constructor() { }

  /* Methods */
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
