import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {ArticlesProvider} from "../../providers/articles/articles";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   items:any = [];
   operation:any;
   isSearchbarOpened = false;
   //
  public objaVendres :any=['Maison','Appartement','Terrain'];

  public objaLouers :any=['Maison','Appartement','Magazin'];

  public articles: any =[];
  public aLouer: any =[];
  public aVendre: any =[];
  buttonacheter :boolean = false;
buttonlouer:boolean = false;

    constructor(public navCtrl: NavController,
              public http: HttpClient,
                private articleProvider:ArticlesProvider
              ) {

    }
  showData(){
    this.navCtrl.push('AddArticlePage');
  }


    aVendresegment(select){

      if(select=="Appartement"){
        this.softArticle(select._value);

      }if(select=="Maison"){
        this.softArticle(select._value);

      }else {

        this.softArticle(select._value);
      }
}
  aLouersegment(select){

    if(select=="Appartement"){

      this.softArticle(select._value);
    }if(select=="Maison"){
      this.softArticle(select._value);

    }else {

      this.softArticle(select._value);
    }
  }


    softArticle(select){
      if(select=="acheter"){
        this.getAvendre();
        this.articles = this.aVendre;
      } else {
        this.getAlouer();
        this.articles = this.aLouer;
      }
    }
//Partie de manipulation de donnee
  //Ici nous obtenons les objets a afficher via l'api
getAlouer(){
    this.articleProvider.getAlouer().subscribe(data=>{
      this.aLouer = data;
    },err =>{
      console.log('echec lors du chargement du servive',err);
    });
  }
  getAvendre(){
    this.articleProvider.getAvendre().subscribe(data=>{
      this.aVendre = data;
    },err =>{
      console.log('echec lors du chargement du servive',err);
    });
  }

  //Si l'utilisateur click il es dirige vers la page detail
  //avec envoie de l'item clicke
  voirDetail(select){
if (select =='acheter')
{ this.buttonacheter = true;
  this.navCtrl.push('DetailPage', {
    param1: this.buttonlouer,
    param2: this.buttonacheter

  });}else{
  this.buttonlouer = true;
  this.navCtrl.push('DetailPage', {
    param1: this.buttonlouer,
    param2: this.buttonacheter

  });

}


  }


  //Pour la recherche depuis la bar de recherche
  //Les parametres serons vu apres
  /*onSearch(event){
    console.log(event.target.value);
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
  */

}
