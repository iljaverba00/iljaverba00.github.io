<template>
  <!--  <v-app-bar color="primary" density="compact">-->
  <!--    <v-app-bar-title> Test projects </v-app-bar-title>-->
  <!--  </v-app-bar>-->
  <!--  <v-infinite-scroll>-->

  <!--  </v-infinite-scroll>-->
  <!--  <v-container class="fill-height">-->
  <!--    <v-toolbar >-->
  <!--      <v-toolbar-title>-->
  <!--        Verba Ilia projects-->
  <!--      </v-toolbar-title>-->
  <!--    </v-toolbar>-->
  <!--    <v-responsive-->
  <!--      class="align-center fill-height mx-auto"-->
  <!--      max-width="900"-->
  <!--    >-->


  <!--    </v-responsive>-->
  <!--  </v-container>-->

  <v-app-bar
    color="primary"
    density="compact"
  >
    <!--    <template v-slot:prepend>-->
    <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
    <!--    </template>-->

    <v-app-bar-title>Projects|IV</v-app-bar-title>

    <!--    <template v-slot:append>-->
    <!--      <v-btn icon="mdi-dots-vertical"></v-btn>-->
    <!--    </template>-->
  </v-app-bar>
  <v-layout>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col
            v-for="project of projects"
            :key="project.title"
            cols="auto">
            <project-card
              :title="project.title"
              :subtitle="project.subtitle"
              :desc="project.desc"
              :image="project.image"
              :route = "project.route"
            />
            <!--            <v-sheet-->
            <!--              color="surface-variant-alt"-->
            <!--              height="300"-->
            <!--              width="300"-->
            <!--            >-->


            <!--            </v-sheet>-->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>

</template>

<script setup lang="ts">

import { routes } from '../router/routes.js'

const projects = [{
  title: "Augmented reality",
  subtitle: "Augmented reality project, based of WebXR",
  image: "eidosmedia-ar.png",
  desc: "Here should be description",
  route: routes[1].path
}]

</script>
