import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients:Client[]=[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(){
    this.clientService.getAll().subscribe((response:Client[])=>{

      this.clients = response;
    })
  }

}
