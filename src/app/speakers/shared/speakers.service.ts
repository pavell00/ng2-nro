import { Injectable } from '@angular/core';
import { Speaker } from './';
import { Topic } from './';

@Injectable()
export class SpeakersService {
  private speakers: Speaker[] = [
    {id: 1, name: 'Luke Ruebbelke', src: 'luke.jpg', bio: 'Co-Founder of @UltimateAngular. Developer. Hacker. Community backer. Author and blogger. Console logger.'},
    {id: 2, name: 'Todd Motto', src: 'todd.jpg', bio: 'Developer Advocate @Telerik / @ProgressSW. Co-founder @UltimateAngular. Author. Developer Expert @google. Lesser half of @RachaelLPurser. @ken_wheeler advocate.'},
    {id: 3, name: 'Gleb Bahmutov', src: 'gleb.jpg', bio: 'JavaScript ninja, image processing expert, software quality fanatic'},
    {id: 4, name: 'Jeff Whelpley', src: 'jeff.jpg', bio: 'CTO @gethumancom, Google Developer Expert (GDE), Host of @AngularAir, Boston Angular Meetup Co-organizer, Boston College \'00, ♥ Red Sox'},
    {id: 5, name: 'Pascal Precht', src: 'pascal.jpg', bio: 'I like headphones, art, skateboarding and coding. Angular GDE at @Google, @thoughtram co-founder and creator of @5thingsAngular'},
    {id: 6, name: 'Victor Savkin', src: 'victor.jpg', bio: 'Mr. Rogers of JavaScript. Victor makes Angular. He also toys with eclectic programming technologies and obsesses over fonts and keyboard layouts.'}
  ];

  private topics: Topic[] = [
    {spk_id: 1, title: 'win10', duration: 20},
    {spk_id: 1, title: 'Angular JS', duration: 40},
    {spk_id: 2, title: 'Angular 2', duration: 60},
    {spk_id: 2, title: 'Node JS', duration: 30},
    {spk_id: 3, title: 'Bootstrap 4', duration: 20},
    {spk_id: 4, title: 'FlexBox', duration: 25},
    {spk_id: 4, title: 'JavaScript 2016', duration: 50},
    {spk_id: 5, title: 'WebPack', duration: 60}
  ]

  constructor() { }

  getSpeakers() {
    return this.speakers;
  }

  getSpeakerByID(id) {
    return this.speakers.find(speaker => speaker.id === Number(id));
  }

  getTopicBySpeakerID(id) {
    return this.topics.filter(topic => topic.spk_id === Number(id));
  }  
}
