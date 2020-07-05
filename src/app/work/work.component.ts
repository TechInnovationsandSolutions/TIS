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
      work_showcase:'https://res.cloudinary.com/dv1dxey5w/image/upload/v1593985462/Capture_jh3e6y.png',
      work_desc: "Sophies Bath and Body is a digital web and app-based purchasing platform for Sophies beauty products. Sophies bath and body website makes it easy for its customers to purchase products at any time, and as soon as new products are launched.",
      url: 'https://sophiesbathandbody.com/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
