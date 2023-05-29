import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnketSayfasiComponent } from './anket-sayfasi/anket-sayfasi.component';
import { AnketGonderComponent } from './anket-gonder/anket-gonder.component';
import { AnketSonuclariComponent } from './anket-sonuclari/anket-sonuclari.component';
import { AnketDetayComponent } from './anket-detay/anket-detay.component';

const routes: Routes = [{ 
  path: 'anket-sayfasi', component: AnketSayfasiComponent },
{ path: 'anket-gonder', component: AnketGonderComponent },
{ path: 'anket-sonuclari', component: AnketSonuclariComponent },
{ path: '', redirectTo: 'anket-sayfasi', pathMatch: 'full' },
{ path: 'anket-sayfasi/:id', component: AnketDetayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
