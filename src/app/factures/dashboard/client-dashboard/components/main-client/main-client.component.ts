import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-client',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main-client.component.html',
  styleUrl: './main-client.component.css'
})
export class MainClientComponent {

  isLeftSidebarCollapsed = input.required<boolean>()
  screenWidth = input.required<number>();

  sizeClass = computed(() =>{
    const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
    if(isLeftSidebarCollapsed){
      return '';
    }
    return this.screenWidth() > 768 ? 'body-trimmed' : 'body-cm-screen';
  });

}
