import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  slideIndex = 0;
  slideDuration = 5000; // in milliseconds
  sliderContents:any[] = [
      {
          title: 'Research',
          content: 'We analyze and study  the project so  we can understand the needs of each client.',
          src: 'assets/images/our-work-research-analysis -1.png'
      },
      {
          title: 'Information Architecture',
          content: 'We interiorize and conceptualize the project   to organize the information and define the structure.',
          src: 'assets/images/our-work-information-architecture 1.png'
      },
      {
          title: 'User Experience (UX)',
          content: 'We study the user’s interactions and perceptions to guarantee a satisfactory experience.',
          src: 'assets/images/our-work-ui-ux.png'
      },
      {
          title: 'Interface Design (UI)',
          content: 'We believe the shape and content go together through the inspiration, creativity, detail and interaction.',
          src: 'assets/images/our-work-ui-interface.png'
      },
      {
          title: 'Development',
          content: 'Our methodology is centered in the use of advanced tools to accomplish an optimal result and a solid product.',
          src: 'assets/images/our-work-development.png'
      }
  ];
  selectedSliderContent = this.sliderContents[0];
  setIntervalFn;

  constructor() { }

  ngOnInit(): void {
    this.setIntervalFn = setInterval(()=> {
      this.showSlides()
    }, this.slideDuration);
  }

  setCurrentSlideContent(i: number) {
    i = i ? i : 0;
    this.selectedSliderContent = this.sliderContents[i];
  }

  showSlides() {
    this.slideIndex++;
    if (this.slideIndex > this.sliderContents.length - 1) {this.slideIndex = 0}
    this.setCurrentSlideContent(this.slideIndex);
  }

  ngOnDestroy() {
    if (this.setIntervalFn) {
      clearInterval(this.setIntervalFn);
    }
  }
}
