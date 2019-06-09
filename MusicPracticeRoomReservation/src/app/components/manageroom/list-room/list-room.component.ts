import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room/room.service';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  rooms : Array<Room>
  banner_room : Array<string> =[]

  constructor(private roomservice : RoomService) { }

  ngOnInit() {
    this.roomservice.getAllRoom().subscribe((res: any) => {
      res.forEach(res => {
        this.roomservice.getImgName(res.id, "b").subscribe(async (imgname_res: any) => {
          await this.banner_room.push('http://localhost:8081/room/img/' + imgname_res[0].name_img)
        })
        // setTimeout(() => {

        // }, 1000);
      });
      this.rooms = res;
    });
  }

}
