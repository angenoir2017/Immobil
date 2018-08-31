import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   items:any = [];
   key:string ='items';
   url: string;
   data: Observable<any>;
   isSearchbarOpened = false;

  constructor(public navCtrl: NavController,
              public storage:Storage,
              public http: HttpClient) {
     this.url = 'https://jsonplaceholder.typicode.com/photos';

    // this.loadData();
  }
//Partie de manipulation de donnee
  //Ici nous obtenons les objets a afficher via l'api
  getData(){
    this.data = this.http.get(this.url);
      this.data.subscribe(resultat =>{
          this.items = resultat;
        this.saveData();
              });
  }

  //Sauvegarde de donnee dans la base de donnee.
  saveData(){
    this.storage.set(this.key, JSON.stringify(this.items));
  }


  //Lecture des donnees dans la base de donnee
  loadData(){
    this.storage.get(this.key).then((val) =>{
      if(val!=null && val !=undefined){
        this.items =JSON.parse(val);
      }else{
        try {
          this.getData();
        } catch (e){
          console.log("la connexion est inactive");
          console.log(e);
        }
      }
     }
     );
  }
  //Pour la recherche depuis la bar de recherche
  //Les parametres serons vu apres
  onSearch(event){
    console.log(event.target.value);
  }
  //Si l'utilisateur click il es dirige vers la page detail
  //avec envoie de l'item clicke
  voirDetail(item){
      this.navCtrl.push('DetailPage', item);

  }
  //Pour le scroll infini
  doInfinite(infiniteScroll) {
    //On recupere les infos sur ce url
    this.data = this.http.get(this.url);
    //On souscrit pour les donnees
    this.data.subscribe(data => {
      //ici apres la reception des donnees on limite la quantite pour scroller a l'infini le reste
        this.items = this.items.concat(data);
        //On scroll
      infiniteScroll.complete();
    });
  }
  doRefresh(refresher){
    //On recupere les infos sur ce url
    this.data = this.http.get(this.url);
    this.data.subscribe(data=>{
      this.items = data;
      refresher.complete();
    });
  }

}
