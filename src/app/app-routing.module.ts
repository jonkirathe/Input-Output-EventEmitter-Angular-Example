import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Using @Input @Output And EventEmitter'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
