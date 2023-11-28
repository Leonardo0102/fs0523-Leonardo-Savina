import { Injectable } from '@angular/core';
import { Iposts } from './Models/iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:Iposts[]=[
  {
  "id":0 ,
  "body":"lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur adip sapien vado erat, sed diam  djl edije ddjedj",
  "title":"winter",
  "active":true
  },
  {
    "id":1 ,
    "body":"lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur adip sapien vado erat, sed diam  djl edije ddjedj",
    "title":"winter",
    "active":true
    },
    {
      "id":2 ,
      "body":"lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur adip sapien vado erat, sed diam  djl edije ddjedj",
      "title":"winter",
      "active":true
      },
      {
        "id":3 ,
        "body":"lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur adip sapien vado erat, sed diam  djl edije ddjedj",
        "title":"winter",
        "active":true
        },
        {
          "id":4,
          "body":"lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur adip sapien vado erat, sed diam  djl edije ddjedj",
          "title":"winter",
          "active":true
          },
];
}
