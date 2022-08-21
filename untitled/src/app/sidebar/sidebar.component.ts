import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  status: boolean = false;
  //Sidebar opne
  clickEvent(){
    this.status = true;
  }
  //Sidebar close
  clickEvent2()
  {
    this.status = false;
  }

}
