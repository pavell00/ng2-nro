import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService, Topic} from '../shared';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topics: Topic[];
  selectedTopic: Topic;

  constructor(
    private route: ActivatedRoute,
    private service: SpeakersService
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: {id: string}) => {
      this.topics = this.service.getTopicBySpeakerID(params.id);
    });
  }

  onSelect(t: Topic){
    this.selectedTopic = t;
  }

}
