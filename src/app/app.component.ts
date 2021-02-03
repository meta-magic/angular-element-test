import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  elementJson  :   any ;
  constructor(){
    this.elementJson = '{\"Number of declared Professional Qualification\": \"1\",\"RuleVarience\": [\"Professional_123\", \"123\", \"pl\"],\"Expected Data\": [{\"Field\": \"Component Name\",\"Value\": \"Professional\"}, {\"Field\": \"Sub Component Name\",\"Value\": [\"Professional (Highest Qualification)\"]}, {\"Field\": \"documentSource\",\"Value\": [\"BVF\", \"bvf\"]}, {\"Field\": \"documentSection\",\"Value\": []}, {\"Field\": \"Include Professional Qualification Type\",\"Value\": []}, {\"Field\": \"Exclude Professional Qualification Type\",\"Value\": [\"Trainings\", \"Seminars\", \"Language Proficiency\", \"Courses\"]}, {\"Field\": \"Count of Professional Qualification\",\"Value\": [\"1\"]}, {\"Field\": \"CompletedPursuing\",\"Value\": []}, {\"Field\": \"OneofdeclaredCourseType\",\"Value\": []}]}';
  }

  elementRuleData(elementData: any){
    console.log(elementData);
  }
}
