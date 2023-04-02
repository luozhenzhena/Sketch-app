import Vue from 'vue';
import VueRouter from 'vue-router';
import Begin from '../Views/Begin';
import HOME from '../Views/HOME';
import WORK from "../Views/WORK";
import Information from "../Views/Information";
import Material from "../Views/Material";
import Sketch from "../Views/Sketch";
import Rpicture from "../Views/Rpicture";
import Useting from "../Views/Useting";
import CacheSet from "../Views/CacheSet";
import Clean1 from "../Views/Clean1";
import Clean12 from "../Views/Clean12";
import Clean2 from "../Views/Clean2";
import Clean22 from "../Views/Clean22";
import Quit from "../Views/Quit";
import Quit2 from "../Views/Quit2";

Vue.use(VueRouter);

export default new VueRouter({

  routes: [
    {path: '/',name: 'Begin', component: Begin},
    {
      path: '/HOME',
      name: 'HOME',
      component: HOME},
    {
      path: '/Begin',
      name: 'Begin',
      component: Begin},
    {
      path: '/WORK',
      name: 'WORK',
      component: WORK},
    {
      path: '/Information',
      name: 'Information',
      component: Information},
    {
      path: '/Material',
      name: 'Material',
      component: Material},
    {
      path: '/Sketch',
      name: 'Sketch',
      component: Sketch},
    {
      path: '/Rpicture',
      name: 'Rpicture',
      component: Rpicture},
    {
      path: '/Useting',
      name: 'Useting',
      component: Useting},
    {
      path: '/CacheSet',
      name: 'CacheSet',
      component: CacheSet},
    {
      path: '/Clean1',
      name: 'Clean1',
      component: Clean1},
    {
      path: '/Clean12',
      name: 'Clean12',
      component: Clean12},
    {
      path: '/Clean2',
      name: 'Clean2',
      component: Clean2},
    {
      path: '/Clean22',
      name: 'Clean22',
      component: Clean22},
    {
      path: '/Quit',
      name: 'Quit',
      component: Quit},
    {
      path: '/Quit2',
      name: 'Quit2',
      component: Quit2},
  ],

  mode: "history"
})


const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to)
{
  return VueRouterPush.call(this, to).catch(err => err)

}


