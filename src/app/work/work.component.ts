import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  works = [
    {
      logo: 'https://res.cloudinary.com/dv1dxey5w/image/upload/v1593467529/TIS/output-onlinepngtools_1_1_cd1nzg.png',
      name: 'Sophie’s',
      work_type: "Web Application",
      work_showcase:'https://res.cloudinary.com/dv1dxey5w/image/upload/v1593467530/TIS/Group_3_1_dgfjfr.png',
      work_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Eu, sagittis sit posuere cursus. Proin ac cursus mauris, dictum. Id faucibus netus sed dolor sapien ullamcorper. ",
      url: 'https://sophiesbathandbody.com/'
    },
    {
      logo: 'https://res.cloudinary.com/dv1dxey5w/image/upload/v1593467529/TIS/output-onlinepngtools_1_1_cd1nzg.png',
      name: 'Sophie’s',
      work_type: "Web Application",
      work_showcase:'https://res.cloudinary.com/dv1dxey5w/image/upload/v1593467530/TIS/Group_3_1_dgfjfr.png',
      work_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Eu, sagittis sit posuere cursus. Proin ac cursus mauris, dictum. Id faucibus netus sed dolor sapien ullamcorper. ",
      url: 'https://sophiesbathandbody.com/'
    },
    {
      logo: 'https://res.cloudinary.com/dv1dxey5w/image/upload/v1593467529/TIS/output-onlinepngtools_1_1_cd1nzg.png',
      name: 'Sophie’s',
      work_type: "Web Application",
      work_showcase:'https://res.cloudinary.com/dv1dxey5w/image/upload/v1593467530/TIS/Group_3_1_dgfjfr.png',
      work_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Eu, sagittis sit posuere cursus. Proin ac cursus mauris, dictum. Id faucibus netus sed dolor sapien ullamcorper. ",
      url: 'https://sophiesbathandbody.com/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
