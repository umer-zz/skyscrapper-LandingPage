import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const Swiper: any

interface service {
  index: number, data: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  ngOnInit(): void {
    for (let index = 1; index < 10; index++) {
      this.services.push({ index: index, data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.' })

    }
  }
  services: service[] = [{ index: 0, data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.' }]
  activeTab: service = this.services[0]
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 16,
      freeMode: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
      breakpoints: {
        1500: {
          slidesPerView: 4,
        },
        1920: {
          slidesPerView: 4.5,
        },
      }
    });
  }
  selectTab(item: service) {
    this.activeTab = item
  }
}
